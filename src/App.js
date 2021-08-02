import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomeBook from './routes/HomeBook'
import BookSearch from './routes/BookSearch'

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path='/' exact={true} component={HomeBook}></Route>
      <Route path='/search' exact={true} component={BookSearch}></Route>
    </HashRouter>
  );
}

export default App;