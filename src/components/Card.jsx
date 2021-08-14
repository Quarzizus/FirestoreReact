import React, { useState } from "react";
import firebase from "firebase";
import "firebase/firestore";
import "../styles/components/Card.scss";
const Card = () => {
  const [task, setTask] = useState({
    title: null,
    time: null,
  });
  const db = firebase.firestore();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const newTask = await db.collection("task").add(task);
    console.log(newTask.id);
  };

  return (
    <article className="Card">
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        min="10"
        type="number"
        name="time"
        placeholder="Time"
        onChange={handleChange}
      />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </article>
  );
};

export default Card;
