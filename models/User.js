const { Schema, model } = require('mongoose');

// Set the User Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },
    thoughts: [{ type: Schema.String, required: true, ref: 'Thought' }],
    friends: [{ type: Schema.String, required: true, ref: 'User' }],
},
    {
        toJSON: { virtuals: true },
        id: false,
    });

//  Create virtual property `friendCount` that retrieves the length of the `friends` array on query.
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Creating the User model by using the userSchema
const User = model('User', userSchema);

module.exports = User;
