const express = require("express");
const employeeRoutes = require("./routes/employee");
const morgan = require("morgan");

const mongoose = require("mongoose");
const cors=require("cors")
mongoose.connect(
  "mongodb://localhost:27017/employeeDB",
  {
    userNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      console.log("mongodb couldn't connect");
    } else {
      console.log("mongodb connected");
    }
  }
);

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  //  res.send("API is up and Running");
  res.status(200).json({
    error: false,
    message: "Api is up and running"
  });
});

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/employee", employeeRoutes);

app.listen(PORT, () => {
  console.log(`server is running at PORT:${PORT}`);
});
