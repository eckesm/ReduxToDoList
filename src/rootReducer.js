// import React from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
	todos : [
		{
			description : 'They really do all need to be watered.',
			id          : uuid(),
			importance  : 'Low',
			isCompleted : false,
			itemName    : 'Water the plants'
		},
		{
			description : 'Both of them...',
			id          : uuid(),
			importance  : 'High',
			isCompleted : true,
			itemName    : 'Feed the cats'
		}
	]
};

function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos : [
					...state.todos,
					{
						id          : uuid(),
						itemName    : action.itemName,
						description : action.description,
						importance  : action.importance,
						isCompleted : action.isCompleted
					}
				]
			};
		case 'UPDATE_TODO':
			const filteredTodos = state.todos.filter(todo => todo.id !== action.id);
			return {
				...state,
				todos : [
					...filteredTodos,
					{
						id          : uuid(),
						itemName    : action.itemName,
						description : action.description,
						importance  : action.importance,
						isCompleted : action.isCompleted
					}
				]
			};
		case 'DELETE_TODO':
			return {
				...state,
				todos : state.todos.filter(todo => todo.id !== action.id)
			};
		default:
			return state;
	}
}

export default rootReducer;
