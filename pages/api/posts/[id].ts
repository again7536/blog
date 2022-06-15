// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

type Data = string[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // Open DB
    const db = await open({
      filename: 'db/blog.db',
      driver: sqlite3.Database,
    });

    // GET
    if (req.method === 'GET') {
      const { id } = req.body;
      const rows = await db.all(`SELECT * FROM posts WHERE id=${id}`);

      res.status(200).json(rows);
    }
    // DELETE
    else if (req.method === 'DELETE') {
      const { id } = req.body;
      const result = await db.all(`DELETE FROM posts WHERE id=${id}`);

      res.status(200).json(result);
    }
    // PATCH
    else if (req.method === 'PATCH') {
      const { id, title, imgUrl, summary, fileUrl } = req.body;
      const result = await db.all(
        `UPDATE posts 
      SET title='${title}', imgUrl='${imgUrl}', summary='${summary}', fileUrl='${fileUrl}') 
      WHERE id=${id}`
      );

      res.status(200).json(result);
    }

    // Close DB
    db.close();
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
}
