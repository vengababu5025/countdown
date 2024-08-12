const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get banner details
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM banner LIMIT 1');
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'Banner not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update banner details
router.put('/', async (req, res) => {
  const { description, timer, link, visible } = req.body;
  try {
    const [result] = await db.query(
      'UPDATE banner SET description = ?, timer = ?, link = ?, visible = ? WHERE id = 1',
      [description, timer, link, visible]
    );
    if (result.affectedRows > 0) {
      res.json({ message: 'Banner updated successfully' });
    } else {
      res.status(404).json({ message: 'Banner not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
