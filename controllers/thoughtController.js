const { User, Thought } = require('../models');

//  Create the thought controller
const thoughtController = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find()
            return res.status(200).json(thoughts);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Get a thought by id
    async getThought(req, res) {
        try {
            const thought = await Thought.findById(req.params.id);
            if (!thought) {
                return res.status(404)({ message: 'Cannot find thought with that ID' })
            }
            return res.status(200).json(thought);
        } 
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
},
// Create a thought
async creatThought(req, res) {
    try {
        const thought = await Thought.create(req, res);
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
// Update thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $set: req.body },
            { new: true, runValidators: true });
            if (!thought) {
                return res.status(404)({ message: 'Cannot find thought with that ID' })
            }
            return res.status(200).json(thought);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
// Delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
            if (!thought) {
                return res.status(404)({ message: 'Cannot find thought with that ID' })
            }
            return res.status(200).json({message: 'thought and reactions deleted sucessfully'});
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
// Modify reaction list
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
// Add reaction
async addReaction(req, res) {
    return thoughtController.modifyReactionList(req, res, {
        $addToSet: { reaction: req.body },
    });
},  
// Delete reaction
async deleteReaction(req, res) {
    return thoughtController.modifyReactionList(req, res, {
        $pull: { reaction: { _id: req.params.reactionId } },
    });
},
};


module.exports = thoughtController;