import { Route , Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Registration from './components/registration';
import Dashboard from './components/dashboard';


function App() {
  return (
    <div className='my-app'>
      <Routes>
        <Route path='/' element={<Registration/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        {/* <Route path='/form' element={<SignupForm/>} /> */}
      </Routes>


    </div>
    
  )
};

export default App;
