const User = require("../models/user.model");

module.exports = {
    list: async (req, res) => {
        const users = await User.find();
        res.json({ users })
    },
    create: async (req, res) => {
        const { name, email, password } = req.body;
        // const email = req.body.email;

        const userExist = await User.findOne({ email });
        console.log(userExist);
        if(userExist){
            return res.status(400).json({ message : "Already exists" });
        }

        const user = new User({
            name, email, password    
        });

        await user.save();
        console.log(user)
        res.status(200).json({user});
    },
    update : async (req ,res)=>{
        const { _id } = req.params;
        // const _id = req.params._id;

        const user = await User.findOne({ _id });
        if(!user){
            return res.status(404).json({ message : "User not found" });
        }

        const { name, password } = req.body;
        user.name = name;
        user.password = password;

        await user.save();
        res.status(201).json({ user });
    }
}
