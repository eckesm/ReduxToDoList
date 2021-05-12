import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
	const todos = useSelector(store => store.todos);
	console.log(todos);
	return (
		<div className="TodoList">
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					itemName={todo.itemName}
					description={todo.description}
					importance={todo.importance}
					isCompleted={todo.isCompleted}
				/>
			))}
		</div>
	);
};

export default TodoList;
