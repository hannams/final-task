import React from "react";
import UserInfo from "./UserInfo";
import { connect } from "react-redux";
import { search } from "./../../api/searchUsers";
import PropTypes from 'prop-types'

function UserList({ users }) {
  const foundUsers = users.map(user => <UserInfo key={user.id} user={user} />)
  return (
    <div className='container'>
      <div className='user-list'>
        { foundUsers }
        { !foundUsers.length && <h3>No such user!</h3> }
      </div>
    </div>
  );
}

const mapStateToProps = store => ({
  users: search(store.users, store.search)
});

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default connect(mapStateToProps)(UserList);
