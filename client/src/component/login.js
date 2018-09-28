import React, { Component } from 'react';
import { Input, Card, Button, Spin } from 'antd';
import { Fetch } from '../helpers/fetch'
import Welcome from './welcome'
import { toast } from 'react-toastify';

export default class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: null,
			password: null,
			isLogin: false,
			userdata: null,
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

  notifySuccess = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER
    });
  }

	handleClick = async () => {
		try{
				const options = {
				body: JSON.stringify(this.state)
			}
			const response = await Fetch('/login', options)
			if(response.status) {
				this.setState({isLogin: true, userdata: response.data, email: '', password: '' , loading: false})
			}
			else{
				this.notifyError('Login Failed')
				this.setState({loading: false})
			}
		}
		catch(err) {
			this.notifyError(err)
			this.setState({loading: false})
		}
	}

	render() { 
		return (
			this.state.loading ? <Spin /> : this.state.isLogin ? <Welcome 
				data={this.state.userdata}
				signout={() => this.setState({isLogin: false})}/> : 
			(<div>
				<Card title="Log In" bordered={false} style={{ width: 300 }}>
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
					<Button type="primary" onClick={this.handleClick}>LogIn</Button>
				</Card>
			</div>)
		)
	}
}

