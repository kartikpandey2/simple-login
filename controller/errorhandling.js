const errorHandling = (inputFunction) => {
	if( typeof inputFunction !== 'function') {
		throw new Error('Invalid Argument to errorHandling, it should be function')
	}
	return (req, res) => {
		try{
			inputFunction(req, res)
		}
		catch(err) {
			console.log(err)
			res.status(504).json({status: false })
		}
	}
}

module.exports = errorHandling