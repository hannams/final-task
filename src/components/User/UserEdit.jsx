import React from "react";
import { findUserById } from "./../../api/searchUsers";
import { updateUser } from "./../../store/actions/userActions";
import { connect } from "react-redux";
import UserForm from "./UserForm";
import PropTypes from 'prop-types'

function UserEdit({ user, editUser }) {


  return (
    <div className='card'>
      <div className='card-header'>
        <h1 className='card-title text-center'>Edit {user.name}'s profile</h1>
      </div>
      <div className="card-body edit-form">
          <UserForm user={user} updateUser={editUser} isEditing={true}/>
      </div>
    </div>
  );
}

const mapStateToProps = (store, { id }) => ({
  user: findUserById(store.users, +id)
});

const mapDispatchToProps = dispatch => ({
  editUser: user => dispatch(updateUser(user))
});

UserEdit.propTypes = {
  user: PropTypes.object.isRequired,
  editUser: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
