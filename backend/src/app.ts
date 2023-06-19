import express from "express";
import cors from "cors";
import { userRoutes } from "./routes/userRoute";
import { loginRoutes } from "./routes/loginRoute";
import { taskRoutes } from "./routes/taskRoute";

const app = express();
app.use(cors())

app.use(express.json());

app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/tasks', taskRoutes);


export default app;