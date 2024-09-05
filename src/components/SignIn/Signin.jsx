import React from "react";
import { useNavigate } from "react-router-dom";

function Signin() {


  const navigate = useNavigate()

  const goToDashboard = ()=>{

    console.log("navigation to dashboard");
    

    // Mock authentication by setting a flag in localStorage
    localStorage.setItem("auth", "true");

    navigate("/dashboard");
  }

  const goToSignup = ()=>{
    navigate("/signup")
  }

  return (
    <>
      <div className="w-screen h-screen relative flex lg:flex-row">
        {/* Background Image for Small Screens */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:hidden"
          style={{ backgroundImage: `url('src/assets/shiping.png')` }}
        ></div>

        {/* Image Section for Large Screens */}
        <div className="hidden lg:block lg:w-7/12">
          <img
            src="src/assets/shiping.png"
            className="h-full w-full object-cover lg:opacity-100"
            alt="Background"
          />
        </div>

        {/* Sign-in Section */}
        <div className="flex items-center justify-center w-full lg:w-5/12 h-full relative  lg:bg-opacity-0 lg:backdrop-blur-none  ">
          <div className="flex flex-col border border-slate-700  bg-white bg-opacity-90 p-6 rounded-lg gap-8">
            <div className="p-2">
              <div className="font-semibold text-2xl">Sign in</div>
              <div>Glad you're back!</div>
            </div>

            <div className=" flex flex-col gap-2 p-1">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="font-semibold text-lg">
                    Username or ID
                  </label>
                  <input
                    type="text"
                    placeholder="Type your name..."
                    className="p-1 border border-slate-400 rounded"
                  />
                  <label className="font-semibold text-lg">Password</label>
                  <input
                    type="text"
                    placeholder="Type your password..."
                    className="p-1 border border-slate-400 rounded"
                  />
                </div>

                <button className="bg-blue-500 rounded p-1 text-white hover:scale-105 hover:bg-blue-400" onClick={goToDashboard} >
                  Submit
                </button>
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember-me" className="h-4 w-4 hover:cursor-pointer" />
                <label htmlFor="remember-me" className="text-sm">
                  Remember me
                </label>
              </div>

              <div className="flex gap-1">
                <div>Need to Signup?</div>
                <div className="text-blue-500 underline hover:cursor-pointer" onClick={goToSignup} >Signup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
