import mongoose from "mongoose"
import User from "../models/user.models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env";

// Implementing signUp logic
export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    // Logic to create new user
    try {
        const { name, email, password } = req.body;

        // Check if a user already exist
        const existingUser = await User.findOne({email});

        if (existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 409;
            throw error;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create([{ name, email, password: hashedPassword }], { session });
        const token = jwt.sign({userId: newUser[0]._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: {
                token,
                user: newUser[0]
            }
        });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }

}

export const signIn = async (req, res, next) => {
    // Implementing signIn logic
}

export const signOut = async (req, res, next) => {
    // Implementing signOut logic
}

