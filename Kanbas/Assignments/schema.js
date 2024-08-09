import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    id: String,
    title: String,
    course: String,
    points: Number,
    description: String,
    duedate: Date,
    startdate: Date,
    enddate: Date,
  },
  { collection: "assignments" }
);
export default assignmentSchema;
