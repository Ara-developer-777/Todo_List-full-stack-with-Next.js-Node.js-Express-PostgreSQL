import { pool } from "../db/index.js";

export const getTodos = async () => {
    const sql = "SELECT * FROM todo ORDER BY id DESC";
    const result = await pool.query(sql);

    if (!result.rows) {
        return [];
    }

    return result.rows;
};

export const createTodo = async (title) => {
    const sql = 'INSERT INTO todo (title) VALUES ($1)';
    const result = await pool.query(sql, [title]);
    return result.rows[0];
};

export const updateTodo = async (id, completed) => {
    const sql = 'UPDATE todo SET completed = $1 WHERE id = $2';
    const values = [completed, id];
    const result = await pool.query(sql, values);
    return result.rows[0];
};

export const deleteTodo = async (id) => {
    const sql = 'DELETE FROM todo WHERE id = $1';
    const result = await pool.query(sql, [id]);
    return result.rows[0];
}