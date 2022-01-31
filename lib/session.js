import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

const sessionOptions = {
  cookieName: "sein-hnin-app",
  password: "complex_password_at_least_32_characters_long",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export const withSessionApiRoute = (handler) => {
  return withIronSessionApiRoute(handler, sessionOptions);
};

export const withSessionSsr = (handler) => {
  return withIronSessionSsr(handler, sessionOptions);
};
