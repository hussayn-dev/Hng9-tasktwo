const express  = require("express");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");

const app = express();
const port = process.env.PORT || 4200;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);



app.listen(port, () => {
  console.log("Process has started");
});
