const { User, Thought } = require('../models');

// Creating the User Controller
const userController = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find()
                .populate('thoughts friends', '-__v')
                .lean()
            return res.status(200).json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
        // Get a single user
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
                res.status(500).json(err);
            }
        },
    // Create a new user
    async createUser(req, res) {
            try {
                const user = await User.create(req.body);
                return res.status(200).json(user);
            } catch (err) {
                console.log(err);
                res.status(400).json(err);
            }
        },
    // Update a user
    async updateUser(req, res) {
            try {
                const user = await User.findOneAndUpdate(
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
                res.status(500).json(err);
            }
        },
    // Delete a user
    async deleteUser(req, res) {
            try {
                const user = await User.findOneAndDelete(
                    { _id: req.params.userId }
                ).lean()
                if (!user) {
                    res.status(404).json({ message: 'No user found with this id!' });
                }
                return res.status(200).json(user);
            } catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        },
    // Modify friends list
    async modifyFriendsList(req, res, modifier) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true, runValidators: true }
            ).lean()
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
            }
            return res.status(200).json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
// Add a friend
async addFriend(req, res){
    return userController.modifyFriendsList(req, res, {
        $addToSet: { friends: req.params.friendId }
    });
},
// Delete a friend
    async deleteFriend(req, res){
        return userController.modifyFriendsList(req, res, {
            $pull: { friends: req.params.friendId }
        });
    }
};

