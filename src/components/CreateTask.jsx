import {useState} from "react";
import {CREATE_TASK} from "../querys";
import {useMutation} from "@apollo/client";

export const CreateTask = ({onCreateTask}) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [createTask, {loading, error}] = useMutation(CREATE_TASK, {
		onError: (error) => {
			// console.log(error);
		},
		onCompleted: (data) => {
			// console.log(data.createTask);
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		// Aquí iría el código para crear la tarea utilizando la API y el cliente de Apollo

		createTask({
			variables: {
				title,
				description,
			},
		});

		const newTask = {
			id: Math.random(),
			title,
			description,
		};

		onCreateTask(newTask);

		setTitle("");
		setDescription("");
	};

	return (
		<>
			{loading && <p>Loading...</p>}
			<form onSubmit={handleSubmit}>
				<h2>Create Task</h2>
				<label>
					Title:
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
				<label>
					Description:
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<button type="submit">Create Task</button>
			</form>
		</>
	);
};
