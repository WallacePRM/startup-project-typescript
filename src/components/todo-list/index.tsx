import { jsxAttrs } from "../../jsx/jsx-utils";
import TodoItem, { TodoData } from "../todo-item";


function TodoList({ todoItems, exportActions }: TodoListProps) {

    const handleSearch = (term: string) => {

        term = term.toLocaleLowerCase();
        for(const item of todoItems) {

            const showItem = item.text.toLocaleLowerCase().indexOf(term) >= 0;
            const itemEl = (root as HTMLElement).querySelector(`[data-id="${item.id}"]`) as HTMLElement;
            itemEl.style.display = showItem ? "block" : "none";
        }
    }

    exportActions(() => ({
        filter: handleSearch
    }));

    const root = (
        <ul class="todo-list">
            {todoItems.map(todo => jsxAttrs(<TodoItem  todo={todo} />, { 'data-id': todo.id.toString() }))}
        </ul>
    );

    return root;
}

export type TodoListProps = {
    todoItems: Array<TodoData>;
    exportActions: (getActions: () => TodoListActions) => void;
}

export type TodoListActions = {
    filter: (term: string) => void;
}

export default TodoList;