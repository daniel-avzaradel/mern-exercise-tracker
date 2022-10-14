const router = require('express').Router();

const User = require('../models/users.model');

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json('User added'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').patch((req, res) => {
  const id = req.params.id;
  const updatedUser = User.findById(id);

  updatedUser
    .updateOne({
      username: req.body.username,
    })
    .then(() =>
      res.json(
        `Username: ${req.body.username} of id: ${id} was successfully updated!`
      )
    )
    .catch((err) => res.json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  const id = req.params.id;

  const removedUser = User.findById(id);

  removedUser
    .deleteOne()
    .then(() => res.json(`User of id: ${id} successfully deleted!`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
