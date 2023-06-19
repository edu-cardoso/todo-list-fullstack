import express from "express";
import cors from "cors";
import { userRoutes } from "./routes/userRoutes";
import { loginRoutes } from "./routes/loginRoutes";
import { taskRoutes } from "./routes/taskRoutes";

const app = express();
app.use(cors())

app.use(express.json());

app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/tasks', taskRoutes);


export default app;