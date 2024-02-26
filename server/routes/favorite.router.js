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
  })
  .catch((dbErr) => {
    console.log('Error getting favorites', dbErr);
    res.sendStatus(500);
  });
});

// add a new favorite
router.post('/', (req, res) => {
  console.log(`POST /favorites req.body:`, req.body);
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
      console.log(`Error adding favorite`, dbErr);
      res.sendStatus(500);
    });
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  console.log(`PUT /favorites req.body`, req.body);
  const sqlText = `
  UPDATE "favorites"
  SET "category_id" = $1
	WHERE "id" = $2;
  `;
  const sqlValues = [req.body.category_id, req.params.id];

  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.log(`Error updating category of favorite image`, dbErr);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete('/:id', (req, res) => {
  console.log(`DELETE /favorites req.body:`, req.body);
  const { id } = req.params;
  const sqlText = `
  DELETE FROM "favorites"
  where "id" = $1;
  `;
  const sqlValues = [id];

  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.log(`Error removing favorite`, dbErr);
      res.sendStatus(500);
    })
});

module.exports = router;
