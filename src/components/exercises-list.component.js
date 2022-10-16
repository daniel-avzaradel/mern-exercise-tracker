import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ExerciseList = () => {
  const [exercises, setExercises] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/exercises').then((res) => {
      setExercises(res.data);
    });
  }, []);

  return (
    <div>
      <h3>Exercise List Log</h3>
      <br />
      <div className="form-group">
        <table className="table">
          <thead className="table-secondary">
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Description</th>
              <th scope="col">Duration</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {exercises &&
              exercises.map((exercise, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{exercise.username}</th>
                    <td>{exercise.description}</td>
                    <td>{exercise.duration}</td>
                    <td>{exercise.date}</td>
                    <td>
                      <Link to={`edit/${exercise._id}`}>Edit</Link> |{' '}
                      <a href="">Delete</a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExerciseList;
