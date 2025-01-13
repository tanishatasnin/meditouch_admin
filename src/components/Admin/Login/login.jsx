// // // import React from "react";
// // import "./Login.css";
// // import logo from "../../../assets/assets/images/logo2.png";

// // const Login = () => {
// //   return (
// //     <div className="login-container">
// //       <div className="login-box">
// //         <div className="logo">
// //           <img src={logo} alt="MediTouch Logo" className="logo" />  {/* Logo Image */}
// //         </div>
// //         <h2>Login to your account</h2>
// //         <form>
// //           <input
// //             type="email"
// //             placeholder="Email Address"
// //             className="login-input"
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="login-input"
// //           />
// //           <button type="submit" className="login-button">Login</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';  // Import react-router-dom for navigation
// import './App.css';

// function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();  // Hook to navigate to Dashboard after login

//   const handleLogin = () => {
//     // Example login logic - you can replace this with actual authentication logic
//     if (email === 'admin@example.com' && password === 'password') {
//       navigate('/dashboard');  // Redirect to Dashboard if credentials are correct
//     } else {
//       alert('Invalid credentials, please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)} // Update email state on input change
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)} // Update password state on input change
//       />
//       <button onClick={handleLogin}>Login</button>  {/* Trigger handleLogin on button click */}
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
import './Login.css'; // Importing the CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., authentication API call)
  };

  return (
    <div className="login-page">
      <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <h1><span>Med</span>Touch</h1>
        </div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
      </div>
  );
};

export default Login;
