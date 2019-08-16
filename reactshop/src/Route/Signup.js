import React from 'react';
import './Signup.css'
import { post } from 'axios';


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
            .then((response) => {
                console.log(response.data);
            })
    }

    // file: e.tartget.files[0],
    // fileName: e.tartget.vaule

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addUser = () => {
        const url = '/api/users';
        const formData = new FormData();
        formData.append('userid',this.state.userid);
        formData.append('name',this.state.name);
        formData.append('password',this.state.password);
        formData.append('phone',this.state.phone);
        formData.append('address',this.state.address);
        // const config = { //보내고자할때 파일이 포함된경우 아래를 작성해준다.
        //     'content-type' : 'multipart/form-data'
        // }
        return post(url, formData);
    }


    render() {
        return (
            <form  method="POST" className="Signup" onSubmit={this.handlesubmit}>
                <h1>회원가입</h1>
                <div className="Signupitem">
                    아이디:<input className="Signupinputitem" type="text" name="userid" value={this.state.userid} onChange={this.handleValueChange} placeholder="아이디를 입력하세요" />
                </div>
                <div className="Signupitem">
                    비밀번호:<input className="Signupinputitem" type="password" name="password" value={this.state.password} onChange={this.handleValueChange} placeholder="비밀번호를 입력하세요" />
                </div>
                <div className="Signupitem">
                    이름 : <input className="Signupinputitem" type="text" name="name" value={this.state.name} onChange={this.handleValueChange} placeholder="이름을 입력하세요"/>
                </div>
                <div className="Signupitem">
                    휴대폰 : <input className="Signupinputitem" type="text" name="phone" value={this.state.phone} onChange={this.handleValueChange} placeholder="010 0000 0000"/>
                </div>
                <div className="Signupitem">
                    주소 : <input className="Signupinputitem" type="text" name="address" value={this.state.address} onChange={this.handleValueChange} placeholder="주소를 입력하세요"/>
                </div>
                <button type="submit">가입하기</button>
            </form>
        );
    };
};

export default Signup;