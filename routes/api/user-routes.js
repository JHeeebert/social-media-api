const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/user-controller');

// API Routes for /api/users
router.route('/').get(getUsers).post(createUser);

// API Routes for /api/users/:id
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

// API Routes for /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;