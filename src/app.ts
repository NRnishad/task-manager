
import express from "express";


import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set('views', './src/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
