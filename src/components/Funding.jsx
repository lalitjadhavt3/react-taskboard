// src/components/Funding.js

import React, {useState} from 'react'
import '../styles/Funding.css'

const Funding = () => {
 const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
 })

 const handleChange = (e) => {
  const {name, value} = e.target
  setFormData({
   ...formData,
   [name]: value,
  })
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  console.log('Form Data Submitted:', formData)
 }

 return (
  <form className='form' onSubmit={handleSubmit}>
   <p className='title'>Funding Form</p>

   <div className='flex'>
    <label>
     <input
      className='input'
      type='text'
      placeholder=''
      name='firstName'
      value={formData.firstName}
      onChange={handleChange}
      required
     />
     <span>Firstname</span>
    </label>
    <label>
     <input
      className='input'
      type='text'
      placeholder=''
      name='lastName'
      value={formData.lastName}
      onChange={handleChange}
      required
     />
     <span>Lastname</span>
    </label>
   </div>
   <label>
    <input
     className='input'
     type='email'
     placeholder=''
     name='email'
     value={formData.email}
     onChange={handleChange}
     required
    />
    <span>Email</span>
   </label>
   <label>
    <input
     className='input'
     type='password'
     placeholder=''
     name='password'
     value={formData.password}
     onChange={handleChange}
     required
    />
    <span>Password</span>
   </label>
   <label>
    <input
     className='input'
     type='password'
     placeholder=''
     name='confirmPassword'
     value={formData.confirmPassword}
     onChange={handleChange}
     required
    />
    <span>Confirm password</span>
   </label>
   <button className='submit' type='submit'>
    Submit
   </button>
   <p className='signin'>
    Already have an account? <a href='#'>Signin</a>
   </p>
  </form>
 )
}

export default Funding
