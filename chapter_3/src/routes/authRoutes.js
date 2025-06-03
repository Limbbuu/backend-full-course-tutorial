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
    
    // save the new user and hashed  password to the database
    try {
        const inserUser = db.prepare(`INSERT INTO users (username, password)
            VALUES (?, ?)`);
            const result = inserUser.run(username, hashedPassword);

            // now that we have a user, I want to add their first todo for them
            const defaultTodo = 'Hello :) Add your first todo!';
            const insertTodo = db.prepare(`INSERT INTO todos (user_id, task)
                VALUES (?, ?)`);
                insertTodo.run(result.lastInsertRowid, defaultTodo);

            // create a token
            const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET, {expiresIn: '24'});
            res.json({ token });
    } catch (error) {
        console.log(error.message);
        res.sendStatus(503);
    };
});

router.post('/login', (req, res) => {
    // we get their email, and we look up the password associated with that email in the database
    // but we get it back and see it's encrypted, which means that we cannot compare it to the one the user just used trying to login
    // so what we can to do, is again, one way encrypted the password the user just entered

});

export default router;