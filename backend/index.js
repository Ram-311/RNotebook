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



const connectToMongo = require('./db');
const express = require('express');
const auth = require('./routes/auth');
const notes = require('./routes/notes');
const cors = require('cors');
require('dotenv').config(); // Load .env variables

const app = express();

// ✅ Allow frontend (Vercel) to access backend (Render)
app.use(cors({
  origin: process.env.FRONTEND_URL || "*", // example: https://your-frontend.vercel.app
  credentials: true
}));

// Connect to MongoDB
connectToMongo();

// Use environment variable for PORT (Render provides it), fallback to 5000 locally
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Available routes
app.use('/api/auth', auth);
app.use('/api/notes', notes);

// ✅ Default route for testing
app.get("/", (req, res) => {
  res.send("RNotebook Backend is running 🚀");
});

// Start server
app.listen(port, () => { 
  console.log(`RNotebook backend listening at http://localhost:${port}`);
});



// index.js
// require('dotenv').config();
// const express = require('express');
// const serverless = require('serverless-http');
// const connectToMongo = require('./db');
// const auth = require('./routes/auth');
// const notes = require('./routes/notes');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB Atlas
// connectToMongo();

// // Routes
// app.use('/api/auth', auth);
// app.use('/api/notes', notes);

// const PORT = process.env.PORT || 5000;

// // **Only listen if running locally (not serverless)**
// if (process.env.NODE_ENV !== 'production') {
//   app.listen(PORT, () => {
//     console.log(`iNotebook backend running locally at http://localhost:${PORT}`);
//   });
// }

// // Export for serverless
// module.exports = app;
// module.exports.handler = serverless(app);





// frontend url:https://i-notebook-mu-sand.vercel.app/

