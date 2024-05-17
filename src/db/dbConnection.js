import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
import { DB_NAME } from '../contants.js';

const connectionDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.DATABASE_URI}/${DB_NAME}`,
        );
        console.log(
            '\nvoila ! connected to the database -->',
            connectionInstance.connection.host,
        );
    } catch (error) {
        console.log('MongoDB error', error);
        process.exit(1);
    }
};

export default connectionDB;
