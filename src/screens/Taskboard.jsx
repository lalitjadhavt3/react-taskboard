import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {TaskContext} from '../context/TaskContext'
const Taskboard = () => {
 const {tasks} = useContext(TaskContext)
 return (
  <div className='' style={{display: 'flex', flexDirection: 'row'}}>
   {tasks?.map((item, index) => {
    return (
     <Link
      key={index}
      to={`/taskdetails/${item.id}`}
      style={{
       width: '250px',
       height: '250px',
       border: '1px solid black',
       display: 'flex',
       margin: '2%',
      }}
     >
      <div className='card-body'>
       <h5 className='card-title'>{item?.name}</h5>
       <p className='card-text'>{item?.comment}</p>
      </div>
     </Link>
    )
   })}
  </div>
 )
}
export default Taskboard
