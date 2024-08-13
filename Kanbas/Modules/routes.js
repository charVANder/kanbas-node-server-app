import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const { cid } = req.params;
    const module = await dao.createModule(cid, req.body);
    res.json(module);
  };

  const deleteModule = async (req, res) => {
    await dao.deleteModule(req.params.moduleId);
    res.sendStatus(204);
  };

  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules();
    res.json(modules);
  };

  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.moduleId);
    res.json(module);
  };

  const updateModule = async (req, res) => {
    await dao.updateModule(req.params.moduleId, req.body);
    res.sendStatus(204);
  };

  const findModulesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const modules = await dao.findModulesForCourse(courseId);
    res.json(modules);
  };

  app.post("/api/courses/:cid/modules", createModule);
  app.delete("/api/modules/:moduleId", deleteModule);
  app.get("/api/modules", findAllModules);
  app.get("/api/modules/:moduleId", findModuleById);
  app.put("/api/modules/:moduleId", updateModule);
  app.get("/api/courses/:courseId/modules", findModulesForCourse);
}

// import * as dao from "./dao.js";

// export default function ModuleRoutes(app) {
//   const createModule = async (req, res) => {
//     const { cid } = req.params;
//     const module = await dao.createModule(cid, req.body);
//     res.json(module);
//   };

//   // const deleteModule = async (req, res) => {
//   //   const status = await dao.deleteModule(req.params.moduleId);
//   //   console.log(req.params.moduleId, status);
//   //   res.json(status);
//   // };
//   const deleteModule = async (req, res) => {
//     await dao.deleteModule(req.params.moduleId);
//     console.log(module);
//     res.sendStatus(204); // Send an appropriate status code
//   };

//   const findAllModules = async (req, res) => {
//     const modules = await dao.findAllModules();
//     res.json(modules);
//   };

//   const findModuleById = async (req, res) => {
//     const module = await dao.findModuleById(req.params.moduleId);
//     res.json(module);
//   };

//   // const updateModule = async (req, res) => {
//   //   const { moduleId } = req.params;
//   //   const status = await dao.updateModule(moduleId, req.body);
//   //   res.json(status);
//   // };
//   const updateModule = async (req, res) => {
//     await dao.updateModule(req.params.moduleId, req.body);
//     res.sendStatus(204); // Send an appropriate status code
//   };

//   const findModulesForCourse = async (req, res) => {
//     const { cid } = req.params;
//     const modules = await dao.findModulesForCourse(cid);
//     console.log(modules);
//     res.json(modules);
//   };

//   app.post("/api/Courses/:cid/modules", createModule);
//   app.delete("/api/modules/:moduleId", deleteModule);
//   app.get("/api/modules", findAllModules);
//   app.get("/api/modules/:moduleId", findModuleById);
//   app.put("/api/modules/:moduleId", updateModule);
//   app.get("/api/Courses/:courseId/modules", findModulesForCourse);
// }

// // Old code here -Van
// import db from "../Database/index.js";
// export default function ModuleRoutes(app) {
//   app.put("/api/modules/:mid", (req, res) => {
//     const { mid } = req.params;
//     const moduleIndex = db.modules.findIndex((m) => m._id === mid);
//     db.modules[moduleIndex] = {
//       ...db.modules[moduleIndex],
//       ...req.body,
//     };
//     res.sendStatus(204);
//   });
//   app.delete("/api/modules/:mid", (req, res) => {
//     const { mid } = req.params;
//     db.modules = db.modules.filter((m) => m._id !== mid);
//     res.sendStatus(200);
//   });
//   app.post("/api/courses/:cid/modules", (req, res) => {
//     const { cid } = req.params;
//     const newModule = {
//       ...req.body,
//       course: cid,
//       _id: new Date().getTime().toString(),
//     };
//     db.modules.push(newModule);
//     res.send(newModule);
//   });
//   app.get("/api/courses/:cid/modules", (req, res) => {
//     const { cid } = req.params;
//     const modules = db.modules.filter((m) => m.course === cid);
//     res.json(modules);
//   });
// }
