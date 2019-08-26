import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LayoutHeader, Sidebar } from './components'; //비구조화 할당(내가 원하는 것만 뽑아 쓰겠다.) //모듈화된 컴포넌트들을 임포트해준다.
import { Contents, Login, Signup, Mypage, Basket, ItemList } from './Route'; //비구조화 할당(내가 원하는 것만 뽑아 쓰겠다.) //모듈화된 컴포넌트들을 임포트해준다.



class App extends React.Component {

  render() {
    return (
      <div>
      <Router >
        <div >
          <LayoutHeader />
          <Sidebar />
          <Route path="/Contents" component={Contents} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Mypage" component={Mypage} />
          <Route path="/Basket" component={Basket} />
          <Route path="/ItemList" component={ItemList}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;