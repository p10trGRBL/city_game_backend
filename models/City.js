import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    url: {
        type: String, 
        required: true,
    },
    correct_answer: {
        type: String,
        required: true,
        trim: true,
    },
    additional_answer1: {
        type: String,
        required: true,
        trim: true,
    },
    additional_answer2: {
        type: String,
        required: true,
        trim: true,
    },
});

export default mongoose.model('City', citySchema);