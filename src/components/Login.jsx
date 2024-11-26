// import React from "react";

// function Login() {
//   return (
//     <div className="section ">
//       <div className="bg-custom-light-blue text-black border h-screen ">
//         <div className=" p-5">
//           <img
//             src="Tanutra_Mobile_Logo.avif"
//             className="w-28 h-16 ml-[720px] ounded-t-xl cursor-pointer"
//             alt="logo"
//           />
//           <div className="w-[420px] h-96 mt-3 border ml-[530px] bg-white">
//             <p className="p-2 ml-5 mt-3 text-xl font-semibold">
//               Login to your supplier panel
//             </p>

//             <div className="p-3 ml-4">
//               <input
//                 className="w-[360px] h-[45px] border font-normal text-md rounded-md bg-white text-black pl-4"
//                 type="text"
//                 placeholder="Email Id or mobile number"
//               />
//               <input
//                 className="w-[360px] mt-8 h-[45px] border font-normal text-md rounded-md bg-white text-black pl-4"
//                 type="text"
//                 placeholder="Password"
//               />
//             </div>
//             <p className="ml-8 text-sm text-violet-900">
//                 Forgot password?
//             </p>

//           <div className="ml-8 mt-8">
//           <button
//             className="w-[356px] h-10 bg-gray-300 cursor-pointer text-white font-semibold rounded-md text-md "
//             type="button"
//           >
//             Log in
//           </button>
//           </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React from "react";

// function Login() {
//   return (
//     <div className="section">
//       <div className="bg-custom-light-blue border w-full h-screen items-center">
//         <div className="p-5">
//           {/* Logo centered and responsive */}
//           <img
//             src="Tanutra_Mobile_Logo.avif"
//             className="w-56 h-24 mx-auto  text-center rounded-t-xl cursor-pointer"
//             alt="logo"
//           />

//           {/* Login box with responsiveness */}
//           <div className=" max-w-lg h-[400px] mt-5 mx-auto border bg-white p-5">
//             <p className="text-xl font-semibold text-center">
//               Login to your supplier panel
//             </p>

//             <div className="mt-7 text-center">
//               {/* Password */}
//               <div className="flex items-center mt-4">
//                 <label
//                   className="font-semibold text-slate-800 w-1/3"
//                   htmlFor="password"
//                 >
//                   Username
//                 </label>
//                 <input
//                   className="w-full h-9 border rounded-md"
//                   type="text"
//                   id="username"
//                   name=""
//                 />
//               </div>
//               <div className="flex items-center mt-4">
//                 <label
//                   className="font-semibold text-slate-800 w-1/3"
//                   htmlFor="password"
//                 >
//                   Password
//                 </label>
//                 <input
//                   className="w-full h-9 border rounded-md"
//                   type="password"
//                   id="password"
//                   name="password"
//                 />
//               </div>
//             </div>

//             {/* Forgot password link */}

//             <div className="flex items-center justify-between mt-3">
//               <p className="text-sm text-violet-800 cursor-pointer font-semibold ml-6">
//                 Forgot password ?
//               </p>
//               <p className="text-sm text-violet-800 cursor-pointer font-semibold mr-5">
//                 Signup
//               </p>
//             </div>

//             {/* Login button */}
//             <div className="mt-8 text-center">
//               <button
//                 className="w-full md:w-[356px] h-10 bg-violet-600 cursor-pointer text-white font-semibold rounded-md text-md"
//                 type="button"
//               >
//                 Log in
//               </button>
//             </div>
//           </div>
//           <div className="text-center">
//             <p className="mt-5 opacity-60 text-base">New to Tanutra?</p>
//           </div>

//           <div className="text-center">
//             <button
//               className="w-full md:w-[356px] mt-3 h-10 border border-violet-700 cursor-pointer text-violet-800 font-semibold rounded-md text-md"
//               type="button"
//             >
//               Create your supplier account
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
  const navigate = useNavigate();

  return (
    <div 
      className="section" 
      style={{
        background: `
          radial-gradient(68.44% 68.44% at 11.68% 128.28%, rgba(31, 228, 160, 0.38) 0%, rgba(32, 228, 157, 0) 100%),
          radial-gradient(62.06% 62.06% at 56.94% 1.01%, rgba(33, 159, 248, 0.2) 0%, rgba(30, 159, 252, 0) 100%),
          radial-gradient(25.75% 98.99% at 94.13% 88.82%, rgba(181, 44, 232, 0.2) 0%, rgba(176, 36, 227, 0) 100%),
          linear-gradient(256.1deg, #f8f5f5, #d5ebf9 22.92%, #d5e9f5 38.54%, #fbf9e8 73.96%, #f0eded),
          radial-gradient(112% 112% at 50% -8.08%, #fff 0%, #e4f1fe 100%)`
      }}
    >
      <div className="flex items-center justify-center  w-full h-screen">
        <div className="p-5">
          {/* Logo centered and responsive */}
          <img
            src="Tanutra_Mobile_Logo.avif"
            className="w-56 h-24 mx-auto rounded-t-xl cursor-pointer"
            alt="logo"
          />

          {/* Login box with responsiveness */}
          <div className="max-w-lg h-[400px] mt-5 mx-auto border rounded-xl bg-white p-6">
            <p className="text-xl text-fuchsia-800 font-semibold text-center">
              Login to your supplier panel
            </p>

            <div className="mt-10 text-center">
              {/* Username */}
              <div className="flex items-center mt-4">
                <label
                  className="font-semibold text-slate-800 w-1/3 text-right pr-3"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="w-full h-9 border rounded-md"
                  type="text"
                  id="username"
                  name="username"
                />
              </div>
              {/* Password */}
              <div className="flex items-center mt-6">
                <label
                  className="font-semibold text-slate-800 w-1/3 text-right pr-3"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full h-9 border rounded-md"
                  type="password"
                  id="password"
                  name="password"
                />
              </div>
            </div>

            {/* Forgot password and Signup links */}
            <div className="flex items-center justify-between mt-3">
              <p className="text-sm text-violet-800 cursor-pointer font-semibold">
                Forgot password?
              </p>
              <p className="text-sm text-violet-800 cursor-pointer font-semibold"
               onClick={() => navigate("/Signup")}>
                Signup
              </p>
            </div>

            {/* Login button */}
            <div className="mt-8 text-center">
              <button
                className="w-full md:w-[356px] h-10 bg-green-500 cursor-pointer text-white font-semibold rounded-md text-md"
                type="button"
              >
                Log in
              </button>
            </div>
          </div>

          {/* Additional text */}
          <div className="text-center">
            <p className="mt-5 opacity-60 text-base">New to Tanutra?</p>
          </div>

          {/* Create account button */}
          <div className="text-center">
            <button
              className="w-full md:w-[356px] mt-3 h-10 border border-fuchsia-800 cursor-pointer text-fuchsia-800 font-semibold rounded-md text-md"
              type="button"
            >
              Create your supplier account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;




// import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate


// function Login() {
//   const navigate = useNavigate();

//   return (
//     <div className="section">
//       <div className="flex items-center justify-center bg-fuchsia-50 border w-full h-screen">
//         <div className="p-5">
//           {/* Logo centered and responsive */}
//           <img
//             src="Tanutra_Mobile_Logo.avif"
//             className="w-56 h-24 mx-auto rounded-t-xl cursor-pointer"
//             alt="logo"
//           />

//           {/* Login box with responsiveness */}
//           <div className="max-w-lg h-[400px] mt-5 mx-auto border bg-white p-6">
//             <p className="text-xl text-fuchsia-800 font-semibold text-center">
//               Login to your supplier panel
//             </p>

//             <div className="mt-10 text-center">
//               {/* Username */}
//               <div className="flex items-center mt-4">
//                 <label
//                   className="font-semibold text-slate-800 w-1/3 text-right pr-3"
//                   htmlFor="username"
//                 >
//                   Username
//                 </label>
//                 <input
//                   className="w-full h-9 border rounded-md"
//                   type="text"
//                   id="username"
//                   name="username"
//                 />
//               </div>
//               {/* Password */}
//               <div className="flex items-center mt-6">
//                 <label
//                   className="font-semibold text-slate-800 w-1/3 text-right pr-3"
//                   htmlFor="password"
//                 >
//                   Password
//                 </label>
//                 <input
//                   className="w-full h-9 border rounded-md"
//                   type="password"
//                   id="password"
//                   name="password"
//                 />
//               </div>
//             </div>

//             {/* Forgot password and Signup links */}
//             <div className="flex items-center justify-between mt-3">
//               <p className="text-sm text-violet-800 cursor-pointer font-semibold">
//                 Forgot password?
//               </p>
//               <p className="text-sm text-violet-800 cursor-pointer font-semibold"
//                onClick={() => navigate("/Signup")}>
//                 Signup
//               </p>
//             </div>

//             {/* Login button */}
//             <div className="mt-8 text-center">
//               <button
//                 className="w-full md:w-[356px] h-10 bg-fuchsia-800 cursor-pointer text-white font-semibold rounded-md text-md"
//                 type="button"
//               >
//                 Log in
//               </button>
//             </div>
//           </div>

//           {/* Additional text */}
//           <div className="text-center">
//             <p className="mt-5 opacity-60 text-base">New to Tanutra?</p>
//           </div>

//           {/* Create account button */}
//           <div className="text-center">
//             <button
//               className="w-full md:w-[356px] mt-3 h-10 border border-fuchsia-800 cursor-pointer text-fuchsia-800 font-semibold rounded-md text-md"
//               type="button"
//             >
//               Create your supplier account
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;






// import React from "react";

// function Login() {
//   return (
//     <div className="section">
//       <div className="bg-custom-light-blue text-black border rh-screen">
//         <div className="p-5">
//           {/* Logo centered and responsive */}
//           <img
//             src="Tanutra_Mobile_Logo.avif"
//             className="w-28 h-16 mx-auto text-center rounded-t-xl cursor-pointer"
//             alt="logo"
//           />

//           {/* Login box with responsiveness */}
//           <div className="w-full max-w-[420px] h-auto mt-5 border mx-auto bg-white p-5 rounded-lg shadow-lg">
//             <p className="text-xl font-semibold text-center">
//               Login to your supplier panel
//             </p>

//             <div className="mt-7 text-center">
//               <input
//                 className="w-full md:w-[360px] h-[45px] border font-normal text-md rounded-md bg-white text-black pl-4 mb-4"
//                 type="text"
//                 placeholder="Email Id or mobile number"
//               />
//               <input
//                 className="w-full md:w-[360px] mt-6 h-[45px] border font-normal text-md rounded-md bg-white text-black pl-4 mb-4"
//                 type="password"
//                 placeholder="Password"
//               />
//             </div>

//             {/* Forgot password link */}
//             <p className="text-sm text-violet-800 cursor-pointer font-semibold text-center mt-2">
//               Forgot password?
//             </p>

//             {/* Login button */}
//             <div className="mt-8 text-center">
//               <button
//                 className="w-full md:w-[356px] h-10 bg-violet-600 cursor-pointer text-white font-semibold rounded-md text-md"
//                 type="button"
//               >
//                 Log in
//               </button>
//             </div>
//           </div>

//           {/* New User Section */}
//           <div className="text-center">
//             <p className="mt-5 opacity-60 text-base">New to Tanutra?</p>
//           </div>

//           <div className="text-center">
//             <button
//               className="w-full md:w-[356px] mt-3 h-10 border border-violet-700 cursor-pointer text-violet-800 font-semibold rounded-md text-md"
//               type="button"
//             >
//               Create your supplier account
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
