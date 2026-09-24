// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./App.css";
// import { BrowserRouter } from "react-router-dom";
// import Stairs from "./components/comman/stairs/Stairs.jsx";
// import NavContext from "./context/NavContext.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Stairs>
//         <NavContext>
//           <App />
//         </NavContext>
//       </Stairs>
//     </BrowserRouter>
//   </React.StrictMode>,
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
