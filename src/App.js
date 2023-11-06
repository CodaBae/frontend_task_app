import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import axios from 'axios'

function App() {
  const [task, setTask] = useState([])

  const API_ENDPOINT = 'https://adventurous-puce-cummerbund.cyclic.app/get_task'

  const getTask = async() => {
    let data = await axios.get(API_ENDPOINT)
    let reversedData = data.data.reverse()
    setTask(reversedData)
  }

  useEffect(()=>{

    getTask()

  },[])


  return (
    <div className="App">
      <h1>Task</h1>

      <Header />
      <CreateTask getNewTask={getTask} />
      <TaskList data={task} getNewTask={getTask} />

      
    </div>
  );
}

export default App;
