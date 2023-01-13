import React from "react";
import "./Type.css";

import { Helmet } from "react-helmet";

const Type = () => {

    return (
        <>

            <h1>I'm <span class="txt-type" data-wait="2500" data-words='["Ghoghari Nikunj", "Node js developer"]'></span><i class="fas fa-pencil-alt"></i></h1>

            <Helmet>
                <script src="./js/Type.js" type="text/javascript" />
            </Helmet>

        </>
    );

}

export default Type;