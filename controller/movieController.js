import HttpError from "../middleware/HttpError.js";
import cloudinary from "../config/cloudinary.js";
import movie from "../model/movieModel.js";
//ADD MOVIE 
const addMovie = async (req, res, next) => {
    try {
        const { title, description, genre, releaseYear,rating} = req.body;
        if (!req.file) {
            return next(new HttpError("Poster Image is required", 400));
        }
        const newMovie = new movie({
            title,
            description,
            genre,
            releaseYear,
            rating,
            poster: req.file.path,
            cloudinary_id: req.file.filename
        })
        await newMovie.save();
        res.status(201).json({ success: true, message: "Movie added Successfully", movie: newMovie });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
}
//GET ALL MOVIE
const GetAllMovie = async (req, res, next) => {
    try {
        const movies = await movie.find({});
        if (movies.length === 0) {
            res.status(200).json({ message: "no movie data found" });
        }
        res.status(200).json({ message: "movie data fetched successfully!", movies })
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
}
//GET SINGLE MOVIE BY USING ID
const getMovieById = async (req, res, next) => {
    try {
        const movies = await movie.findById(req.params.id)
        if (!movies) {
            return next(new HttpError("movie not found with this id", 404));
        }
        res.status(200).json({ message: "movie find successfully with this id", movies });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
}
//DELETE MOVIE
const deleteMovie = async (req, res, next) => {
    try {
        const movies = await movie.findById(req.params.id);
        if (!movies) {
            return next(new HttpError("movie not found!!", 404));
        }
        await cloudinary.uploader.destroy(movies.cloudinary_id);
        await movies.deleteOne();
        res.status(200).json({ success: true, message: "movie deleted successfully!!" });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
}
//UPDATE MOVIE
const updateMovie = async (req, res, next) => {
    try {
        const product = await movie.findById(req.params.id);
        if (!product) {
            return next(new HttpError("movie not found", 404));
        }
        const updates = Object.keys(req.body);
        const allowedUpdate = ["title", "description", "genre", "releaseYear","rating"];

        const isValidUpdates = updates.every((f) => {
            return allowedUpdate.includes(f);
        });
        if (!isValidUpdates) {
            return next(new HttpError("only allowed fields can be updated", 404))
        }
        updates.forEach((u) => {
            product[u] = req.body[u];
        });

        if (req.file) {
            await cloudinary.uploader.destroy(product.cloudinary_id);
            product.image = req.file.path;
            product.cloudinary_id = req.file.filename;
        }
        await product.save();
        res.status(200).json({success:true,message:"movie updated successfully!",product});
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
}
export default { addMovie,GetAllMovie,getMovieById,deleteMovie,updateMovie}