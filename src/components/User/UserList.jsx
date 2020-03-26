import React from "react";
import UserInfo from "./UserInfo";
import { connect } from "react-redux";
import { search } from "./../../api/searchUsers";
import PropTypes from 'prop-types'

function UserList({ users, searchValue }) {
  return (
    <div className='container'>
      <div className='user-list'>
        { users &&
          users.map(user => <UserInfo key={user.id} user={user} />)
        }
        { !users.length && searchValue && <h3>No such user!</h3>}
      </div>
    </div>
  );
}

const mapStateToProps = store => ({
  users: search(store.users, store.search.value),
  searchValue: store.search.value
});

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchValue: PropTypes.string
}


export default connect(mapStateToProps)(UserList);
