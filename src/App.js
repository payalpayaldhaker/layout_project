import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./Pages/Error";
import GetStudent from "./Pages/GetStudent";

import Login from "./Pages/Login";
import Register from "./Pages/Register";


function App() {
  return (
      <> 
          <Router> 
            <Routes> 
              <Route path="/" element={<Login/>}/>
              <Route  path="/login" element={ <Login/>}/>
              < Route path="/register" element={<Register/>}/>
              < Route path="/getstudent/:stu_id/:id" element={<GetStudent/>}/> 
              < Route path="*" element={<Error/>}/>
            </Routes>
          </Router>
      
      </>
  );
}

export default App;
