import { withSessionApiRoute } from "../../../lib/session";

/**
 * save user and token in session
 */

const handler = async (req, res) => {
  req.session.token = "aeyacafdsfsfffaf";
  req.session.user = {
    id: 1,
    username: "Yan Moe Naing",
    email: "yan@gmail.com",
  };

  await req.session.save();

  res.status(200).json({
    error: false,
    message: "Login success",
  });
};

export default withSessionApiRoute(handler);
