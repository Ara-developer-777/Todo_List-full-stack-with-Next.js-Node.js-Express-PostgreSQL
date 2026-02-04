import Todos from "../todos/Todos";
import "./TodoList.css";

export default function TodoList({ todos, addTodo, deleteTodo, updateTodo }) {

    return (
        <div className="todo-container">
            <form className="add-todo-form" onSubmit={(e) => addTodo(e)}>
                <input
                    type="text"
                    name="title"
                    placeholder="What needs to be done?"
                    autoComplete="off"
                />
                <button type="submit">Add Task</button>
            </form>

            <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        </div>
    )
}
