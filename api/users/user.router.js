const { createUser } = require("./user.controller");

const router = require("express").Router();

router.post("/createUser", createUser);

module.exports = router;
