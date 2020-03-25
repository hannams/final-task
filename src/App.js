import { connect } from 'react-redux';
import { usersFetchData } from './store/actions/userActions'
import {  BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';
import React, { useEffect } from 'react'
import HomePage from './pages/HomePage';

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUsers: () => dispatch(usersFetchData())
  }
}

function App( { loadUsers } ) {
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/home">
              <HomePage/>
            </Route>
            <Route path="/edit">

            </Route>
            <Route path="/about">

            </Route>
            <Redirect to='/home'/>
          </Switch>
        </div>
      </Router>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)