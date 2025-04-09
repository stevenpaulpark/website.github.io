const { db } = require("../function");
const bcrypt = require('bcrypt');

exports.index = async (req, res, next) => {
    const users = await db("users").select("*");
    const site_title = "블랙 망고 솔루션 :: BLACK MANGO SOULUTION";
    const payments = [
        {
            name: "test_user",
            amount: 00000
        },
    ];
    res.render("index", {
        site_title,
        payments,
        users,
    });
};

exports.new = async (req, res, next) => {
    console.log(req.body);
    const { username, password } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await db("users").insert({ username, password: hashedPassword });
    res.redirect("/");
};

exports.login = (req, res, next) => {
    res.render("login");
};

exports.logout = (req, res, next) => {
    res.render("logout");
};

