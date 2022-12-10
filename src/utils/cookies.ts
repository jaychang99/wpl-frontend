import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";
import { isBrowser } from "utils/browser";

// code from https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
export function setCookie(name: string, value: string, days: number) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// code from https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
export function getCookie(c_name: string, cookies?: string) {
  let ca = null;
  if (isBrowser()) {
    console.log("\n\nis browswer\n\n");
    ca = document.cookie;
  } else {
    console.log("\n\nis not browswer\n\n");
    if (cookies == null) {
      console.log("\n\ncookie is null\n\n");
      return null;
    } else ca = cookies;
  }

  var i,
    x,
    y,
    ARRcookies = ca.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == c_name) {
      return unescape(y);
    }
  }
}

// code from https://stackoverflow.com/questions/2144386/how-to-delete-a-cookie
export function eraseCookie(name: string, path?: string, domain?: string) {
  if (getCookie(name)) {
    document.cookie =
      name +
      "=" +
      (path ? ";path=" + path : "") +
      (domain ? ";domain=" + domain : "") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}
