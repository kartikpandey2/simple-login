import React, { Component } from 'react'
import { Button } from 'antd';

export default class Welcome extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return(
			<div>
				<h1>Hello {this.props.data.name}</h1>
				<Button onClick={this.props.signout}>Sign Out </Button>
			</div>
		)
	}
} 