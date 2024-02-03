const router = require("express").Router();
const {
  createUser,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
  login,
} = require("./user.controller.js");

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserByUserId);
// router.patch("/", updateUsers);
router.delete("/", deleteUser);
router.post("/login", login);

module.exports = router;
