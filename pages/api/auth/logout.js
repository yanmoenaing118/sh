import { withSessionApiRoute } from "../../../lib/session";

/**
 * destroy session
 */

const handler = async (req, res) => {
  req.session.destroy();
  res.status(200).json({
    error: false,
    message: "Logout succes",
  });
};

export default withSessionApiRoute(handler);
