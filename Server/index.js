const express = require("express");
const usersRouter = require("./routers/users");
const authRouter = require("./routers/auth");
const moodRouter = require("./routers/moods")
const { logger } = require("./middleware");
const app = express();
const port = process.env.PORT || 80;

app.use(express.static("build"));


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Content-Type", "application/json");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(express.json());
app.use(logger);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/mood", moodRouter);

app.get("/", (req, res) => {
  res.send("Welcome to our server!");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

//Howdy This is a test comment