import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if( userData.email === '' || userData.password === '') return setIsError("Please fill all the fields")
    try {
      let data = await fetch("https://simpleauthbackend.onrender.com/login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      let response = await data.json();
      console.log(response);
      if(response.uid){
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/profile");
      } else {
        setIsError(response);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="w-full px-6">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
            <form className="flex flex-col">
              {isError && (
                <span className="py-1 my-2 border-2 border-red-800 rounded-md text-center bg-red-400 text-red-1000">
                  {isError}
                </span>
              )}
              <input
                type="email"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Email address"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                value={userData.email}
                required
              />
              <input
                type="password"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Password"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                value={userData.password}
                required
              />
              <div className="flex items-center justify-between flex-wrap">
                {/* <label
                    htmlFor="remember-me"
                    className="text-sm text-gray-900 cursor-pointer"
                >
                    <input type="checkbox" id="remember-me" className="mr-2" />
                    Remember me
                </label>
                <Link to='#' className="text-sm text-blue-500 hover:underline mb-0.5">
                    Forgot password?
                </Link> */}
                <p className="text-gray-900 mt-4">
                  {" "}
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-sm text-blue-500 -200 hover:underline mt-4"
                  >
                    Signup
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
