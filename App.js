// const express = require("express"); // equivalent to import
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import cors from "cors";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";

const app = express(); // create new express instance
app.use(cors());
app.use(express.json());
ModuleRoutes(app)
AssignmentRoutes(app)
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);
