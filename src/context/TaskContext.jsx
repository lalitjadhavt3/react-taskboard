import React, {useEffect, useState, createContext, Children} from 'react'
import taskdb from './../utils/taskdb.json'
export const TaskContext = createContext()
export const TaskContextProvider = ({children}) => {
 const [tasks, setTasks] = useState(taskdb)
 const getTaskById = (id) => {
  return tasks.find((task) => task.id === id)
 }
 const updateTask = (updatedTask) => {
  setTasks((prevTasks) =>
   prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
  )
 }
 return (
  <TaskContext.Provider value={{tasks, setTasks, getTaskById, updateTask}}>
   {children}
  </TaskContext.Provider>
 )
}
