import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    _id: String,
    number: String,
    name: String,
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
    image: String,
  },
  { collection: "courses" }
);

export default courseSchema;
