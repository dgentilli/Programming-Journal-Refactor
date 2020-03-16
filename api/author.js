const express = require("express");
const router = express.Router();

const Journal = require("../models/Journal");
const Author = require("../models/Author");

const validateRegisterInput = require("../validation/signup");
const validateLoginInput = require("../validation/login");

/**
 * Sign up route
 * @ POST /api/author/signup
 */
router.post("/signup", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    if (!req.body.email) {
        let errMsg =
            "Please provide user data in the request body {email: email@address.com}";
        return res.status(400).json({ err: errMsg });
    }
    Author.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({
                success: false,
                token: null,
                _id: null,
                email: null,
                userName: null,
                msg: "Account already exists!"
            });
        } else {
            const { email, password } = req.body;
            const newUser = new Author({
                email,
                password,
            });

            newUser.setPassword(password, err => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    newUser.save().then(usr => {
                        res.json(usr).catch(err => console.log(err));
                    });
                }
            });
        }
    });
});


module.exports = router;