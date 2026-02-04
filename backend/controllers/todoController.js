import * as todoService from '../servises/todo.js';

export const getTodos = async (req, res) => {
    try {
        const todos = await todoService.getTodos();
        res.json(todos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to get todos' });
    }
};

export const createTodo = async (req, res) => {
    try {
        const {title} = req.body;

        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        const todo = await todoService.createTodo(title);
        res.json(todo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to create todo' });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const {completed} = req.body;

        const todo = await todoService.updateTodo(id, completed);
        res.json(todo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to update todo' });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;

        const todo = await todoService.deleteTodo(id);
        res.json(todo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to delete todo' });
    }
};