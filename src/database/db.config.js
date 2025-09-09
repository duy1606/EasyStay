const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "esaystay",
    });
    console.log("✅ Kết nối MongoDB thành công");
  } catch (error) {
    console.error("❌ Kết nối MongoDB thất bại:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
