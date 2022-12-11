import { User } from "types/api";
import { getServerAxiosErrorInfo } from "utils/commonAxios";
import { authFetcher } from "utils/fetcher";
import { NextPageContext } from "next";

export default async function getServerSideProps({
  res,
  req,
  ...rest
}: NextPageContext) {
  const cookies = req?.headers.cookie;

  const requestURL = "/users/me";
  try {
    const { nickname: nickname } = await authFetcher<User>(requestURL, cookies);

    return {
      props: {
        nickname,
      },
    };
  } catch (err) {
    console.log(
      "user not logged in. Unable to fetch Navbar data. 401 Unauthorized error"
    );

    const { title, statusCode } = getServerAxiosErrorInfo(err);

    return {
      props: {
        error: { title, statusCode },
        data: {},
      },
    };
  }
}
