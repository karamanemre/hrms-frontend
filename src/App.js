import "./App.css";
import Dashboard from "./layouts/Dashboard";
import "semantic-ui-css/semantic.min.css";
import Navi from "./layouts/Navi";
import { Container } from "semantic-ui-react";
import Footer from "./layouts/Footer";
import Head from "./layouts/Head";
import "./Navi.css";
import "./Header.css";




function App() {
  return (
    <div className="App">
      <Navi ></Navi>
      
      
       <Dashboard className="dashBoard"></Dashboard>
      
      <Footer/>
    </div>
  );
}

export default App;
