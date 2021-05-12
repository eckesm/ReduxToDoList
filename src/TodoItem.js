import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	Alert,
	ListGroup,
	ListGroupItem,
	Button,
	FormGroup,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Label
} from 'reactstrap';
import './TodoItem.css';

const TodoItem = ({ id, itemName, description, importance, isCompleted }) => {
	const INITIAL_STATE = {
		itemName,
		description,
		importance
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const [ editingTitle, setEditingTitle ] = useState(false);
	const [ errorMessages, setErrorMessages ] = useState(false);
	const dispatch = useDispatch();

	// https://thewebdev.info/2020/08/01/react-bootstrap%E2%80%8A-%E2%80%8Acheckbox-and-radio-buttons/
	const [ checked, setChecked ] = useState(isCompleted);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(data => ({
			...data,
			[name] : value
		}));
	};
	const handleUpdate = e => {
		e.preventDefault();
		if (formData.itemName === '') {
			setErrorMessages(true);
		}
		else {
			setErrorMessages(false);
			dispatch({
				type        : 'UPDATE_TODO',
				id          : id,
				itemName    : formData.itemName,
				description : formData.description,
				importance  : formData.importance,
				isCompleted : checked
			});
		}
	};
	const handleDelete = e => {
		e.preventDefault();
		setErrorMessages(false);
		dispatch({
			type : 'DELETE_TODO',
			id   : id
		});
	};

	return (
		<div className="TodoItem">
			<ListGroup>
				{!editingTitle && (
					<ListGroupItem active tag="button" onClick={e => setEditingTitle(true)} action>
						{formData.itemName}
					</ListGroupItem>
				)}
				{editingTitle && (
					<InputGroup>
						<InputGroupAddon addonType="prepend">
							<InputGroupText>Item Name</InputGroupText>
						</InputGroupAddon>
						<Input
							type="text"
							name="itemName"
							id="itemName"
							value={formData.itemName}
							onChange={handleChange}
							required
						/>
					</InputGroup>
				)}
				{errorMessages && <Alert color="danger">The Item Name field cannot be blank.</Alert>}
				<FormGroup>
					<Input
						type="textarea"
						name="description"
						id="description"
						value={formData.description}
						onChange={handleChange}
					/>
				</FormGroup>
				<InputGroup>
					<InputGroupAddon addonType="prepend">
						<InputGroupText>Importance</InputGroupText>
					</InputGroupAddon>
					<Input
						type="select"
						name="importance"
						id="importance"
						value={formData.importance}
						onChange={handleChange}
					>
						<option>None</option>
						<option>Low</option>
						<option>Medium</option>
						<option>High</option>
						<option>Urgent</option>
					</Input>
				</InputGroup>
				<div className="TodoItem-ButtonsDiv">
					<FormGroup className="TodoItem-Complete" check>
						<Label check>
							<Input
								type="checkbox"
								name="isCompleted"
								id="isCompleted"
								onChange={e => setChecked(e.currentTarget.checked)}
								checked={checked}
							/>{' '}
							Completed?
						</Label>
					</FormGroup>
					<Button className="TodoItem-Buttons" onClick={handleUpdate}>
						Update
					</Button>
					<Button className="TodoItem-Buttons" color="danger" onClick={handleDelete}>
						Delete
					</Button>
				</div>
			</ListGroup>
		</div>
	);
};

export default TodoItem;
