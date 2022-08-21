import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function ViewStudent() {
    const [students, setStudents] = useState([])

    useEffect(() => {
      
    axios.get("http://localhost:8080/Students")
    .then(response => setStudents(response.data))
    .catch(error=>alert(error));
    
    

      })
    
      const deleteStudent = (id, event) => {
        event.preventDefault();
        axios.get("http://localhost:8080/Student/"+id)
        .then(response => alert(response.data))
        .get(error => alert(error));
      }

  return (
    <div>
   <header className='my-4'> View Student</header>
    <Table className='my-4 mx-4 me-4' striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Edit/Delete</th>
          
        </tr>
      </thead>
      <tbody>
        {
            students.map((student) =>
        <tr>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.address}</td>
          <td> <Link to={"/updatestudent/"+student.id}> <Button variant="primary">Edit</Button> </Link>
          <span/>
          <Button variant="danger" onClick={deleteStudent.bind(this, student.id)}>Delete</Button>
          </td>
        </tr>)
}
      </tbody>
    </Table>
    </div>
   
  );
}

