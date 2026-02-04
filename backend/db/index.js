import { Pool } from "pg";

export const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
});

export const initDb = async () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS todo (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            completed BOOLEAN DEFAULT FALSE
        )
    `;

    try {
        await pool.query(sql);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
};