import React, {Component} from "react";
import LoginForm from "../components/loginForm";
import SignUpForm from "../components/signUpForm";

class LoginPage extends Component{
  constructor(){
    super();
    this.state = {
      currentPage: "Login"
    }
  }

  componentDidMount(){

  }

  changePage = input => {
    this.setState({currentPage: input});
  }

  render(){
    return (
      <div>
       { this.state.currentPage === "Login" ?
       <LoginForm handleChangePage={this.changePage} updateUser={this.props.updateUser} /> :
       <SignUpForm handleChangePage={this.changePage} updateUser={this.props.updateUser}/>}
       </div>
    )
  }
}

export default LoginPage;