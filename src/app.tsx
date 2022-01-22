import './assets/libs/themify-icons/themify-icons.css';
import logo from './assets/img/logo.png';
import SearchInput from './components/search';
import { TodoData } from './components/todo-item';
import TodoList, { TodoListActions } from './components/todo-list';

const App = function() {

    let todoList: Array<TodoData> = [{
        id: 1,
        isDone: false,
        text: 'Learn React'
    }, {
        id: 2,
        isDone: true,
        text: 'Learn TypeScript'
    }];

    let todoListActions: TodoListActions;

    const handleSearchChange = (term: string) => {

        todoListActions.filter(term);
    };

    const root = (
        <div class="app">
            <header class="app-header">
                <div class="app-htitle">
                    <img class="app-logo" src={logo} />
                    <h1 class="app-title">Todo App</h1>
                </div>
                <div class="app-hcenter">
                    <SearchInput onChange={handleSearchChange} />
                </div>
                <div class="app-hactions"></div>
            </header>
            <div class="app-body">
                <TodoList todoItems={todoList} exportActions={(getActions) => todoListActions = getActions()} />
            </div>
        </div>
    );

    const context = root as HTMLElement;

    return root;
}

export default App;