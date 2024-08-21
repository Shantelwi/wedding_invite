const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();


const app = express();
app.use(express.json());

// mongoose.connect('mongodb://localhost:3001/rsvp', { 
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true 
// });

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:3001/rsvp');
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

let hardcodedUserPasswordHash;

bcrypt.hash(hardcodedUserPassword,10,(err, hash) => {
    if (err) throw err;
    hardcodedUserPasswordHash = hash;
    console.log('Hashed password:', hardcodedUserPasswordHash);
});

const hardcodedUser = {
    email: hardcodedUserEmail,
    password: hardcodedUserPasswordHash
};


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

    if (email !== hardcodedUser.email) {
        return res.status(401).send('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, hardcodedUser.password);
    if (!isMatch) {
        return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ email: hardcodedUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});