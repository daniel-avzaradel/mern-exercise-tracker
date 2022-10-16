import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExerciseList = () => {
  const [exercises, setExercises] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/exercise').then((res) => {
      setExercises(res.data);
    });
  }, []);

  return (
    <div>
      <h3>Exercise List Log</h3>
      <div className="form-group">
        <table class="table">
          <thead>
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
                      <button className="btn btn-warning">Edit</button>
                      <button className="btn btn-danger m-2">Delete</button>
                    </td>
                  </tr>
                );
              })}
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExerciseList;
