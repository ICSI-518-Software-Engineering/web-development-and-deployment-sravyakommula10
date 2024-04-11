const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const inventorySchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    image: String
});

const userSchema = mongoose.Schema({
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

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre('save', async function (next) {
  const user = this;

  // If password is not modified, move on to the next middleware
  if (!user.isModified('password')) {
    return next();
  }

  try {
    // Generate a salt to hash the password
    const salt = await bcrypt.genSalt(10);
    // Hash the password using the salt
    const hashedPassword = await bcrypt.hash(user.password, salt);
    // Replace the plain text password with the hashed password
    user.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const Inventory = mongoose.model('Inventory', inventorySchema);
const User = mongoose.model('User', userSchema);

module.exports = { Inventory, User };