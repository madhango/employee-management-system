import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Dashboard(){

  const [employees,setEmployees] = useState([]);

  const fetchEmployees = async () => {

    const res = await API.get("/employees");
    setEmployees(res.data);

  };

  useEffect(()=>{
    fetchEmployees();
  },[]);

  const deleteEmployee = async(id)=>{

    await API.delete(`/employees/${id}`);
    fetchEmployees();

  };

  return(

    <div>

      <h2>Employee Dashboard</h2>

      <Link to="/add">
        <button>Add Employee</button>
      </Link>

      <hr/>

      {employees.length === 0 ? (

        <p>No employees found</p>

      ) : (

        employees.map(emp => (

          <div key={emp._id}>

            <p>
              {emp.name} - {emp.department}
            </p>

            <button onClick={()=>deleteEmployee(emp._id)}>
              Delete
            </button>

          </div>

        ))

      )}

    </div>

  );

}

export default Dashboard;