// Connection in MongoDB

import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

// Throw an error if no DB_URI
if (!DB_URI) {
    throw new Error('Please define the MONGODB_URI.');
}

// Connecting to Database
const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to the database in ${NODE_ENV} mode.`)
    } catch (error) {
        console.error(`Error connecting to database. ${error}`);
        process.exit(1);
    }
}

export default connectToDatabase;