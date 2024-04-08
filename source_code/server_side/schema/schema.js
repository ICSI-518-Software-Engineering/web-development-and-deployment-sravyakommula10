const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    image: String
});

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},
{timeStamps: true}
);

const Inventory = mongoose.model('Inventory', inventorySchema);
const User = mongoose.model('User', userSchema);

module.exports = { Inventory, User };