const express = require('express');
const router = express.Router();
const db = require('../utils/firebase');

// GET user bias profile
router.get('/:userId/bias', async (req, res) => {
  try {
    const docRef = db.collection('biases').doc(req.params.userId);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.json({ userId: req.params.userId, biases: [] });
    }

    res.json(doc.data());
  } catch (error) {
    console.error('Error fetching bias:', error);
    res.status(500).json({ error: 'Failed to fetch user bias profile' });
  }
});

// POST or UPDATE user bias profile
router.post('/:userId/bias', async (req, res) => {
  const { biases } = req.body;
  if (!Array.isArray(biases)) {
    return res.status(400).json({ error: 'Biases must be an array' });
  }

  try {
    await db.collection('biases').doc(req.params.userId).set({ biases });
    res.json({ userId: req.params.userId, biases });
  } catch (error) {
    console.error('Error saving bias:', error);
    res.status(500).json({ error: 'Failed to save user bias profile' });
  }
});

module.exports = router;
