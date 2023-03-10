// import React from "react";
// import { Link, useHistory } from "react-router-dom";
// import transitions from "bootstrap";
// import './Header.scss'

// interface Props {
//   active: string;
//   setActive: (name: string) => void;
//   user: any;
//   handleLogout: () => void;
// }

// const Header: React.FC<Props> = ({ active, setActive, user, handleLogout }) => {
//   const userId = user?.uid;

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid bg-faded padding-media">
//         <div className="container padding-media">
//           <nav className="navbar navbar-toggleable-md navbar-light">
//             <button
//               className="navbar-toggler mt-3"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               data-bs-parent="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="true"
//               aria-label="Toggle Navigation"
//             >
//               <span className="fa fa-bars"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <Link to="/" style={{ textDecoration: "none" }}>
//                   <li
//                     className={`nav-item nav-link ${
//                       active === "home" ? "active" : ""
//                     }`}
//                     onClick={() => setActive("home")}
//                   >
//                     Home
//                   </li>
//                 </Link>
//                 <Link to="/blogs" style={{ textDecoration: "none" }}>
//                   <li
//                     className={`nav-item nav-link ${
//                       active === "blogs" ? "active" : ""
//                     }`}
//                     onClick={() => setActive("blogs")}
//                   >
//                     Blogs
//                   </li>
//                 </Link>

//                 <Link to="/create" style={{ textDecoration: "none" }}>
//                   <li
//                     className={`nav-item nav-link ${
//                       active === "create" ? "active" : ""
//                     }`}
//                     onClick={() => setActive("create")}
//                   >
//                     Create
//                   </li>
//                 </Link>

//                 <Link to="/about" style={{ textDecoration: "none" }}>
//                   <li
//                     className={`nav-item nav-link ${
//                       active === "about" ? "active" : ""
//                     }`}
//                     onClick={() => setActive("about")}
//                   >
//                     About
//                   </li>
//                 </Link>
//               </ul>
//               <div className="row g-3">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 {userId ? (
//                   <>
//                     <Link to={`/profile/${userId}`} style={{ textDecoration: "none" }}>
//                       <li className="nav-item nav-link">Profile</li>
//                     </Link>
//                     <li className="nav-item nav-link" onClick={handleLogout}>
//                       Logout
//                     </li>
//                   </>
//                 ) : (
//                   <>
//                     <Link to="/login" style={{ textDecoration: "none" }}>
//                       <li
//                         className={`nav-item nav-link ${
//                           active === "login" ? "active" : ""
//                         }`}
//                         onClick={() => setActive("login")}
//                       >
//                         Login
//                       </li>
//                     </Link>
//                     <Link to="/register" style={{ textDecoration: "none" }}>
//                       <li
//                         className={`nav-item nav-link ${
//                           active === "register" ? "active" : ""
//                         }`}
//                         onClick={() => setActive("register")}
//                       >
//                         Register
//                       </li>
//                     </Link>
//                   </>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   </nav>
  
// );
// };
// export default Header;