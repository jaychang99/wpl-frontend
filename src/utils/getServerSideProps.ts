import { User } from "types/api";
import { getServerAxiosErrorInfo } from "utils/commonAxios";
import { authFetcher } from "utils/fetcher";
import { NextPageContext } from "next";

export default async function getServerSideProps({
  res,
  req,
  ...rest
}: NextPageContext) {
  console.log("CUSTOMGETSERVERSIDEPROPSCALLED");
  const cookies = req?.headers.cookie;
  // console.log(req);
  console.log("\n\n\nget server side props COOKIES\n\n\n", cookies);
  const requestURL = "/users/me";
  try {
    const { nickname: nickname } = await authFetcher<User>(requestURL, cookies);
    console.log("SUCCESS");
    return {
      props: {
        nickname,
      },
    };
  } catch (err) {
    // console.log("FAIL");
    console.log(err);
    const { title, statusCode } = getServerAxiosErrorInfo(err);

    return {
      props: {
        error: { title, statusCode },
        data: {},
      },
    };
  }
}
