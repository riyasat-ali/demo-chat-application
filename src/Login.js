import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from './actions';
import './styles/login.css'



class Login extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    const userName = this.refs.userName.value;
    const password = this.refs.password.value;
    if (userName.length === 0 || password.length === 0) {
        return;
    }
    this.props.userLogin(userName);
    this.props.history.push("/Home");
  }
  render() {
    const { props, onSubmit } = this;
    return(
      <main>
    <center>
      <img class="responsive-img" style={{width: "250px",height:"50px"}} src={require("./white_thumb_photo_1562048533.png")} />
      <div class="section"></div>

      <h5 class="indigo-text">Please, login into your account</h5>
      <div class="section"></div>

      <div class="container">
        <div class="z-depth-1 grey lighten-4 row" style={{display: "inline-block", padding: '32px 48px 0px 48px', border:' 1px solid #EEE;'}}>

          <form class="col s12" onSubmit={onSubmit}>
            <div class='row'>
              <div class='col s12'>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <i className="prefix mdi-action-account-circle" />
                <input class='validate' ref="userName" type='text' name='userName' id='userName' />
                <label for='userName'>Enter your User Name</label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <i className="prefix mdi-action-lock-outline" />
                <input class='validate' ref="password" type='password' name='password' id='password' />
                <label for='password'>Enter your password</label>
              </div>
              <label style={{float: 'right;'}}>
								<a class='pink-text' href='#!'><b>Forgot Password?</b></a>
							</label>
            </div>

            <br />
            <center>
              <div class='row'>
                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
              </div>
            </center>
          </form>
        </div>
      </div>
    </center>

    <div class="section"></div>
    <div class="section"></div>
  </main>
    )
   

    // return (<form className="container" onSubmit={onSubmit}>
    //   <div style={{ border: '1px solid red', textAlign: 'center' }}>
    //     {/* <div className="row"> */}
    //     <div className="input-field col">
    //       <i className="prefix mdi-action-account-circle" />
    //       <input ref="userName" type="text" placeholder="User Name" />
    //     </div>
    //     {/* </div> */}
    //     <div className="row">
    //       <div className="input-field col">
    //         <i className="prefix mdi-action-lock-outline" />
    //         <input type="password" ref="password" placeholder="Password" />
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="input-field col s2">
    //         <button type="submit" className="btn-large">
    //           Login
    //       </button>
    //       </div>
    //     </div>
    //   </div>
    // </form>
    // );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    userLogin: (userData) => dispatch(userLogin(userData)),
  };
}

export default connect(null,mapDispatchToProps)(Login)
