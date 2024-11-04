"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use("/", taskRoutes_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);
});
