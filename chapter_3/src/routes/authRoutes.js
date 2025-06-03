import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();


// Register a new user endpoint /auth/register
router.post('/register', (req, res) => {
    const {username, password} = req.body;
    // save username and an irreversibly encrypted to database

    // encrypt the password
    const hashedPassword = bcrypt.hashSync(password, 8);
    
    console.log(hashedPassword);

    res.sendStatus(201);
});

router.post('/login', (req, res) => {
    // we get their email, and we look up the password associated with that email in the database
    // but we get it back and see it's encrypted, which means that we cannot compare it to the one the user just used trying to login
    // so what we can to do, is again, one way encrypted the password the user just entered

});

export default router;