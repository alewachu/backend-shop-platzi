const express = require('express');
const faker = require('faker');
const router = express.Router();

// ------- Init Products ------- //
const categories = [];
for (let i = 0; i < 100; i++) {
  categories.push({
    id: i + 1,
    name: faker.commerce.department(),
  });
}
// ------- End Products ------- //

router.get('/', (req, res) => {
  let limit = req.query.limit || 10;
  const skip = req.query.skip || 0;
  if (skip) {
    limit = parseInt(limit) + parseInt(req.query.skip);
  }
  const response = categories.slice(skip, limit);
  res.json(response);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = categories.find((e) => parseInt(e.id) == id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).send('404');
  }
});

module.exports = router;
