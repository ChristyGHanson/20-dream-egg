import React from "react";
import Navbar from "./Navbar";
// importing App.js variables.
export default function Header({page, setPage}){
    return(
        <div className="header">
            <h1>Christy Hanson</h1>
            <Navbar page={page} setPage={setPage}></Navbar>
        </div>
    );


}
