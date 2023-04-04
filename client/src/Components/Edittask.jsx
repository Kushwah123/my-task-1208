import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edittask = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState({
    Taskname: "",
    Taskassigndate: "",
    Tasktitle: "",  
    email: "",
    TaskDescraption: ""
  });

  const { Taskname, Taskassigndate, email, Tasktitle, TaskDescraption } = task;
  const onInputChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadtask();
  }, []);
     console.log(task)
  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/task/${id}`, task);
    console.log(task)
    navigate("/");
  };

  const loadtask = async () => {
    const result = await axios.get(`http://localhost:4000/task/${id}`);
    setTask(result.data);
    console.log(result.data.email)
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A task</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="Taskname"
              value={Taskname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="Taskassigndate"
              value={Taskassigndate}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="Tasktitle"
              value={Tasktitle}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="TaskDecraption"
              value={TaskDescraption}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default Edittask;