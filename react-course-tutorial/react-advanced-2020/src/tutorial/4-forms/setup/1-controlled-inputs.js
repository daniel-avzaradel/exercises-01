import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    console.log('hello world');
  }

  const handleChangeName = (e) => {
    setFirstName(e.target.value)
    console.log(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value);
  }

  return (
    <>
    <article>
      <form className='form' onSubmit={(e) => Submit(e)}>
        <div className="form-control">
          <label htmlFor="name">Name: </label>
          <input type="text" id='firstName' name='firstName' value={firstName} onChange={(e) => handleChangeName(e)}/>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input type="text" id='email' name='email' value={email} onChange={(e) => handleChangeEmail(e)}/>
        </div>
        <button type='submit'>add person</button>
      </form>
    </article>
    </>
  )
};

export default ControlledInputs;
