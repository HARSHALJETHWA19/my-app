import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function AddStudent() {
    const [Id, setId] = useState()
    const [Name, setName] = useState()
    const [Address, setAddress] = useState()

    const [studentId] = useParams();
    // const navigate = useNavigate();

    const student = {
        Id : Id,
        Name : Name,
        Address : Address
    }

    useEffect(() => {
      
        if(studentId !== null){
            axios.get("http://localhost:8080/Student"+studentId)
            .then(response => {
                setId(response.data.Id);
                setName(response.data.Name);
                setAddress(response.data.Address);
            })
            .catch(error=>alert(error));
            
        }

      },[studentId])
    
    

    let textChange = (event) => {
        if(event.target.name === 'id'){
            setId(event.target.value)
        }else if(event.target.name === 'name'){
            setName(event.target.value)

    }else if(event.target.name === 'address'){
        setAddress(event.target.value)
    }}

    let addStudent = (event) =>{
        // event.preventDefault();
        // if(studentId === null){
            axios.get("http://localhost:8080/Student", student)
            .then(response => {alert(response.data)})
            .get(error=> alert(error));
        // }
        // else{
        // axios.get("http://localhost:8080/Student"+studentId ,student)
        // .then(response => alert(response.data))
        // .get(error => alert(error));
        // }
    // setId('');
    // setName('');
    // setAddress('');
    }
    
  return (
    <Form  onSubmit={addStudent}>
<Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" name='id' value={Id} placeholder="Enter ID" onChange={textChange} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='name' value={Name} placeholder="Enter Name" onChange={textChange} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name='address' value={Address} placeholder="Address" onChange={textChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

