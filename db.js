import mongoose from 'mongoose';

// defining URL of MongoDB
const mongoURL = 'mongodb://localhost:27017/info';

// setting up MongoDB connection
mongoose.connect(mongoURL);

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