import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "/src/My_task.css";


export default function My_tasks() {
  const [taskdata, setTaskdata] = useState({
    title: "",
    course: "",
    status: "",
    dueDate: "",
    description: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskdata({
      ...taskdata,
      [name]: value
    });
  };

  // after submition task form

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = "https://todo-list-app-backend-production-c0dd.up.railway.app/mytask/addtask";
    let method = "POST";

    if (editId) {
      url = `https://todo-list-app-backend-production-c0dd.up.railway.app/mytask/editTask/${editId}`;
      method = "PUT";
    }

    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskdata)
    })

    const result = await res.json()

    if (result.success) {
      alert(editId ? "Task Updated" : "Task Added");
    }

    setTaskdata({
      title: "",
      course: "",
      dueDate: "",
      description: ""
    })
    setEditId(null);
    fetchTasks();
  }

  // mongodb local host me stored task data fetch krna

  const [enteredTask, setEnteredTask] = useState([]);
  const fetchTasks = async () => {
    const res = await fetch("https://todo-list-app-backend-production-c0dd.up.railway.app/mytask/tasks");
    const data = await res.json();
    setEnteredTask(data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  // edit Handling
  const [editId, setEditId] = useState(null);
  const handleEdit = (task) => {
    setTaskdata({
      title: task.title,
      course: task.course,
      status: task.status,
      dueDate: task.dueDate,
      description: task.description
    });

    setEditId(task._id);
    setAdd(true); // form open
  };

  // delete Handling

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm("Are you sure you want to delete this task?");

    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://todo-list-app-backend-production-c0dd.up.railway.app/mytask/deletetask/${id}`, {
        method: "DELETE"
      });

      const result = await res.json();

      if (result.success) {
        alert("Task deleted");

        // UI update without refresh
        setEnteredTask(prev =>
          prev.filter(task => task._id !== id)
        );
      }

    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  // Add task button Handle
  const [add, setAdd] = useState(false)
  const TaskFormHandle = () => {
    setAdd(!add);
  }
  const addButtonClasses = `new_task_section ${add ? "active_taskForm" : "not"}`;

  const closeSidebar = () => {
    setAdd(false)
  }



  return (
    <>
      <section className="my_task_section">
        {/* ADD NEW TASK FORM SECTION */}
        <section className='addTaskButtonSection'>
          <button className='addTaskButton' onClick={TaskFormHandle}>Add Task</button>
        </section>
        <section className={addButtonClasses}>
          <section className="inner_newTask_sec">
            <form action="" onSubmit={handleSubmit}>
              <div className="form_group">
                <label htmlFor="title">Task Name :</label>
                <input type="text" id='title' name='title' value={taskdata.title} placeholder='' onChange={handleChange} />
              </div>
              <div className="form_group">
                <label htmlFor="course">Course :</label>
                <select name="course" id="course" value={taskdata.course} onChange={handleChange}>
                  <option value="Course">Course</option>
                  <option value="Physics">Physics</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Computer">Computer</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="English">English</option>
                </select>
              </div>
              <div className="form_group">
                <label htmlFor="status">Status :</label>
                <select name="status" id="status" value={taskdata.status} onChange={handleChange}>
                  <option value="Status">Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="OverDue">Cverdue</option>
                </select>
              </div>
              <div className="form_group">
                <label htmlFor="dueDate">Due Date :</label>
                <input type="date" id='dueDate' name='dueDate' value={taskdata.dueDate} placeholder='Enter DueDate' onChange={handleChange} />
              </div>
              <div className="form_group">
                <label htmlFor="description">Desription :</label>
                <input type="text-area" id='description' name='description' value={taskdata.description} placeholder='' onChange={handleChange} />
              </div>
              <button type='submit' onClick={closeSidebar}>submit</button>
            </form>
          </section>
        </section>

        {/* MY TASK TABLE */}
        <section className="my_task_table_sec">
          <section className="inner_task_table_sec">
            <div className="table_container">
              <table className='Task_table table'>
                <caption style={{ color: 'black' }}>My Tasks</caption>
                <thead className='Task_table_head'>
                  <tr>
                    <th>Task</th>
                    <th className='th_course td_course d-none d-lg-table-cell'>Course</th>
                    <th>Status</th>
                    <th className='th_dueDate d-none d-lg-table-cell'>DueDate</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className='Task_table_body'>
                  {enteredTask.map((task) => (
                    <tr key={task._id}>
                      <td>{task.title}</td>
                      <td className='td_course d-none d-lg-table-cell'>{task.course}</td>
                      <td className={task.status}> <span>{task.status}</span></td>
                      <td className='td_dueDate d-none d-lg-table-cell'>{task.dueDate}</td>
                      <td>
                        <button className='edit_task' onClick={() => handleEdit(task)} >
                          <img src="pen-clip (1).png" alt="pen clip" />
                        </button>
                        <button className='delete_task' onClick={() => handleDelete(task._id)} >
                          <img src="trash.png" alt="trash img" />
                        </button>
                      </td>
                    </tr>))}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </section>
    </>
  )
}
