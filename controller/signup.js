const User = require('../model/user.js')

const Signup = async (req, res) => {
	try{
		const { name, email, password } = req.body

		let newUser = new User({
			name,
			email,
			password
		})
		if(name && email && password ) {
			newUser = await newUser.save()
			return res.status(200).json({status:true,data: newUser})
		}
		else{
			return res.status(400).json({status:false})
		}
	}
	catch(err){
		console.log(err)
		res.status(504).json({status: false })
	}
}

module.exports = Signup