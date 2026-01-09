import express from 'express';
import Expense from '../models/EXpense.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// CREATE EXPENSE
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, amount, category, expense_date } = req.body;
    const userId = req.user.id;

    if (!title || !amount || !expense_date) {
      return res.status(400).json({ message: 'Required fields missing' });
    }

    const expense = await Expense.create({
      user_id: userId,
      title,
      amount,
      category,
      expense_date
    });

    res.status(201).json({ message: 'Expense added successfully', expense });
  } catch (error) {
    console.error('Add Expense Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET USER EXPENSES
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const expenses = await Expense.find({ user_id: userId })
      .sort({ expense_date: -1 });

    // Format response to match MySQL format (with id instead of _id)
    const formattedExpenses = expenses.map(expense => ({
      id: expense._id,
      user_id: expense.user_id,
      title: expense.title,
      amount: expense.amount,
      category: expense.category,
      expense_date: expense.expense_date
    }));

    res.json(formattedExpenses);
  } catch (error) {
    console.error('Get Expenses Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// UPDATE EXPENSE
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, amount, category, expense_date } = req.body;
    const userId = req.user.id;

    const expense = await Expense.findOneAndUpdate(
      { _id: id, user_id: userId },
      { title, amount, category, expense_date },
      { new: true }
    );

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ message: 'Expense updated successfully' });
  } catch (error) {
    console.error('Update Expense Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE EXPENSE
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const expense = await Expense.findOneAndDelete({
      _id: id,
      user_id: userId
    });

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error('Delete Expense Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;