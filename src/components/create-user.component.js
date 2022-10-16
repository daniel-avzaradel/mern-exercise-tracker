import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [username, setUsername] = useState('Username test');

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
    };

    axios
      .post('http://localhost:5000/users/add', user)
      .then((res) => console.log(res.data));

    console.log(user);
    setUsername('');
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={handleSumbit}>
        <div className="form-group">
          <label htmlFor="">Username: </label>
          <input
            type="text"
            className="form-control"
            required
            value={username}
            onChange={changeUsername}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
