import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Admin/Dashboard';
import Drivers from './pages/Admin/Drivers';
import Passengers from './pages/Admin/Passengers';
import DriverDashboard from './pages/Driver/DriverDashboard';
import PassengerDashboard from './pages/Passenger/PassengerDashboard';
import RideRequest from './Components/RideRequest';
import UserDetails from './pages/Admin/UserDetails';
import RoleSelection from './Components/RoleSelection';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register={true}/> }/>
        <Route path='/dashboard' element={<Dashboard/> }/>
        <Route path='/drivers' element={<Drivers/> }/>
        <Route path='/passengers' element={<Passengers/> }/>
        <Route path='/userdetails' element={<UserDetails/> }/>
        <Route path="/driver-dashboard" element={<DriverDashboard/>} />
        <Route path="/passenger-dashboard" element={<PassengerDashboard/>} />
        <Route path="/rideRequest" element={<RideRequest/>} />


      </Routes>
    </>
  )
}

export default App
