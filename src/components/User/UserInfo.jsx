import React from "react";
import { Link } from "react-router-dom";

function UserInfo({ user }) {
  return (
    <div className='card' style={{ width: "30rem" }}>
      <div className='card-body'>
        <div>
          <h6 className='card-title'>{user.name}</h6>
        </div>
        <div>
          <p className='card-text'>
            <span>Phone: </span>
            {user.phone}
          </p>
          <p className='card-text'>
            <span>Address: </span>
            {`${user.address.city}, ${user.address.street}, ${user.address.suite}`}
          </p>
          <p className='card-text'>
            <span>Email: </span>
            {user.email}
          </p>
        </div>

        <div>
          <Link to={()=> `/about/${user.id}`} className='card-link'>
            View
          </Link>
          <Link to={()=> `/edit/${user.id}`} className='card-link'>
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
