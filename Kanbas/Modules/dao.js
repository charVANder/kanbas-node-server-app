import model from "./model.js";

export const createModule = (courseId, module) => {
  delete module._id;
  const newModule = { ...module, course: courseId };
  return model.create(newModule);
};
export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findById(moduleId);
export const updateModule = (moduleId, module) =>
  model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
export const findModulesForCourse = (courseId) =>
  model.find({ course: courseId });

// import model from "./model.js";

// export const createModule = (courseId, module) => {
//   delete module._id;
//   const newModule = { ...module, course: courseId };
//   // newModule.id = new Date().getTime().toString();
//   return model.create(newModule);
// };
// export const findAllModules = () => model.find();
// export const findModuleById = (moduleId) => model.findById(moduleId);
// export const updateModule = (moduleId, module) =>
//   model.updateOne({ _id: moduleId }, { $set: module });
// export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
// export const findModulesForCourse = (courseId) =>
//   model.find({ course: courseId });
