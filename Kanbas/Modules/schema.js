import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    lessons: [
      {
        name: String,
        description: String,
        module: { type: mongoose.Schema.Types.ObjectId, ref: "ModuleModel" },
      },
    ],
  },
  { collection: "modules" }
);
export default moduleSchema;

// import mongoose from "mongoose";
// const moduleSchema = new mongoose.Schema(
//   {
//     id: String,
//     name: String,
//     description: String,
//     course: String,
//     lessons: [
//       {
//         name: String,
//         description: String,
//         module: String,
//       },
//     ],
//   },
//   { collection: "modules" }
// );

// export default moduleSchema;
