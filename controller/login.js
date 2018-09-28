const User = require('../model/user')

const Login = async (req, res) => {
	try {
		const { email, password } = req.body
		const foundUser = await User.findOne({ email })
		if(!foundUser) {
			return res.status(404).json({status:false})
		}
		const isPasswordValid = await User.comparePassword(password, foundUser.password)
		if(isPasswordValid) {
			return res.status(200).json({status:true,data: foundUser})
		}
		else{
			return res.status(404).json({status:false})
		}
	}
	catch(err) {
		console.log(err)
		res.status(504).json({status: false })
	}
}

module.exports = Login