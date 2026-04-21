import React from 'react'
import "/src/Task_status.css"

export default function Task_Status(props) {
  return (
    <div className="task_status_box">
      <img src={props.image} alt="task status image" width="100%"/>
      <span>
        <h6>{props.task_status_name}</h6>
        <p>{props.task_status_number}</p>
      </span>
    </div>
  )
}
