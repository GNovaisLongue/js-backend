const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv");

const v1Routes = require("./routes/v1/index");
const errorHandler = require("./middleware/ErrorHandler");

dotenv.config({ path: ".env" });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Helmet to secure your app by setting HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: false, // Enable and configure as needed
    crossOriginResourcePolicy: { policy: "same-site" },
    referrerPolicy: { policy: "no-referrer" },
  })
);

// Morgan to log HTTP requests
app.use(morgan("combined"));

// CORS to allow cross-origin requests
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// Rate Limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // limit each IP to 30 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

app.use("/", v1Routes);

// Error handling middleware (should be last)
//double check functionality and necessity
app.use(errorHandler);

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
