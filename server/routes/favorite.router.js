const express = require('express');
const pool = require('../modules/pool');
const { DatabaseError } = require('pg');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const sqlText = `
    SELECT * FROM "favorites"
    ORDER BY "category_id";
  `;

  pool
  .query(sqlText)
  .then((dbRes) => {
    res.send(dbRes.rows);
    res.sendStatus(200);
  })
  .catch((dbErr) => {
    console.log('Error getting favorites', dbErr);
    res.sendStatus(500);
  });
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('POST /favorites req.body:', req.body);
  const sqlText = `
  INSERT INTO "favorites" ("image_url", "category_id")
  VALUES ($1, $2)
  `;
  const sqlValues = [req.body.image_url, req.body.category_id]
  pool
    .query (sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log('Error adding favorite', dbErr);
      res.sendStatus(500);
    });
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
