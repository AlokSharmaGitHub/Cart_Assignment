import logo from './logo.svg';
import './App.css';
import Container from './containers/container'
import Header from './containers/headerContainer'
import login from "./components/login";
import cartContainer from './containers/cartContainer'
import Cart from "./components/cartItem";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Component } from 'react';
import fire from "./config/firebase";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
       user:{email:"alok98sharma@gmail.com", password:"222222Aa@"}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      }
      else{
        this.setState({user:null});
      }
    })
  }
  render(){
      return (
        <div className="App">

          <Router>
          <Route exact path="/" component={login}/>
          <Route exact path="/login" component={login}/>
          <Route path="/cartItem" component={cartContainer}/>
          <Route path="/product" component={Container}/>
          </Router>
        </div>
      );
    
  }
}


export default App;
