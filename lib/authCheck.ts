import { createHmac } from "crypto";

export const checkAuth = (providedKey: string | undefined): boolean => {

  const apiKey: string | undefined = process.env.API_KEY;

  if (apiKey === providedKey) {
    return true
  } else {
    return false
  }

}

export const checkSignature = (payload: any, signature: string): boolean => {

  // set woocommerce endpoint secret
  const secret: string = process.env.WC_WEBHOOK_SIGNATURE || 'james'

  const hash = createHmac('sha256', secret).update(payload).digest("base64");

  const match = hash === signature ? true : false

  return match

}