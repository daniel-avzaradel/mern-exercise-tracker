import React, { useState } from 'react';

const CreateExercise = () => {
  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState('user');
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [date, setDate] = useState();

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
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
          ></select>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="">Description: </label>
          <input type="text" className="form-control" value={description} />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="">Duration (in minutes): </label>
          <input type="text" className="form-control" value={duration} />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="">Date: </label>
          <input type="text" className="form-control" value={date} />
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
