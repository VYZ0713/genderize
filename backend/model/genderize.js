const mongo = require('mongoose');

const genSchema = new mongo.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    }
});

const Gen = mongo.model('UserDoc', genSchema);
module.exports = Gen;