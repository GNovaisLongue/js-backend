const express = require("express");
const routes = require("./routes/index");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use("/", routes);

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
