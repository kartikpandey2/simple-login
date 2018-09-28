const User = require('../model/user')

const isValidEmail = async (req, res) => {
	try {
		const { email } = req.query
		const foundUser = await User.findOne({ email })
		if(!foundUser) {
			console.log(true)
			return res.status(200).json({status:true})
		}
		else{
			console.log('false')
			return res.status(200).json({status:false})
		}
	}
	catch(err) {
		console.log(err)
		res.status(504)
	}
}

module.exports = isValidEmail