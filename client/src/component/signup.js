import React, { Component } from 'react';
import { Input, Card, Button, Spin } from 'antd'
import { Fetch } from '../helpers/fetch'
import { validateBody } from '../helpers/validation'
import { toast } from 'react-toastify';

export default class SignUp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: null,
			email: null,
			password: null,
			loading: false
		}
	}

	handleChange = (nextstate) => {
		this.setState(nextstate)
	}

	notifyError = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER
    });
  }

	handleClick = async () => {
		try{
			this.setState({loading: true})
			const isValid = await validateBody(this.state)
			if(isValid.status) {
				const options = {
					body: JSON.stringify(this.state)
				}
				const response = await Fetch('/signup', options)
				if(response.status) {
					this.setState({name: '', email: '', password: '', loading: false})
					this.props.success()
				}
				else{
					this.notifyError('Something went Wrong')
				}
			}else{
				this.setState({loading: false})
				this.notifyError(isValid.message)
			}
		}
		catch(err) {
			this.setState({loading: false})
			this.notifyError(err)
		}
	}

	render() {
		return this.state.loading ? <Spin /> : (
			<div>
				<Card title="Sign Up" bordered={false} style={{ width: 300 }}>
					<Input 
						placeholder="Name"
						onChange={(e) => this.handleChange({name: e.target.value})}
					/>
					<br /><br />
					<Input
						placeholder="Email"
						onChange={(e) => this.handleChange({email: e.target.value})}
					/>
					<br /><br />
					<Input
						type='password'
						placeholder="Password"
						onChange={(e) => this.handleChange({password: e.target.value})} 
					/>
					<br /><br />
					<Button type="primary" onClick={this.handleClick}>Register</Button>
				</Card>
			</div>
		)
	}
}