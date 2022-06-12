// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

type Data = {
  fileList: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fileList = fs.readdirSync('/posts');
  res.status(200).json({ fileList: fileList });
}
