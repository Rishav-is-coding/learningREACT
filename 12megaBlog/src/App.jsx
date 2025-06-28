
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import './App.css'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
  const loadUser = async () => {
    try {
      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(login(userData));  // no need to wrap in { userData }
      } else {
        dispatch(logout());
      }
    } catch (err) {
      console.error("Session check failed:", err.message);
      dispatch(logout());
    } finally {
      setLoading(false);
    }
  };

  loadUser();
}, []);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
