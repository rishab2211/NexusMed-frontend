import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();

    const goToSignin = ()=>{
        navigate("/signin")
    }

    const goToDashboard = ()=>{
        navigate("/dashboard");
    }

  return (
    <>
      <div className="w-screen h-screen relative flex lg:flex-row">
        {/* Background Image for Small Screens */}
        <div
          className="absolute inset-0 cover bg-center lg:hidden"
          style={{ backgroundImage: `url('src/assets/patientAbstract1.jpg')` }}
        ></div>

        {/* Image Section for Large Screens */}
        <div className="hidden lg:block lg:w-7/12">
          <img
            src="src/assets/patientAbstract2.png"
            className="h-full w-full object-cover p-28 lg:opacity-100"
            alt="Background"
          />
        </div>

        {/* Sign-in Section */}
        <div className="flex items-center justify-center w-full lg:w-5/12 h-full relative  lg:bg-opacity-0 lg:backdrop-blur-none  ">
          <div className="flex flex-col border border-slate-700  bg-white bg-opacity-90 p-6 rounded-lg gap-2">
            <div className="">
              <div className="font-semibold text-2xl">Sign up</div>
              <div>Glad you're back!</div>
            </div>

            <div className=" flex flex-col  p-1">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <label className="font-semibold ">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Type your first name..."
                    className="p-1 border border-slate-400 rounded"
                  />
                  <label className="font-semibold ">Last Name</label>
                  <input
                    type="text"
                    placeholder="Type your last name..."
                    className="p-1 border border-slate-400 rounded"
                  />
                  <label className="font-semibold ">Username</label>
                  <input
                    type="text"
                    placeholder="Type your username..."
                    className="p-1 border border-slate-400 rounded"
                  />
                  
                  <label className="font-semibold ">Password</label>
                  <input
                    type="text"
                    placeholder="Type your password..."
                    className="p-1 border border-slate-400 rounded"
                  />
                  <label className="font-semibold ">D.O.B</label>
                  <input
                    type="text"
                    placeholder="DD-MM-YY"
                    className="p-1 border border-slate-400 rounded"
                  />
                  <label className="font-semibold ">Address</label>
                  <input
                    type="text"
                    placeholder="Type your Address..."
                    className="p-1 border border-slate-400 rounded"
                  />
                  <label className="font-semibold ">Mobile Number</label>
                  <input
                    type="text"
                    placeholder="Type your Mobile no..."
                    className="p-1 border border-slate-400 rounded"
                  />
                  
                </div>

                <button className="bg-blue-500 rounded p-1 text-white hover:scale-105 hover:bg-blue-400" onClick={goToDashboard} >
                  Submit
                </button>
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2 m-2">
                <input type="checkbox" id="remember-me" className="h-4 w-4 hover:cursor-pointer" />
                <label htmlFor="remember-me" className="text-sm">
                  I agree to terms of service
                </label>
              </div>

              <div className="flex gap-1">
                <div>Already have an Account?</div>
                <div className="text-blue-500 underline hover:cursor-pointer" onClick={goToSignin} >Signin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
