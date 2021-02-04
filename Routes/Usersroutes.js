const express = require ('express')
const router = express.Router();

const User = require ('../Models/User');

router.post('/adduser', async(req,res)=>{
    const {name,email,age} = req.body;
    try {
        const newUser = new User ({
            name,
            email,
            age
        });
        const Users = await newUser.save();
        res.json ({msg:'contact saved',Users})
    } catch (error) {
        console.log(error)
    }
})

router.get('/',async(req,res)=>{
    try {
        const Users = await User.find();
        res.json({msg:"contacts fetched",Users})
    } catch (error) {
        console.log(error)
    }
})

router.delete('/deleteuser/:id', async(req,res)=>{
    const {id} = req.params;
    try {
        const userDeleted = await User.findOneAndDelete({_id: id});
        res.json({msg:'contact deleted',userDeleted})
    } catch (error) {
        console.log(error)
    }
})

router.put('/edituser/:_id', async(req,res)=>{
    const {_id}= req.params;
    try {
        const editedUser = await User.findOneAndUpdate({_id},{$set:req.body},{new:true});
        res.json({msg:'contact edited',editedUser})
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;