import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  let navigate = useNavigate();
  const [task, settask] = useState({
    Taskname: "",
    Taskassigndate: "",
    Tasktitle: "",  
    email: "",
    TaskDescraption: ""
  });

  const { Taskname, Taskassigndate, email, Tasktitle, TaskDescraption } = task;
  const onInputChange = e => {
    settask({ ...task, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
   const result = await axios.post("http://localhost:4000/task", task);
   console.log(result)
   console.log(task)
    navigate("/Dashboard");
    
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg m-2"
              placeholder="Enter Task-Name"
              name="Taskname"
              value={Taskname}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg m-2"
              placeholder="Enter Task-Title"
              name="Tasktitle"
              value={Tasktitle}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg m-2"
              placeholder="Task-Descraption"
              name="TaskDescraption"
              value={TaskDescraption}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg m-2"
              placeholder="Enter Taskdate"
              name="Taskassigndate"
              value={Taskassigndate}
              onChange={e => onInputChange(e)}
            />
          </div>
            <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg m-2"
              placeholder="Enetr your email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block m-2">Add User</button>
        </form>
      </div>
    </div>
  );
};
export default AddTask;