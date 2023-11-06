import axios from "axios"
import { useState } from "react"

const TaskList = (props) => {
    const API_ENDPOINT_UPDATE = 'https://adventurous-puce-cummerbund.cyclic.app/update_task'
    const API_ENDPOINT_DELETE = 'https://adventurous-puce-cummerbund.cyclic.app/delete_task'

    

    const handleComplete =  (id,isDoneParam) => async () =>{
        let isDone = !isDoneParam

        const data = {
            id,
            isDone
        }

        let response = await axios.patch(API_ENDPOINT_UPDATE,data)

        console.log(response)

        props.getNewTask()

    }

    const handleDelete = (id) => async() =>{

       let response = await axios.delete(`${API_ENDPOINT_DELETE}/${id}`)


       props.getNewTask()
    }

    return (
        <div >
            {props.data.map((item, index) => 
            <div key={index}>
                <h3 >{item.name}</h3>
                <input type='checkbox' checked={item.isDone ? true : false} onChange={handleComplete(item._id,item.isDone)} />
                <span style={{color:'red', cursor: 'pointer'}} onClick={handleDelete(item._id)}>Delete</span>
            </div>)}
        </div>
    )
}

export default TaskList