const userRoutes = require("./routes/usersRoutes");
const morganMiddleware = require("./middleware/middleware");
const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

// middleware log
app.use(morganMiddleware);

app.get("/", (req, res) => {
  res.send("hallo dunia");
});

// users router
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
