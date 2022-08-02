import { Set401 } from "./responseHelpers";

export const checkAuth = (providedKey: string | undefined): boolean => {

  const apiKey: string | undefined = process.env.API_KEY;

  if (apiKey === providedKey) {
    return true
  } else {
    return false
  }

}