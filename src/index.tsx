import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./views/about/AboutPage";
import Home from "./views/home/Home";
import Projects from "./views/projects/Projects";

// export default function App() {

//   return (
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path="/" element={<Navbar />}>
//     //       <Route index element={<Home />} />
//     //       <Route path="home" element={<Home />} />
//     //       <Route path="projects" element={<Projects />} />
//     //       <Route path="about-me" element={<AboutPage />} />
//     //     </Route>
//     //   </Routes>
//     // </BrowserRouter>
//     {routes}
//   );
// }

const routes = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Navbar />,
  // },
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <Home />,
        index: true,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about-me",
        element: <AboutPage />,
      },
    ],
  },
  // {
  //   path: "/projects",
  //   element: <Projects/>
  // },
  // {
  //   path: "/about-me",
  //   element: <AboutPage/>
  // }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
  // <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
