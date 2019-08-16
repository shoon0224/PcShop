import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <div>
                <div className="loginitem">
                    <input className="logininputitem" type="text" placeholder="아이디를 입력하세요" />
                </div>
                <div className="loginitem">
                    <input className="logininputitem" type="password" placeholder="비밀번호를 입력하세요" />
                </div>
            </div>
            <div>
                <div className="loginitem">
                    <button className="loginbutton">로그인</button>
                </div>
                <div className="loginitem">
                    <button className="loginbutton"><Link to="/Signup" className="loginSignup"> 회원가입</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Login;