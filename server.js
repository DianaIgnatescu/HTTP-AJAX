const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let friends = [
  {
    id: 1,
    name: 'Oliver Queen',
    age: 30,
    email: 'oliver@queen.com',
    alias: 'Green Arrow',
  },
  {
    id: 2,
    name: 'Hall Jordan',
    age: 32,
    email: 'hall@greenarrow.com',
    alias: 'Green Lantern',
  },
  {
    id: 3,
    name: 'Diana Price',
    age: 87,
    email: 'diana@wonderwoman.com',
    alias: 'Wonder Woman',
  },
  {
    id: 4,
    name: 'Barry Allen',
    age: 29,
    email: 'barry@theflash.com',
    alias: 'The Flash',
  },
  {
    id: 5,
    name: 'Clark Kent',
    age: 32,
    email: 'clark@notsuperman.com',
    alias: 'Superman',
  },
  {
    id: 6,
    name: 'Dick Grayson',
    age: 27,
    email: 'dick@sidekick.com',
    alias: 'Robin',
  },
  {
    id: 7,
    name: 'Arthur Curry',
    age: 35,
    email: 'arthur@aquaman.com',
    alias: 'Aquaman',
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/friends', (req, res) => {
  res.status(200).json(friends);
});

app.post('/friends', (req, res) => {
  const friend = { id: getNewId(), ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

app.put('/friends/:id', (req, res) => {
  const { id } = req.params;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(friends);
  } else {
    res
      .status(404)
      .json({ message: `The friend with id ${id} does not exist.` });
  }
});

app.delete('/friends/:id', (req, res) => {
	friends = friends.filter(friend => friend.id != req.params.id);
	res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
