import express from 'express';
import { createUser } from '../controllers/controllers.mjs';
import User from '../models/models.mjs';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ status: "ok", message: "API Working" });
});

// ✅ already exists
router.post('/registration', createUser);

// 🔥 ADD THIS NEW ROUTE
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;