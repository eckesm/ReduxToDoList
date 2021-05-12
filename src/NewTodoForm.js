import React, { useState } from 'react';
import { Alert, Button, Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';
import './NewTodoForm.css';

const NewTodoForm = ({ addTodo }) => {
	const INITIAL_STATE = {
		itemName    : '',
		description : '',
		importance  : 'None'
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const [ errorMessages, setErrorMessages ] = useState(false);

	// https://thewebdev.info/2020/08/01/react-bootstrap%E2%80%8A-%E2%80%8Acheckbox-and-radio-buttons/
	const [ checked, setChecked ] = useState(false);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(data => ({
			...data,
			[name] : value
		}));
		console.log(formData.isCompleted);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (formData.itemName === '') {
			setErrorMessages(true);
		}
		else {
			setErrorMessages(false);
			addTodo({ ...formData, isCompleted: checked });
			setFormData(INITIAL_STATE);
			setChecked(false);
		}
	};
	return (
		<Form className="NewTodoForm" onSubmit={handleSubmit}>
			{/* <h3>New To-Do Item</h3> */}
			{errorMessages && <Alert color="danger">The Item Name field cannot be blank.</Alert>}
			<InputGroup className="NewTodoForm-InputGroup">
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
			<FormGroup className="NewTodoForm-InputGroup">
				<Label>Description</Label>
				<Input
					type="textarea"
					name="description"
					id="description"
					value={formData.description}
					onChange={handleChange}
				/>
			</FormGroup>
			<InputGroup className="NewTodoForm-InputGroup">
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
			<FormGroup className="NewTodoForm-InputGroup" check>
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
			<Button color="success">Add To-Do Item</Button>
		</Form>
	);
};

export default NewTodoForm;
