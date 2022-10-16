import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditExercise = () => {
  const [users, setUsers] = useState();

  const [username, setUsername] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [date, setDate] = useState(new Date());

  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/exercises/${id}`).then((res) => {
      console.log(res.data);

      setUsername(res.data.username);
      setDescription(res.data.description);
      setDuration(res.data.duration);
    });

    axios.get('http://localhost:5000/users/').then((res) => setUsers(res.data));
  }, []);

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const changeDuration = (e) => {
    setDuration(Number(e.target.value));
  };

  const changeDate = (date) => {
    setDate(date);
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };

    console.log(exercise);
    axios.patch('http://localhost:5000/exercise/update/:id', exercise);

    // window.location = '/';
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={handleSumbit}>
        <div className="form-group">
          <label htmlFor="">Username: </label>
          <select
            name=""
            id=""
            required
            className="form-control"
            onChange={changeUsername}
          >
            {users &&
              users.map((user) => {
                return (
                  <option
                    key={user.username}
                    value={user.username}
                    selected={username === user.username ? 'selected' : ''}
                  >
                    {user.username}
                  </option>
                );
              })}
          </select>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="">Description: </label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={changeDescription}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="">Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            defaultValue={duration}
            onChange={changeDuration}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="">Date: </label>
          <DatePicker selected={date} onChange={changeDate} />
        </div>
        <br />
        <div className="form-group">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
