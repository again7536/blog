// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

type Data = string[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fileList = fs
    .readdirSync('public/posts')
    .map(file => file.split('.')[0]);
  res.status(200).json(fileList);
}
