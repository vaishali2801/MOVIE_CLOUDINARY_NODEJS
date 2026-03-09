🎬 Movie Details Management API

A RESTful API for managing movie details built with Node.js, Express.js, and MongoDB.
This project follows the MVC architecture and supports full CRUD operations for movie management.

The API also supports image upload using Multer and stores images on Cloudinary, making media handling scalable and efficient.

The API is tested using Postman and deployed on Render.
```
🚀 Live API
https://your-movie-api.onrender.com/

Test the server:

GET /
✨ Features

🎬 Create a new movie with poster upload
📃 Get all movies
🔎 Get movie by ID
✏️ Update movie details
❌ Delete a movie
🖼 Upload movie poster using Multer
☁️ Store images on Cloudinary
⚠️ Centralized error handling
🧩 Clean MVC architecture
🗄 MongoDB database integration
🧪 API testing with Postman
☁️ Deployment on Render

🛠 Tech Stack
Technology	Usage
Node.js	Runtime Environment
Express.js	Backend Framework
MongoDB	Database
Mongoose	MongoDB ODM
Multer	File Upload Middleware
Cloudinary	Cloud Image Storage
dotenv	Environment Variables
Postman	API Testing
Render	Deployment
📁 Project Structure
MOVIE-DETAILS-API
│
├── controller
│   └── MovieController.js
│
├── db
│   └── mongoose.js
│
├── middleware
│   ├── HttpError.js
│   └── upload.js
│
├── config
│   └── cloudinary.js
│
├── model
│   └── MovieModel.js
│
├── routes
│   └── MovieRoute.js
│
├── .env
├── app.js
├── package.json
└── README.md
📌 API Endpoints
Method	Endpoint	Description
GET	/	Check server
POST	/movies	Create movie with poster
GET	/movies	Get all movies
GET	/movies/:id	Get movie by ID
PATCH	/movies/:id	Update movie
DELETE	/movies/:id	Delete movie
🧪 API Testing (Postman)
```
📸 Screenshots

Server Check



Create Movie



Get All Movies



Get Movie by ID



Update Movie



Delete Movie


```
📦 Movie Data Example
{
  "title": "Avengers: Endgame",
  "description": "Superheroes unite to defeat Thanos.",
  "genre": "Action",
  "director": "Anthony Russo",
  "cast": ["Robert Downey Jr", "Chris Evans"],
  "releaseYear": 2019,
  "duration": 180,
  "rating": 8.7,
  "poster": "cloudinary-image-url"
}
⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/your-username/movie-details-api.git
2️⃣ Go to project folder
cd movie-details-api
3️⃣ Install dependencies
npm install
4️⃣ Create .env file
PORT=5000

MONGO_URL=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
5️⃣ Run the server
npm run dev

or

node app.js
🌐 Server runs on
http://localhost:5000
👩‍💻 Author

Chauhan Vaishali

Frontend Developer Student
Government Engineering College, Bhavnagar

🔗 GitHub
https://github.com/vaishali2801

🔗 LinkedIn
https://www.linkedin.com/in/vaishalich2801
