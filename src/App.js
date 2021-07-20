import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './routes/Home'
import Search from './routes/Search'
import BookSearch from './routes/BookSearch'

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path='/' exact={true} component={Home}></Route>
      {/* <Route path='/search' exact={true} component={Search}></Route> */}
      <Route path='/search' exact={true} component={BookSearch}></Route>
    </HashRouter>
  );
}

// http://book.interpark.com/bookPark/html/bookpinion/api_bestseller.html
// https://blog.soobinpark.com/166

export default App;