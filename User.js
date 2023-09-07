import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const User = ({ name, email, id, onEdit, onDelete }) => {

    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => {
      setIsEdit(!isEdit);
    };
  
    const handleDelete = () => {
      onDelete(id);
    };
  
    const handleOnEditSubmit = (evt) => {
      evt.preventDefault();
      onEdit(id, evt.target.name.value, evt.target.email.value);
      setIsEdit(!isEdit);
    };

  return (
    
    <div className="container">
      <div className='row'>
      <div className='col-md-8 offset-md-2'>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Name" id='name' name="name" defaultValue={name} />
          <input placeholder="Email" id='email' name="email" defaultValue={email} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="users col-md-6 offset-md-2">
          <span className="user-name">{name}</span>
          <span className="user-email">{email}</span>
          <div>
            <button type='button' className='btn btn-success ms-2' onClick={handleEdit}>Edit</button>
            <button type='button' className='btn btn-danger ms-2' onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
      </div>
      </div>
    </div>
    
  )
}

export default User;