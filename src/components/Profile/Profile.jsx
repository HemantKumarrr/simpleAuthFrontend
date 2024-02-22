import { useNavigate } from "react-router-dom";

const Profile = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate();

  const handleLogout = async ()=> {
    try {
      await fetch('http://localhost:5000/logout', { credentials: 'include' } )
      localStorage.clear();
      navigate('/signup')
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="w-full px-6" >
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile</h2>
                <div className="w-full flex justify-center items-center gap-4 font-bold border border-zinc-500 rounded-md bg-zinc-300 py-1">
                    Username : <p>{userInfo.name}</p>
                </div>
                <div className="w-full flex justify-center items-center gap-4 font-bold border border-zinc-500 rounded-md bg-zinc-300 py-1 mt-4">
                    Email : <p>{userInfo.email}</p>
                </div>
            <button
                className="w-full bg-gradient-to-r from-red-800 to-red-600 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-red-600 hover:to-red-600 transition ease-in-out duration-150"
                onClick={handleLogout}
                >
                Log Out
            </button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Profile
