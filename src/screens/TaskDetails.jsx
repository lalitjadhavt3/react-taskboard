import React, {useState, useEffect, useContext} from 'react'
import {Link, useNavigate, useNavigation, useParams} from 'react-router-dom'
import FileUpload from '../components/FileUpload'
import DocUpload from '../components/DocUpload'
import Funding from '../components/Funding'
import {TaskContext} from '../context/TaskContext'
const TaskDetails = () => {
 const {id} = useParams()
 const [taskData, setTaskData] = useState({})
 const {getTaskById, updateTask} = useContext(TaskContext)
 const navigation = useNavigate()
 useEffect(() => {
  const taskDetail = getTaskById(id)
  if (taskDetail) {
   setTaskData(taskDetail)
  }
 }, [id, getTaskById])
 const handleCommentChange = (e) => {
  const updatedTask = {...taskData, comment: e.target.value}
  setTaskData(updatedTask)
  updateTask(updatedTask)
 }
 return (
  <div className=''>
   {console.log(taskData)}
   <h1>{taskData?.name}</h1>
   <div>
    <h2>Status : {taskData?.status}</h2>
   </div>
   <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
    {taskData?.type === 'file' ? (
     <FileUpload />
    ) : taskData?.type === 'doc' ? (
     <DocUpload />
    ) : (
     <Funding />
    )}
   </div>
   <form onSubmit={(e) => e.preventDefault()}>
    <div style={{alignSelf: 'center', width: '100%', margin: 'auto'}}>
     <input
      style={{minHeight: '50px', minWidth: '300px'}}
      type='text'
      placeholder='Enter Task Comment'
      value={taskData?.comment || ''}
      required
      onChange={handleCommentChange}
     />
    </div>
    <input type='submit' onClick={() => navigation('/taskboard')} />
   </form>
   <br />
   <br />
   <Link to='/taskboard'>Go Back</Link>
  </div>
 )
}
export default TaskDetails
