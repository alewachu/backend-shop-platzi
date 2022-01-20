const express = require('express');
const faker = require('faker');
const router = express.Router();

// ------- Init Products ------- //
const users = [];
for (let i = 0; i < 100; i++) {
  users.push({
    id: i + 1,
    username: faker.internet.email(),
    password: faker.internet.password(30),
  });
}
// ------- End Products ------- //

router.get('/', (req, res) => {
  let limit = req.query.limit || 10;
  const skip = req.query.skip || 0;
  if (skip) {
    limit = parseInt(limit) + parseInt(req.query.skip);
  }
  const response = users.slice(skip, limit);
  res.json(response);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = users.find((e) => parseInt(e.id) == id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).send('404');
  }
});

module.exports = router
