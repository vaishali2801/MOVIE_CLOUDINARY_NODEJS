import mongoose from "mongoose";
const movieSchema = mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        releaseYear: {
            type: Number,
            required: true
        },
        rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
        },
        poster: {
            type: String,
            required: true
        },
        cloudinary_id: {
            type: String,
            required: true
        }
    },
    {
    timestamps: true
    }
)
const movie = mongoose.model("movie",movieSchema);

export default movie;