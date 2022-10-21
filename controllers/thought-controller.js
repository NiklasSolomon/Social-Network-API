const { Thought, User } = require('../models');

const thoughtController = {
    getAllThoughts(req,res) {
        Thought.find({})
            .sort({ _id: -1 })
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err); 
            }); 
    },
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.id })
            .populate({
                path: 'reactions', 
                select: '-__v'
            })
            .select('-__v')
            .then(thoughtData => {
                if(!thoughtData) {
                    res.status(404).json({ message: 'Invalid ID' });
                    return;
                }
                res.json(thoughtData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            });
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then(thoughtData => {
                return User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $push: { thoughts: thoughtData._id }},
                    { new: true, runValidators: true }
                );
            })
            .then(userData => {
                if(!userData) {
                    res.status(404).json({ message: 'Invalid ID' });
                    return;
                }
                res.json(thoughtData)
            })
            .catch(err => res.json(err)); 
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
                { _id: req.params.id},
                { new: true, runValidators: true })
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-___v')
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'Invalid ID' });
                    return;
                }
                res.json(thoughtData);
            })
            .catch(err => res.status(400).json(err));

    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'Invalid ID' });
                    return;
                }
                res.json(thoughtData);
            })
            .catch(err => res.status(400).json(err));
    },
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: body }}, 
            { new: true, runValidators: true }
        )
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then(thoughtData => {
        if (!thoughtData) {
            res.status(404).json({ message: 'Invalid ID' });
            return;
        }
        res.json(thoughtData);
    })
    .catch(err => res.status(400).json(err))

    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId }, 
            { $pull: { reactions: { reactionId: req.params.reactionId }}},
            { new : true }
        )
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'Invalid ID' });
                return;
            }
            res.json(thoughtData);
        })
        .catch(err => res.status(400).json(err));
    }
};

module.exports = thoughtController;