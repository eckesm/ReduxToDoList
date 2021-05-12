import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ updateTodo, deleteTodo }) => {
	const todos = useSelector(store => store.todos);
	console.log(todos);
	return (
		<div className="TodoList">
			<h3 className='TodoList-heading'>To-Do List</h3>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					itemName={todo.itemName}
					description={todo.description}
					importance={todo.importance}
					isCompleted={todo.isCompleted}
					updateTodo={updateTodo}
					deleteTodo={() => deleteTodo(todo.id)}
				/>
			))}
		</div>
	);
};

export default TodoList;
