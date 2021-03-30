import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Order from './components/Order/Order';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    const { date } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/catalog" component={Catalog} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
          <p>{ moment(date).format('MMMM Do YYYY') }</p>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
