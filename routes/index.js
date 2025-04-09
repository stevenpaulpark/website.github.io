const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.get("/", controller.index);
router.post("/new", controller.new);

router.get("/login", controller.login);

router.get("/logout", controller.logout);

module.exports = router;
