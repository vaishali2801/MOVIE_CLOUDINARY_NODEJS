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
<img width="1280" height="832" alt="start" src="https://github.com/user-attachments/assets/fe460d4b-6264-4a12-a887-7f98308993a3" />



Create Movie

<img width="1280" height="832" alt="add" src="https://github.com/user-attachments/assets/1b3e30b5-ea72-48b2-ba39-cd5810033332" />


Get All Movies
<img width="1280" height="832" alt="get all" src="https://github.com/user-attachments/assets/78a475c4-ecb3-4a4f-832a-e4766e4747ea" />



Get Movie by ID
<img width="1280" height="832" alt="get by id" src="https://github.com/user-attachments/assets/3839800f-bbec-4a95-a403-f46533491cf1" />



Update Movie

<img width="1280" height="832" alt="update" src="https://github.com/user-attachments/assets/e5943650-adc2-4d43-9077-90f1ce6f21fe" />


Delete Movie

<img width="1280" height="832" alt="delete" src="https://github.com/user-attachments/assets/76d3cc31-b869-4239-b8eb-ce4fcb379d2e" />

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
