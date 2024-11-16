import Header from './components/Header';
import List from './components/List';
import Graph from './components/Graph';
import Campaign from './components/Campaign';
import Sidemenu from './components/Sidemenu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import OTP_auth from './components/OTP_auth';


function App() {
  return (
    <div className='bg-slate-50'>
    <BrowserRouter>

    <Routes>
      {/* Default route (Home Page) */}
      <Route path="/" element={<> <Sidemenu /> <Header />
      <List /><Graph /> <Campaign />  </>} />
      <Route path="/Signup" element={<> <Header /><Signup /></>}/>
      <Route path="/OTP_auth" element={<> <Header /><OTP_auth /></>}/>
      <Route path="/Login" element={<> <Header /><Login /></>}/>
              
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
