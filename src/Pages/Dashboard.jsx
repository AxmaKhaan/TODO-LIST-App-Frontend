import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "/src/Dashboard.css"
import Task_Status from '../Components_reuse/Task_Status';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { useContext } from 'react';
// import { counterContext } from '../context/Context.js';

export default function Dashboard() {
  // const value = useContext(counterContext)
  const [taskCount, setTaskCount] = useState();
  const [completedTask, setcompletedTask ] = useState();
  const [pendingTask, setPendingTask] = useState();
  const [overDueTask, setOverDueTask] = useState();

  useEffect(() => {
    fetch("todo-list-app-backend-production-622b.up.railway.app/mytask/taskcount")
    .then(res => res.json())
    .then(data => {
      setTaskCount(data.totallCount);
      setcompletedTask(data.completedTask);
      setPendingTask(data.pendingTask);
      setOverDueTask(data.overDueTask)
  })
    .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | Student Task Manager</title>
        <meta name="description" content="Student task dashboard" />
      </Helmet>
      <main>
        <section className="hero_section">
          <div className="container_top">
            <div className="boxes" id="box_1"><Task_Status task_status_name="Totall tasks :" task_status_number={taskCount} image="totallTask.svg" /></div>
            <div className="boxes" id="box_2"><Task_Status task_status_name="Completed :" task_status_number={completedTask} image="completedTask (1).svg" /></div>
            <div className="boxes" id="box_3"><Task_Status task_status_name="pending :" task_status_number={pendingTask} image="pendingTask.svg" /></div>
            <div className="boxes" id="box_4"><Task_Status task_status_name="Overdue tasks :" task_status_number={overDueTask} image="overdueTask.svg" /></div>
          </div>
        </section>
        <section className="main_section_2 container-fluid">
          <div className="container_middle row">
            <div className="block col-xl-5 col-sm-12" id="block_1">
              <div className="upcoming_info">
                <h5>Upcoming Deadline</h5>
              </div>
              <div className="upcoming_info up_info_1">
                <span className='span-1'><img src="calendar-pen.png" alt="calender-pen" /></span>
                <span className='span-2'>
                  <p className='h6 text-center'>Project Report</p>
                  <p className='text-center'>May 20, 2026</p>
                </span>
              </div>
              <div className="upcoming_info up_info_2">
                <span className='span-1'><img src="calendar-star.png" alt="calender-star" /></span>
                <span className='span-2'>
                  <p className='h6 text-center'>Quiz on chapter 5</p>
                  <p className='text-center'>May 22, 2026</p>
                </span>
              </div>
            </div>
            <div className="block col-xl-6 col-sm-12" id="block_2">
              <div className="mycourse_block">
                <h5>My Courses</h5>
                <button>ADD Task</button>
              </div>
              <div className="mycourse_block">
                <div className="boxi"><Link to="/"><img src="web-development1.png" alt="web-development" width="230px" /></Link></div>
                <div className="boxi"><Link to="/"><img src="Graphic-Design-illustration.jpg" alt="Graphic-Design-illustration" width="230px" /></Link></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
