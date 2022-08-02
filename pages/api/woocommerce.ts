// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { checkSignature } from '../../lib/authCheck'
import { Set202, Set401 } from '../../lib/responseHelpers';
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

  // check if WC is sending a webhook id (happens after webhook is created or updated)
  if (req.headers['content-type'] === "application/x-www-form-urlencoded") {
    console.log('WC webhook checked in')
    return Set202(res)
  }

  // Payload and signature data for hashing and signature check
  const rawBody = await getRawBody(req);
  const signature: string = req?.headers?.['x-wc-webhook-signature']?.toString() || ''
  const sigCheck = checkSignature(rawBody, signature)

  if (!sigCheck) {
    return Set401(res)
  }

  // parse raw body to json
  const jsonBody = JSON.parse(rawBody.toString());

  // send json body to be processed by WC service
  const event: string = req?.headers?.['x-wc-webhook-topic']?.toString() || ''

  return Set202(res);

}
