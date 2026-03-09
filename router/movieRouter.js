import express from "express";
import uploads from "../middleware/upload.js"
import movieController from "../controller/movieController.js";

const router = express.Router();

router.post("/add",uploads.single("poster"),movieController.addMovie)
router.get("/allMovie", movieController.GetAllMovie);
router.get("/:id", movieController.getMovieById);
router.delete("/:id", movieController.deleteMovie);
router.patch("/:id", uploads.single("poster"),movieController.updateMovie);


export default router;