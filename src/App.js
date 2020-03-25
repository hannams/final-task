import { connect } from 'react-redux';
import { usersFetchData } from './store/actions/userActions'
import {  BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';
import React, { useEffect } from 'react'
import HomePage from './pages/HomePage';
import AboutUserPage from './pages/AboutUserPage'
import EditPage from './pages/EditPage';

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
    try{
      loadUsers();
    } catch (e) {
      console.log(e);
    }
  }, [loadUsers]);

  return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/home">
              <HomePage/>
            </Route>
            <Route path="/edit/:id">
                <EditPage />
            </Route>
            <Route path="/about/:id">
              <AboutUserPage/>
            </Route>
            <Redirect to='/home'/>
          </Switch>
        </div>
      </Router>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)