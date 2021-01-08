const User = require("../models").user;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");

  if (!auth || !auth[0] === "Bearer" || !auth[1]) {
    res.status(401).send({
      message:
        "This endpoint requires an Authorization header with a valid token"
    });
  }

  try {
    const data = toData(auth[1]);
    const user = await User.findByPk(data.userId);
    if (!user) {
      return res.status(404).send({ message: "User does not exist" });
    }

    // add user object to request
    req.user = user;
    // next handler
    return next();
  } catch (error) {
    console.log("ERROR IN AUTH MIDDLEWARE", error);

    switch (error.name) {
      case "TokenExpiredError":
        return res
          .status(401)
          .send({ error: error.name, message: error.message });

      case "JsonWebTokenError":
        return res
          .status(400)
          .send({ error: error.name, message: error.message });

      default:
        return res.status(400).send({
          message: "Something went wrong, sorry"
        });
    }
  }
}

  // 1. check for authorization header and "split" it.
  // 2. if authorization header is there, auth type is Bearer and we have something at auth[1] we proceed to check the token.
  //    If not, we return a 401 status and the message: 'Please supply some valid credentials
  //    Remember to try/catch the call to "toData()".
  // 3. Use the value returned from "toData()" to look for that user in your database with User.findByPk
  // 4. If not found, set status to 404 "no user found";
  // 5. If user is found, set it to `req.user = user` and call next();


module.exports = auth;