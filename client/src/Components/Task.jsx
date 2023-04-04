import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Task = () => {
  const [task, setUser] = useState([]);

  useEffect(() => {
    loadtask();
  }, []);

  const loadtask = async () => {
    const result = await axios.get("http://localhost:4000/task");
    setUser(result.data.reverse());
  };

  const deletetask = async _id => {
    await axios.delete(`http://localhost:4000/task/${_id}`);
    loadtask();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Dashboard</h1>
    
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">SN</th>
              <th scope="col">Task-Name</th>
              <th scope="col">Task-Title</th>
              <th scope="col">Task-Descraption</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {task.map((task, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{task.Taskname}</td>
                
                <td>{task.Tasktitle}</td>
                <td>{task.TaskDescraption}</td>
                
                <td>
                  
                  <Link
                    class="btn btn-outline-primary m-2"
                    to={`/edit/${task.
                      _id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger m-2"
                    onClick={() => deletetask(task._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Task;