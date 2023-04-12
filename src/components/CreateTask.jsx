import {useState} from "react";
import {CREATE_TASK} from "../querys";
import {useMutation} from "@apollo/client";

export const CreateTask = ({onCreateTask}) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [createTask, {loading, error}] = useMutation(CREATE_TASK, {
		onError: (error) => {
			console.log(error.message);
		},
		onCompleted: (data) => {
			console.log(data.createTask);
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		createTask({
			variables: {
				title,
				description,
			},
		});

		onCreateTask();

		setTitle("");
		setDescription("");
	};

	return (
    <>
      {error && <p>Error: {error.message}</p>}
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
