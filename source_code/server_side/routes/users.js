var express = require('express');
var router = express.Router();
const {User} = require('../schema/schema');

// Body parsing middleware
router.use(express.json());


async function registerUser(req,res){
    // console.log(req.body);
    // res.send("Register Route");
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        res.status(400).send("Please fill all the fields");
        return;
    }

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400).send("A user with this email already exists");
        return;
    }
    else{
      const user = await User.create({
          name,
          email,
          password
      });
      if(user){
          res.status(201).json({
              _id: user._id,
              name: user.name,
              email: user.email,
          });
      }else{
          res.status(400).send("Failed to create user");
      }
  }
}

async function authUser(req,res){
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
         res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    }else{
        res.status(400);
        res.send("Invalid Email or Password");
    }
}
router.post('/register', registerUser);
router.post('/login', authUser);

module.exports = router;