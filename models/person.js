import mongoose from 'mongoose';

// defining person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    profession: {
        type: String,
        // enum: ['cheif', 'waiter', 'manager'],
        required: true
    },
    phonenum: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }
});

const Person = mongoose.model('Person', personSchema);

export default Person;