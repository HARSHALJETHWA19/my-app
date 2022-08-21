
import './App.css';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import ViewStudent from './component/ViewList';
import {Container} from 'react-bootstrap';
import AddStudent from './component/AddStudent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container>
        <Router>
        <Routes>
          <Route path='/addstudent' element={<AddStudent/>}/>
          <Route path="/updatestudent/:studentId" element={<AddStudent/>}/>
          <Route path ='/viewstudent' element={<ViewStudent/>}/>
        </Routes>
        </Router>
        {/* <BrowserRouter>
        <Routes>
          <Route path='/addstudent' element={<AddStudent/>}/>
         <Route path='/viewstudent' element={<ViewStudent/>}/>
      </Routes>
      </BrowserRouter> */}
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
