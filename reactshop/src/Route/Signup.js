import React from 'react';
import './Signup.css'
import axios from 'axios';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            password: '',
            name: '',
            phone: '',
            address: ''
        }
    }

    handlesubmit = (e) => {
        e.preventDefault()
        this.addUser()
    }

    // file: e.tartget.files[0],
    // fileName: e.tartget.vaule

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addUser=()=>{
        axios.post("/join",{
            userid: this.state.userid,
            password: this.state.password,
            name: this.state.name,
            phone: this.state.phone,
            address: this.state.address
        })
        .then(function(res) {
                console.log(res);
            
        })
        .catch(function (error){
            console.log(error)
        });
    }


    render() {
        return (
            <form  method="POST" className="Signup" onSubmit={this.handlesubmit}>
                <h1>회원가입</h1>
                <div className="Signupitem">
                    <input className="Signupinputitem" type="text" name="userid" value={this.state.userid} onChange={this.handleValueChange} placeholder="아이디를 입력하세요" />
                </div>
                <div className="Signupitem">
                    <input className="Signupinputitem" type="password" name="password" value={this.state.password} onChange={this.handleValueChange} placeholder="비밀번호를 입력하세요" />
                </div>
                <div className="Signupitem">
                    <input className="Signupinputitem" type="text" name="name" value={this.state.name} onChange={this.handleValueChange} placeholder="이름을 입력하세요"/>
                </div>
                <div className="Signupitem">
                    <input className="Signupinputitem" type="text" name="phone" value={this.state.phone} onChange={this.handleValueChange} placeholder="010 0000 0000"/>
                </div>
                <div className="Signupitem">
                    <input className="Signupinputitem" type="text" name="address" value={this.state.address} onChange={this.handleValueChange} placeholder="주소를 입력하세요"/>
                </div>
                <button className="signupButton" type="submit">가입하기</button>
            </form>
        );
    };
};

export default Signup;