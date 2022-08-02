// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { checkAuth } from '../../lib/authCheck'
import { Set401 } from '../../lib/responseHelpers';
import { createHmac } from "crypto";
import getRawBody from "raw-body"

type Data = {
  hash: string,
  signature: string | string[] | undefined,
  match: boolean
}

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // const auth = checkAuth(req?.headers?.authorization);

  // if (!auth) {
  //   return Set401(res)
  // }

  // return res.status(200).json({ name: 'John Doe' });

  // console.log('REQ', req);

  const rawBody = await getRawBody(req);
  console.log('RAWBODY', rawBody)
  
  const jsonBody = rawBody.toJSON();
  console.log('JSON', jsonBody)

  const secret = 'james'
  const signature = req?.headers?.['x-wc-webhook-signature']
  console.log('SIGNATURE', signature)

  const hash = createHmac('sha256', secret).update(rawBody).digest("base64");
  console.log('HASH', hash)

  const match = hash === signature ? true : false
  console.log('MATCH', match)

  return res.status(200).json({
    hash,
    signature,
    match
  })

}
