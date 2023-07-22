import React from 'react'

export const AddContact = () => {
  return (
    <div className="ui main">
        <h2>Add Contact</h2>
        <form action="" className="ui form">
            <div className="field">
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" placeholder='Enter Name' />
            </div>
            <div className="field">
                <label htmlFor="">Email</label>
                <input type="text" name="email" id="" placeholder='Enter Email' />
            </div>
            <button className='ui button blue'>Add</button>
        </form>
    </div>
  )
}
