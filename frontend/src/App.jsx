
import axios from 'axios';
import React, { useEffect } from 'react'
// import { asyncGetUsers } from './store/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Mainroutes from './routes/mainroutes';
import Navbar from './components/Navbar';
import { asyncCurrentUsers } from './store/action/userActions';

const App = () => {
  // const data = useSelector(state => state.user)
  const dispatch = useDispatch();

  // console.log(data);
  
  useEffect(() => {
    dispatch(asyncCurrentUsers())
  }, [])

  return (
    <div>
      <Navbar/>
      <Mainroutes/>
      app
    </div>
  )
}

export default App
