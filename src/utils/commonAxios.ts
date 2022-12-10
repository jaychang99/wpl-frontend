import axios, { AxiosError } from "axios";

// axios object for requesting Server side rendering
// and simple POST, DELETE, PATCH requests
// (getServersideProps, getStaticProps)
export const serverAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

interface ErrorInfo {
  title: string;
  statusCode: number;
}

export function getServerAxiosErrorInfo(error: unknown) {
  const errorInfo: ErrorInfo = {
    title: "An Error has occurred. ",
    statusCode: 500,
  };

  if (axios.isAxiosError(error)) {
    const serverError = error as AxiosError;
    if (serverError && serverError.response) {
      errorInfo.statusCode = serverError.response.status;
    }
  }

  return errorInfo;
}
