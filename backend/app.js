import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { initDb } from "./db/index.js";
import { router } from "./routes/todoRouter.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use('/api/todos', router);

async function startServer() {
    try {
        await initDb();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

startServer();