

function TodoItem({ todo }: TodoItemProps) {

    const root = (
        <div class="todo-item">
            <input checked={todo.isDone} type="checkbox" />
            <span>{todo.text}</span>
        </div>
    );

    return root;
}

export type TodoItemProps = {
    todo: TodoData;
}

export type TodoData = {
    id: number;
    isDone: boolean;
    text: string;
}

export default TodoItem;