import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./AuthContext";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import CakeContainer from "./Redux/CakeContainer";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Login from "./Login";
// import ReducerHook2 from "./UseReducer/ReduceHook2";
// import ReduceHook from "./UseReducer/ReduceHook";

function App() {
  return (
    // <Router>
    //   <AuthProvider>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/login" element={<Login />} />
    //     </Routes>
    //   </AuthProvider>
    // </Router>
    // <ReduceHook />
    // <ReducerHook2 />
    <Provider store={store}>
      <CakeContainer />
    </Provider>
  );
}

export default App;
