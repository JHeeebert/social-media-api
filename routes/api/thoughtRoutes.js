const express = require('express');
const router = express.Router();
const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// API Routes for /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// API Routes for /api/thoughts/:id
router
    .route('/:thoughtId')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought);

// API Routes for /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction)

// API Routes for /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;
