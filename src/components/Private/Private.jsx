import { Navigate, Outlet } from "react-router-dom"

const Private = () => {
    const isUserActive = localStorage.getItem('user');
  return (
    isUserActive ? <Outlet /> : <Navigate to='/signup' />
  )
}

export default Private
