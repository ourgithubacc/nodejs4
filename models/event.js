const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim:true
    },
    addedAt:{
        type: Date,
        required: true
    },
    eventImage:{
        type: String,
        required: true
    },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Host',
        required: true
    }
    
})

module.exports = mongoose.model('Event', eventSchema);