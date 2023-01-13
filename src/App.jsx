import React from "react";

import Home from "./Home";
import Client from "./Client";

const App = () => {

    return (
        <>

            <Home></Home>
            <Client></Client>
            <iframe src="./Files/contact.html" title='A youtube video on React hooks' style={{ margin:"40px" , width:"100%" , height:"100vh" , border:"none"}}></iframe>  
            

        </>
    );

}

export default App;
