import axios from "axios";
import { serverAxios } from "utils/commonAxios";
import { getCookie } from "utils/cookies";

class CustomError extends Error {
  status: number;

  constructor(status: number, message?: string) {
    super(message);
    this.status = status;
  }
}

export async function fetcher<T>(url: string) {
  return (await serverAxios.get<T>(url)).data;
}

export async function authFetcher<T>(url: string, cookies?: string) {
  const token = getCookie("wts_web_token", cookies);
  if (!token || token === "") {
    const error = new CustomError(401, "Not Authorized");
    throw error;
  }

  return (
    await serverAxios.get<T>(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data;
}
