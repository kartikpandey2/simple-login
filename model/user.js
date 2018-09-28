const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const Schema = mongoose.Schema

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
})

UserSchema.pre('save', async function(next){
	try {
		if(this.password && this.isModified('password')){
			this.password = await bcrypt.hash(this.password, saltRounds);
		}
		next()
	}
	catch(err) {
		console.log(err)
	}
})

UserSchema.statics.comparePassword = function(PlaintextPassword, hashPassword) {
	return bcrypt.compare(PlaintextPassword, hashPassword);
}

module.exports = mongoose.model('User', UserSchema)