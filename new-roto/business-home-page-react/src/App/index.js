import React, {component} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import "./index.css"
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';


function App(props){
    return (
        <div>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>

            {/* <Content></Content> */}
            
        </div>
    )
}

export default App;