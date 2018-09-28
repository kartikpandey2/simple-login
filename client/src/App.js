import React, { Component } from 'react';
import { Button, Card, Icon } from 'antd';
import './App.css';
import { Signup, Login } from './component'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signup: false,
      login: false,
      home: true
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.signup ? <Signup 
          success={ () => ( this.setState({login: true, home: false, signup: false})) }/> : null
        }
        {
          this.state.login ? <Login /> : null
        }
        {
          this.state.home ? (
            <Card bordered={false} style={{ width: 300 }}>
              <Button
                block
                onClick={ () => ( this.setState({signup: true, home: false, login: false})) }>
                  Sign Up
              </Button>
              <Button
                block
                onClick={ () => (this.setState({login: true, home: false, signup: false})) }>
                  Login
              </Button>
            </Card>
          ) : <Button
                onClick={ () => ( this.setState({signup: false, home: true, login: false})) }>
                  <Icon type="left" />Go back
              </Button>
        }
        <ToastContainer />
      </div>
    );
  }
}

export default App;
