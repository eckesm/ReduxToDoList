import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
	const todos = useSelector(store => store.todos);
	const dispatch = useDispatch();

	const addTodo = todoData => {
		dispatch({
			type : 'ADD_TODO',
			todo : todoData
		});
	};

	const deleteTodo = id => {
		dispatch({
			type : 'DELETE_TODO',
			id
		});
	};
	const updateTodo = todoData => {
		dispatch({
			type : 'UPDATE_TODO',
			todo : todoData
		});
	};

	return (
		<div className="App">
			<NewTodoForm addTodo={addTodo} />
			{todos.length > 0 && <TodoList deleteTodo={deleteTodo} updateTodo={updateTodo} />}
		</div>
	);
}

export default App;
