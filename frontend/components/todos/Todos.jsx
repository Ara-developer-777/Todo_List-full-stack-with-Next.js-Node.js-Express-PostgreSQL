import "./Todos.css";

export default function Todos({ todos, deleteTodo, updateTodo }) {
    return (
        <div className="todo-list">
            {
                todos.length === 0 ? (
                    <div className="empty-state">
                        <p>Your Todo List is empty</p>
                    </div>
                ) : (
                    todos.map(todo => (
                        <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                            <div className="todo-item-content">
                                <input
                                    type="checkbox"
                                    className="todo-checkbox"
                                    checked={todo.completed}
                                    onChange={() => updateTodo(todo.id, !todo.completed)}
                                />
                                <p className="todo-title">{todo.title}</p>
                            </div>
                            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
                                </svg>
                            </button>
                        </div>
                    ))
                )
            }
        </div>
    )
}
