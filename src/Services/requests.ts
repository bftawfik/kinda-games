const protocol: string = "http";
const server: string = "94.237.109.240";
const port: string = "4200";
const loginPort: string = "4000";

const postIsSubscribed = async (token: string) =>
  await fetch(`${protocol}://${server}:${port}/tpay/isSubscribed`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ token: token }),
  });

const postCenterLogin = async (
  msisdn: string,
  serviceName: string,
  language: number
) =>
  await fetch(`${protocol}://${server}:${loginPort}/center/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      msisdn: msisdn,
      service: serviceName,
      language: language,
    }),
  });

export { postIsSubscribed, postCenterLogin };
