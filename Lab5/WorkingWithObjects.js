const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};
const module = {
  id: 2,
  name: "NodeJS Module",
  description: "Create a NodeJS server with ExpressJS",
  course: "2021-10-10",
};

export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
    // use .json() instead of .send() if you know the response is formatted as JSON
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });
  app.get("/lab5/assignment/score", (req, res) => {
    res.json(assignment.score);
  });
  app.get("/lab5/assignment/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    assignment.score = newScore;
    res.json(assignment);
  });
  app.get("/lab5/assignment/completed", (req, res) => {
    res.json(assignment.completed);
  });
  app.get("/lab5/assignment/completed/:completed", (req, res) => {
    assignment.completed = req.params;
    res.json(assignment);
  });

  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });
  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });
  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  });
  app.get("/lab5/module/description", (req, res) => {
    res.json(module.description);
  });
  app.get("/lab5/module/description/:newDescription", (req, res) => {
    const { newDescription } = req.params;
    module.description = newDescription;
    res.json(module);
  });
}
