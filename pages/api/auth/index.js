import { withSessionApiRoute } from "../../../lib/session";
/**
 * get user information from session
 */

const handler = async (req, res) => {
  const user = req.session.user;
  const token = req.session.token;

  res.status(200).json({
    token,
    user,
  });
};

export default withSessionApiRoute(handler);
