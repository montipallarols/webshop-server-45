const { Router } = require('express')
const { toJWT, toData } = require('../auth/jwt')
const bcrypt = require('bcrypt');
const User = require("../models").user;
const router = new Router()
const authMiddleware = require("../auth/middleware");

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect"
      });
    }


    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/me", authMiddleware, async (req, res, next) => {
    const user = req.user;
    try {
      res.send(user);
    } catch (e) {
      next(e);
    }
  });

module.exports = router