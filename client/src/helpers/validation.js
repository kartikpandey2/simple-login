import { Fetch } from './fetch'

export const validateBody = async ({ name, email, password }) => {
	if(!name) {
		return  Promise.resolve({status: false, message: 'name cannot be empty'})
	}
	if(!email) {
		return  Promise.resolve({status: false, message: 'email cannot be empty'})
	}
	if(!password) {
		return  Promise.resolve({status: false, message: 'password cannot be empty'})
	}
	if(typeof email !== "undefined"){
		let lastAtPos = email.lastIndexOf('@');
		let lastDotPos = email.lastIndexOf('.');

		if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
		  return  Promise.resolve({status: false, message: "Email is not valid"});
		}

		const options = {
			method: 'GET'
		}
		const response = await Fetch(`/isvalidemail?email=${email}`, options)
		if(!response.status) {
			return  Promise.resolve({status: false, message: "Email is Taken"});
		}
	} 
	if(password.length < 8) {
		return  Promise.resolve({status: false, message: "Password should be atleast 8 characters Long"})
	}
	return Promise.resolve({ status: true })
}