// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import formidable from 'formidable';
import fs from 'fs';

type Data = string[];

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest & { files: any[] },
  res: NextApiResponse<Data>
) {
  let db = null;
  try {
    // Open DB
    db = await open({
      filename: 'db/blog.db',
      driver: sqlite3.Database,
    });

    // GET
    if (req.method === 'GET') {
      const rows = await db.all('SELECT * FROM posts');

      res.status(200).json(rows);
    }
    // POST
    else if (req.method === 'POST') {
      const id: [{ seq: number }] = await db.all(
        'SELECT * FROM SQLITE_SEQUENCE'
      );
      const basePath = 'public/posts/' + (id[0].seq + 1);

      fs.mkdirSync(basePath);
      const form = formidable({
        uploadDir: basePath,
        filter: function ({ name }) {
          return !!name && (name.includes('img') || name.includes('markdown'));
        },
        filename: function (name, ext, part, form) {
          return `${new Date().getTime()}-${part.originalFilename}`;
        },
      });

      //resolve parsing with Promise
      const [fields, files] = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) {
            reject(err);
          }
          resolve([fields, files]);
        });
      });

      const { title, summary } = fields;

      const imgUrl = basePath + '/' + files.img.newFilename;
      const fileUrl = basePath + '/' + files.markdown.newFilename;

      const result = await db.all(
        `INSERT INTO posts (title, imgUrl, summary, fileUrl) VALUES ('${title}', '${imgUrl}', '${summary}', '${fileUrl}')`
      );

      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).end();
  } finally {
    if (db) db.close();
  }
}
