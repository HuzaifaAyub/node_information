import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// defining URL of MongoDB
// const mongoURL = 'process.env.LOCAL_MONGODB_URL';
const mongoURL= process.env.MONGODB_URL

// setting up MongoDB connection
mongoose.connect(mongoURL)


const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB error:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

export default db;