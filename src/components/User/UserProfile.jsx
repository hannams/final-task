import React from "react";
import { findUserById } from "../../api/searchUsers";
import getPropertyValue from "../../api/getPropertyValue";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import PropTypes from 'prop-types'

function UserProfile({ user, id }) {
  let history = useHistory();

  return (
    <div className='card'>
      <div className='card-header text-center text-white bg-secondary'>
        <h3 className='card-title'>{user.name}</h3>
      </div>
      <div className='card-body user-profile'>
        <div>
          
          <p className='card-text'>
            <span>Phone: </span>
            {user.phone}
          </p>
          <p className='card-text'>
            <span>Address: </span>
            {`${getPropertyValue(user.address, "city")}, 
            ${getPropertyValue(user.address, "street")},
             ${getPropertyValue(user.address, "suite")}`}
          </p>
          <p className='card-text'>
            <span>Email: </span>
            {user.email}
          </p>
        </div>
        <div  className='link btn-group'>
          <button className="btn btn-secondary text-white" onClick={() => history.push('/home')}>Get Back</button>
        <Link to={() => `/edit/${id}`} className='btn btn-primary text-white'>Edit profile</Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (store, { id }) => ({
  user: findUserById(store.users, +id)
});

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(UserProfile);

