const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token)
      return res.status(401).json({ msg: "No auth token, access denied!" });

    const isVerified = jwt.verify(token, "passwordKey");
    if (!isVerified)
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied." });

    req.user = isVerified.id;
    req.token = token;
    // next means that it can call the next callback function in routes
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = auth;