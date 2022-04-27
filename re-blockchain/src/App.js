
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Main from './Main';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Marketplace from './Pages/Marketplace';
import Signup from './Pages/Profile/Signup';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page-container">
          <div className="content-wrap">
            <Header />
            <Route exact path ="/" component={Main} />
            <Route exact path ="/marketplace" component={Marketplace} />
            <Route exact path ="/signup" component={Signup} />
          </div>
        <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
