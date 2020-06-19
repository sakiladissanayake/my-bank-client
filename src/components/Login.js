import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../actions';
import '../App.scss';
import '../style.scss';

class Login extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };
        
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.isAuthenticationError){
        toast.error("Invalid Credentials!");
      } 
    }

    change(e) {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password, () => {
            this.props.history.push('/home');
          });
        }
    }

    render() {
        return (
            <div className="App">
            <div className="login">
              <div className="container" ref={ref => (this.container = ref)}>
             <form name="form" onSubmit={e => this.submit(e)}>   
            <div className="base-container" ref={this.props.containerRef}>
              <div className="header">Login</div>
              <div className="content">
                <div className="image">
                  <img src="https://borlabs.io/wp-content/uploads/2019/09/blog-wp-login.png" />
                </div>
                <div className="form">
                  <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <input type="text" name="username" placeholder="please enter your email address" onChange={e => this.change(e)} value={this.state.username}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="please enter your password" onChange={e => this.change(e)} value={this.state.password}/>
                  </div>
                </div>
              </div>
              <div className="footer">
                <button type="submit" className="btn-login" onSubmit={e => this.submit(e)}>
                  Login
                </button>
              </div>
            </div>
            </form>
            </div>
            </div>
            <ToastContainer />
            </div>
          );
    }
}

function mapState(state) {
  return {
    isAuthenticationError: state.isAuthenticationError
  };
}

const actionCreators = {
  login: loginUser,
};

export default connect(mapState, actionCreators)(Login);
