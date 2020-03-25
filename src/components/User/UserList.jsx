import React from "react";
import UserInfo from "./UserInfo";
import { connect } from "react-redux";
import { search } from "./../../api/searchUsers";

function UserList({ users }) {
  return (
    <div className='container'>
      <div className='user-list'>
        {users && users.map(user => <UserInfo key={user.id} user={user} />)}
      </div>
    </div>
  );
}

const mapStateToProps = store => ({
  users: search(store.users, store.search.value)
});

export default connect(mapStateToProps)(UserList);
