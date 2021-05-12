import React from 'react';
import { useSelector } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
	const todos = useSelector(store => store.todos);
	return (
		<div className="App">
			{/* <h1>To-Do List</h1> */}
			<NewTodoForm />
			{todos.length > 0 && <TodoList />}
		</div>
	);
}

export default App;
