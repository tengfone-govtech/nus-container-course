// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: String;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonData: String = await getData();
  res.status(200).json({ data: jsonData });
}

export async function getData() {
  const text: Array<String> = [
    "Logic will get you from A to B. Imagination will take you everywhere.",
    "There are 10 kinds of people. Those who know binary and those who don't.",
    "There are two ways of constructing a software design. One way is to make it \
    so simple that there are obviously no deficiencies and the other is to make it \
    so complicated that there are no obvious deficiencies.",
    "It's not that I'm so smart, it's just that I stay with problems longer.",
    "It is pitch dark. You are likely to be eaten by a grue.",
  ];
  const randomElement: String = text[Math.floor(Math.random() * text.length)];
  return randomElement;
}
