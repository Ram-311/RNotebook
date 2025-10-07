// const connectToMongo = require('./db');
// const express = require('express');
// const auth = require('./routes/auth');
// const notes = require('./routes/notes');
// const cors = require('cors');
// require('dotenv').config(); // Load .env variables

// const app = express();
// app.use(cors());

// // Connect to MongoDB
// connectToMongo();

// // Use environment variable for PORT, fallback to 5000
// const port = process.env.PORT || 5000;

// // Middleware to parse JSON
// app.use(express.json());

// // Available routes
// app.use('/api/auth', auth);
// app.use('/api/notes', notes);

// // Start server
// app.listen(port, () => { 
//     console.log(`RNotebook backend listening at http://localhost:${port}`);
// });


// const connectToMongo = require('./db');
// const express = require('express');
// const auth = require('./routes/auth');
// const notes = require('./routes/notes');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// // ✅ Allow only your frontend URL
// const corsOptions = {
//   origin: "https://r-notebook-h4p7.vercel.app", 
//   methods: "GET,POST,PUT,DELETE",
//   credentials: true
// };
// app.use(cors(corsOptions));

// // Connect to MongoDB
// connectToMongo();

// const port = process.env.PORT || 5000;

// // Middleware to parse JSON
// app.use(express.json());

// // Available routes
// app.use('/api/auth', auth);
// app.use('/api/notes', notes);

// app.listen(port, () => {
//   console.log(`RNotebook backend listening at http://localhost:${port}`);
// });


// const connectToMongo = require('./db');
// const express = require('express');
// const auth = require('./routes/auth');
// const notes = require('./routes/notes');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// // Corrected CORS setup
// const corsOptions = {
//   origin: "https://r-notebook-h4p7.vercel.app",
//   methods: ["GET","POST","PUT","DELETE","OPTIONS"],
//   credentials: true,
//   allowedHeaders: ["Content-Type","Authorization"]
// };

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

// // Connect to MongoDB
// connectToMongo();

// // Middleware to parse JSON
// app.use(express.json());

// // Routes
// app.use('/api/auth', auth);
// app.use('/api/notes', notes);

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`RNotebook backend listening at http://localhost:${port}`);
// });

const connectToMongo = require('./db');
require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const auth = require('./routes/auth');
const notes = require('./routes/notes');
const cors = require('cors');

const app = express();

// CORS configuration for frontend
const corsOptions = {
  origin: "https://r-notebook-h4p7.vercel.app", // your Vercel frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions)); // apply CORS
app.options("*", cors(corsOptions)); // preflight support

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB Atlas
connectToMongo();

// Routes
app.use('/api/auth', auth);
app.use('/api/notes', notes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`RNotebook backend listening at http://localhost:${PORT}`);
});

