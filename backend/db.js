const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

const mongoURI = process.env.MONGO_URI; // Read from .env

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;




// mongo_password=xSBbLZzpEuqybGSz


// const mongoose = require('mongoose');
// require('dotenv').config();

// const mongoURI = process.env.MONGO_URI || "mongodb+srv://mrramakrishna311_db_user:Ram@2004@cluster0.xh2nysi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// const connectToMongo = async () => {
//   try {
//     await mongoose.connect(mongoURI);
//     console.log("✅ Connected to MongoDB successfully");
//   } catch (error) {
//     console.error("❌ Error connecting to MongoDB:", error.message);
//   }
// };

// module.exports = connectToMongo;




// const mongoose = require('mongoose');
// require('dotenv').config();

// const mongoURI = process.env.MONGO_URI; // load cluster URI

// const connectToMongo = async () => {
//     try {
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("✅ Connected to MongoDB Atlas Cluster");
//     } catch (error) {
//         console.error("❌ Error connecting to MongoDB:", error.message);
//     }
// };

// module.exports = connectToMongo;




// db.js
// const mongoose = require('mongoose');
// require('dotenv').config();

// const mongoURI = process.env.MONGO_URI; // Atlas URI from .env

// const connectToMongo = async () => {
//     try {
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("✅ Connected to MongoDB Atlas Cluster");
//     } catch (error) {
//         console.error("❌ Error connecting to MongoDB:", error.message);
//     }
// };

// module.exports = connectToMongo; // export function directly

