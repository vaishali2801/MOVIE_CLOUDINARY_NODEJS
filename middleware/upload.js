import multer from "multer";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "movies",
        allowedFormats: ["jpg", "png", "jpeg","webp","pdf"],
        transformation:[{width:550,height:550,crop:"limit"}]
    }
})
const uploads = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }
});
export default uploads;