
// Route 2: login a user useing the post "/api/auth/login".  Doesn't require login
router.post('/login', [
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password cannot be blacked').exists(),
], async (req, res) => {
    //if errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); ''
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: "invalid Credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        sucess = false

        if (!passwordCompare) {
            return res.status(400).json({ sucess, errors: "invalid Credentials" });
        }
        const data = {
            user: {
                id: user.id // using id to check the user
            }
        }
        const authToken = jwt.sign(data, JWTSCRET);
        //console.log(authToken);
        // res.json(user)
        sucess = true;
        res.json({ sucess, authToken }); // using the jwt token to verify user
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

//Route 3 to get the user details Get /api/auth/userdetails  login required 
router.get('/userdetails', fetchUser, async (req, res) => {
    try {
       
        const user = await User.findById(req.user.id).select("-password") // give user details except password
        res.send(user)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 4 to updtae user details /api/auth/updateuser login required 
router.patch('/updateuser', fetchUser, async (req, res) => {
    try {

        const { name, phone, photo, bio } = req.body;
        const updateUser = ({});

        if (name) {
            updateUser.name = name;
        }
        if (phone) {
            updateUser.phone = phone;
        }
        if (photo) {
            updateUser.photo = photo;
        }
        if (bio) {
            updateUser.bio = bio;
        }

        // find the note to be updated and update it 
        let users = await User.findById(req.user.id);
        if (!users) {
            return res.status(404).send("not found");// note does not exist
        }

        users = await User.findByIdAndUpdate(req.user.id, { $set: updateUser }, { new: true });

        users = await User.findById(req.user.id).select("-password");

        res.json(users);


        // second method
        //     const users = await User.findById(req.user.id);

        //     const { name, phone, photo, bio } = req.body;
        //    // const updateUser = ({});

        //     if (name) {
        //         users.name = name;
        //     }
        //     if (phone) {
        //         users.phone = phone;
        //     }
        //     if (photo) {
        //         users.photo = photo;
        //     }
        //     if (bio) {
        //         users.bio = bio;
        //     }



        //     // find the note to be updated and update it 
        //     // let users = await User.findById(req.user.id);
        //   

        //    let newuser= await users.save();
        //     // users = await User.findByIdAndUpdate(req.user.id, { $set: updateUser }, { new: true });

        //     newuser = await User.findById(req.user.id).select("-password");

        //     res.json( newuser );

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


})

router.patch('/updatepassword', fetchUser, async (req, res) => {

    try {
        const user = await User.findById(req.user.id);
        const { oldPassword, password } = req.body;

        if (!user) {
            res.status(400).send("User not found, please signup");
        }
        //Validate
        if (!oldPassword || !password) {
            res.status(400).send("Please add old and new password");
        }

        // check if old password matches password in DB
        const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);

        // Save new password
        if (user && passwordIsCorrect) {
            const salt = bcrypt.genSaltSync(10); // genrtating salt for hashing
            const safePassword = await bcrypt.hash(password, salt); // generating hash and addind salt in it
            user.password = safePassword;
            await user.save();
            res.status(200).send("Password change successful");
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
// route for forgetpassword 
router.post('/forgetpassword', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            res.status(404);
            throw new Error("User does not exist");
        }

        // Delete token if it exists in DB
        let token = await Token.findOne({ userId: user._id });
        if (token) {
            await token.deleteOne();
        }

        // Create Reste Token
        let resetToken = crypto.randomBytes(32).toString("hex") + user._id;
        console.log(resetToken);

        // Hash token before saving to DB
        const hashedToken = crypto
            .createHash("sha256")
            .update(resetToken)
            .digest("hex");

        // Save Token to DB
        await new Token({
            userId: user._id,
            token: hashedToken,
            createdAt: Date.now(),
            expiresAt: Date.now() + 30 * (60 * 1000), // Thirty minutes
        }).save();

        // Construct Reset Url
        const resetUrl = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

        // Reset Email
        const message = `
            <h2>Hello ${user.name}</h2>
            <p>Please use the url below to reset your password</p>  
            <p>This reset link is valid for only 30minutes.</p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
            <p>Regards...</p>
            <p>Pinvent Team</p>
          `;
        const subject = "Password Reset Request";
        const send_to = user.email;
        const sent_from = process.env.EMAIL_USER;

        try {
            await sendEmail(subject, message, send_to, sent_from);
            res.status(200).json({ success: true, message: "Reset Email Sent" });
        } catch (error) {
            res.status(500).send("Email not sent, please try again");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.put('/resetpassword/:resetToken', async (req, res) => {
    try {
        const { password } = req.body;
        const { resetToken } = req.params;

        // Hash token, then compare to Token in DB
        const hashedToken = crypto
            .createHash("sha256")
            .update(resetToken)
            .digest("hex");

        // fIND tOKEN in DB
        const userToken = await Token.findOne({
            token: hashedToken,
            // expiresAt: { $gt: Date.now() },
        });

        if (!userToken) {
            res.status(404).send("Invalid or Expired Token");
        }

        // Find user
        const user = await User.findOne({ _id: userToken.userId });
        const salt = bcrypt.genSaltSync(10); // genrtating salt for hashing
        const safePassword = await bcrypt.hash(password, salt); // generating hash and addind salt in it
        user.password = safePassword;
        await user.save();
        res.status(200).json({
            message: "Password Reset Successful, Please Login",
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router;