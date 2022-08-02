import { NextApiResponse } from "next";

export function Set405(res: NextApiResponse<any>) {
  res.status(405).json({ message: "Request could not be authenticated. Invalid credentials provided." });
  //res.send({ message: "Method not allowed." });
}

export function Set401(res: NextApiResponse<any>) {
  res.status(401).json({ message: "Request could not be authenticated. Invalid credentials provided." });
  // res.send({ message: "Request could not be authenticated. Invalid credentials provided." })
}

export function Set202(res: NextApiResponse<any>) {
  res.status(202).json({ message: "Webhook accepted." });
  //res.send({ message: "Webhook accepted." })
}