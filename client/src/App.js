import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './Components/AppNavbar';
import ShoppingList from './Components/ShoppingList';
import ItemModal from './Components/ItemModal';
import store from './store.js';
import {Provider} from 'react-redux';
import {Container} from 'reactstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <Container>
            <ItemModal/>
            <ShoppingList/>
          </Container>
          
        </div>
      </Provider>
    );
  }
}

export default App;
