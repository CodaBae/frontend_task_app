import { useState } from "react"
import axios from "axios"

const CreateTask = (props) =>{

    const API_ENDPOINT = 'https://adventurous-puce-cummerbund.cyclic.app/task'
    const [name, setName] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = async () => {
        let date = new Date().toDateString()

        let data = {
            name,
            date
        }

       if(name === ''){
        alert('add a task')
       }else{
        let response = await axios.post(API_ENDPOINT,data)

        setName('')

        props.getNewTask()
        console.log(response)

       }


    }

    return(
        <div>
            <input type='text' value={name} onChange={handleName} />
            <button onClick={handleSubmit}>+</button>
        </div>
    )
}

export default CreateTask