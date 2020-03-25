import React from 'react'
import Header from './../components/header/Header'
import Search from './../components/Search/Search'
import AddUser from './../components/User/AddUser'
import UserList from '../components/User/UserList'

function HomePage() {
    return (
        <div className='container'>
          <Header title={`Search users`}/>
          <Search/>
          <AddUser />
          <UserList/>
        </div>
      )
}

export default HomePage
