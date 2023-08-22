const { User, Thought } = require('../models');

const thoughtController = {
    // Get all thoughts
    async getThoughts(res) {
        try {
            const thoughts = await Thought.find()
            return res.status(200).json(thoughts);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Get a single thought by ID 
    async getThought(req, res) {
        try {
            const thought = await Thought.findById(req.params.thoughtId);
            if (!thought) {
            return res.status(404).json({ message: 'Cannot find thought with that ID' })
            }
            return res.status(200).json(thought);
        } 
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
},
// Create a new thought
async createThought(req, res) {
    try {
        const thought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId,
        { $addToSet: { thoughts: thought._id } },
        { runValidators: true }
        );   
    return res.status(200).json({ thought });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
},
// Update existing thought by ID
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $set: req.body },
            { runValidators: true, new: true });
            if (!thought) {
                return res.status(404).json({ message: 'Cannot find thought with that ID' })
            }
            return res.status(200).json(thought);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
// Delete a thought by ID
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
            if (!thought) {
                return res.status(404)({ message: 'Cannot find thought with that ID' })
            }
            return res.status(200).json({message: 'Thought and reactions deleted sucessfully'});
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
// Helper function to modify the reaction list
async modifyReactionList(req, res, modifier) {
    try {
        const reaction = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            modifier,
            { new: true, runValidators: true }
            );
    if (!reaction) {
        return res.status(404)({ message: 'Cannot find thought with that ID' })
    }
    return  res.status(200).json(reaction);
} 
catch (err) {
    console.error(err);
    return res.status(500).json(err);
}
},
// Add reaction to a thought
async addReaction(req, res) {
    return thoughtController.modifyReactionList(req, res, {
        $addToSet: { reactions: req.body },
    });
},  
// Delete reaction from a thought
async deleteReaction(req, res) {
    return thoughtController.modifyReactionList(req, res, {
        $pull: { reactions: { _id: req.params.reactionId } },
    });
},
};


module.exports = thoughtController;