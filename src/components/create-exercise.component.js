import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import axios from 'axios';

const CreateExercise = () => {
  const [users, setUsers] = useState();

  const [username, setUsername] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    axios.get('http://localhost:5000/users').then((res) => {
      setUsers(res.data);
      setUsername(res.data[0]);
    });
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
    axios.post('http://localhost:5000/exercise/add', exercise);

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
                    selected="selected"
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
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
