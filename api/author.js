const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require("../config/keys");

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

/**
 * Login route
 * @ POST /api/author/login
 */

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    //Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    //TO DO: Refactor using deconstruction
    const email = req.body.email;
    const password = req.body.password;

    Author.findOne({ email }).then(user => {
        if (!user) {
            return res.status(400).json({
                success: false,
                token: null,
                _id: null,
                email: null,
                userName: null,
                msg: "Email not found. Please Sign Up!"
            });
        }
        //Check Password
        user.comparePassword(password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create Passport JWT Payload
                const payload = {
                    id: user.id,
                    email: user.email
                };
                //Sign Token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token,
                            id: user.id,
                            email: user.email,
                            userName: user.userName
                        });
                    }
                );
            } else {
                return res.status(400).json({
                    success: false,
                    token: null,
                    _id: null,
                    email: null,
                    userName: null,
                    msg: "Password incorrect"
                });
            }
        });
    });
});

module.exports = router;