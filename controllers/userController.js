const { User, Thought } = require('../models');

// Creating the User Controller
const userController = {
    // Get all users with thoughts and friends populated
    async getUsers(req, res) {
        try {
            const users = await User.find()
                .populate('thoughts friends', '-__v')
                .lean()
            return res.status(200).json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
        // Get a single user by ID with thoughts and friends populated
    async getUser(req, res) {
            try {
                const user = await User.findById(req.params.userId)
                    .populate('thoughts friends', '-__v')
                    .lean();
                if (!user) {
                    res.status(404).json({ message: 'No user found with this id!' });
                }
                return res.status(200).json(user);
            } catch (err) {
                console.log(err);
                return res.status(500).json(err);
            }
        },
    // Create a new user
    async createUser(req, res) {
            try {
                const user = await User.create(req.body);
                return res.status(200).json(user);
            } catch (err) {
                console.log(err);
                return res.status(400).json(err);
            }
        },
    // Update a user by ID
    async updateUser(req, res) {
            try {
                const user = await User.findByIdAndUpdate(
                    req.params.userId,
                    { $set: req.body },
                    { new: true, runValidators: true }
                ).lean()
                if (!user) {
                    res.status(404).json({ message: 'No user found with this id!' });
                }
                return res.status(200).json(user);
            } catch (err) {
                console.log(err);
                return res.status(500).json(err);
            }
        },
    // Delete a user by ID
    async deleteUser(req, res) {
            try {
                const user = await User.findByIdAndDelete(
                    { _id: req.params.userId }
                ).lean()
                if (!user) {
                    res.status(404).json({ message: 'No user found with this id!' });
                }
                return res.status(200).json(user);
            } catch (err) {
                console.log(err);
                return res.status(500).json(err);
            }
        },
    // Helper function to modify the friends list
    async updateFriendsList(req, res, modifier) {
        try {
            const user = await User.findByIdAndUpdate(req.params.userId, modifier, 
                { runValidators: true, new: true }
            ).lean()
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
            }
            return res.status(200).json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
// Add a friend to a user 
async addFriend(req, res){
    return userController.updateFriendsList(req, res, {
        $addToSet: { friends: req.params.friendId }
    });
},
// Delete a friend from a user
    async deleteFriend(req, res){
        return userController.updateFriendsList(req, res, {
            $pull: { friends: req.params.friendId }
        });
    }
};

module.exports = userController;

