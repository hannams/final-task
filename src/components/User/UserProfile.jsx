import React from "react";
import { findUserById } from "../../api/searchUsers";
import getPropertyValue from "../../api/getPropertyValue";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function UserProfile({ user, id }) {

  return (
    <div className='card'>
      <div className='card-header text-center text-white bg-secondary'>
        <h3 className='card-title'>{user.name}</h3>
      </div>
      <div className='card-body user-profile'>
        <div>
          <p className='card-text'>
            <span>Username: </span>
            {user.username}
          </p>
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
        <button className='btn btn-secondary'><Link to='/home' className='text-white'>Get back</Link></button>
        <button className='btn btn-primary'><Link to={() => `/edit/${id}`} className='text-white'>Edit profile</Link></button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (store, { id }) => ({
  user: findUserById(store.users, +id)
});

/*

"id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
*/

export default connect(mapStateToProps)(UserProfile);
