import React from 'react';
import './Login.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            password: ''
        }
    }
    handlesubmit = (e) => {
        e.preventDefault()
        this.login()
        this.setState({
            userid: '',
            password: ''
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }


    login = () => {
        axios.post("/login", {
            userid: this.state.userid,
            password: this.state.password
        })
            .then(function (res) {
                console.log(res);
                if(res.data.result === 'none'){
                    alert("없는 계정입니다.");
                }
                else{
                    
                }
            })
            .catch(function (error) {
                console.log(error)
            });

    }
    render() {
        return (
            <form className="login" action="/Contents" onSubmit={this.handlesubmit}>
                <div>
                    <div className="loginitem">
                        <input className="logininputitem" type="text" placeholder="아이디를 입력하세요" name="userid" value={this.state.userid} onChange={this.handleValueChange} />
                    </div>
                    <div className="loginitem">
                        <input className="logininputitem" type="password" placeholder="비밀번호를 입력하세요" name="password" value={this.state.password} onChange={this.handleValueChange}/>
                    </div>
                </div>
                <div>
                    <div className="loginitem">
                        <button className="loginbutton" type="submit">로그인</button>
                    </div>
                    <div className="loginitem">
                        <button className="loginbutton"><Link to="/Signup" className="loginSignup"> 회원가입</Link></button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Login;