const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();


const app = express();
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/rsvp');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
connectDB();

const userSchema = new mongoose.Schema({
    email: { type: String,unique: true, required:true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

const hardcodedUserEmail = process.env.EMAIL_USER;

const hardcodedUserPassword = process.env.USER_PASSWORD;

bcrypt.hash(hardcodedUserPassword,10, async (err, hash) => {
    if (err) throw err;

    const hardcodedUser = {
        email: hardcodedUserEmail,
        password: hash
    };
    await User.create(hardcodedUser);
    console.log('Hardcoded user created:', hardcodedUser);
    
});

const rsvpSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    plusOne: String,
    attending: Boolean
});

const Rsvp = mongoose.model('Rsvp', rsvpSchema);

const authenticate = (req,res,next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

app.get('/api/rsvps', authenticate, async (req, res) => {
    const rsvps = await Rsvp.find();
    res.json(rsvps);
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    console.log('Incoming Email:', email);
    console.log('Incoming Password:', password);

    const user = await User.findOne({ email });
    if (!user) {
        console.log('Email does not match');
        return res.status(401).send('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        console.log('Password does not match');
        return res.status(401).send('Invalid Credentials');
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});