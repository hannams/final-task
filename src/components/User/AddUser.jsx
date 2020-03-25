import React, { useState } from "react";
import UserForm from "./UserForm";

function AddUser() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='container'>
      <button
        className='btn btn-primary'
        onClick={() => setShowForm(true)}
        disabled={showForm}
      >
        Add User
      </button>
      {showForm && <UserForm closeForm={() => setShowForm(false)} />}
    </div>
  );
}

export default AddUser;
