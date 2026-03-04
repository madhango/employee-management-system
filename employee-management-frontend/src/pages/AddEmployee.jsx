import { useState } from "react";
import API from "../services/api";

function AddEmployee(){

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [department,setDepartment]=useState("");
  const [position,setPosition]=useState("");
  const [salary,setSalary]=useState("");

  const addEmployee = async () => {

    await API.post("/employees",{
      name,
      email,
      department,
      position,
      salary
    });

    alert("Employee added");
  };

  return(

    <div>

      <h2>Add Employee</h2>

      <input placeholder="Name" onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Department" onChange={e=>setDepartment(e.target.value)} />
      <input placeholder="Position" onChange={e=>setPosition(e.target.value)} />
      <input placeholder="Salary" onChange={e=>setSalary(e.target.value)} />

      <button onClick={addEmployee}>
        Add Employee
      </button>

    </div>

  );
}

export default AddEmployee;