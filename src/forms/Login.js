import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.checkPassword = this.checkPassword.bind(this);
        this.login = this.login.bind(this);
    }

    login()
    {
        const notify = (text) => toast(text);
        let login = document.getElementById('login').value;
        let pwd = document.getElementById('password').value;
        if(login !== '' && pwd !== ''){
            if(this.checkPassword())
                document.getElementById('submitBtn').innerHTML = 'Please wait <i class="fa fa-spinner fa-spin"></i>';
        }
        else{
            notify('Please fill all fields');
        }
    }

    checkPassword()
    {
        let pwd = document.getElementById('password').value;
        console.log(pwd)
        if(pwd.length === 0){
            document.getElementById('pwdFeedback').innerHTML = '';
            return false;
        }else if(pwd.length < 8 ){
            document.getElementById('pwdFeedback').innerHTML = '<span style="color:white;">Please more than 8 characters</span>';
            return false;
        }else{
            document.getElementById('pwdFeedback').innerHTML = '<span style="color:white;">Fine thank you !!!</span>';
            return true;
        }
    }

    render() {
        return (
            <div className="container">
                 <ToastContainer 
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover/>
                <div id="login-box">
                    <div className="logo">
                        <h1 className="logo-caption"><span className="tweak">L</span>ogin</h1>
                    </div>
                        <div className="controls">
                            <div className="form-group">
                                <label htmlFor="username" className="text-light">Username / Login</label>
                                <input type="text" id="login" name="username" placeholder="Username" className="form-control" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password" className="text-light">Password</label>
                                <input type="password" onKeyUp={this.checkPassword} id="password" placeholder="Password" className="form-control" />
                                <small id="pwdFeedback"></small>
                            </div>
                            <div className="form-group mt-2">
                                <button id="submitBtn" onClick={this.login} type="button" className="btn btn-default btn-block btn-custom">Login</button>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Login;