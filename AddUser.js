import React from 'react'

const AddUser = ({onAdd}) => {

    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        onAdd(evt.target.name.value, evt.target.email.value);
        evt.target.name.value = "";
        evt.target.email.value = "";
      };

  return (
    <>
    <form onSubmit={handleOnSubmit}>
      <h5>Add User</h5>
      <input placeholder="Name" name="name" />
      <input placeholder="Email" name="email" />
      <button className='btn btn-primary rounded-0 ms-2' onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
    </>
  )
}

export default AddUser