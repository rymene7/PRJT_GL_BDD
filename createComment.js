const express = require('express');
const { Comment } = require('../models');
const router = express.Router();

// Route pour obtenir tous les commentaires
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.json(comments);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Route pour ajouter un nouveau commentaire
router.post('/', async (req, res) => {
    const { author, content } = req.body;

    try {
        const newComment = await Comment.create({ author, content });
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
