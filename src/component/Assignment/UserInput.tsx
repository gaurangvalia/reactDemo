
import React, { Component } from "react";

const UserInput = (props:any) => {

    return (
        <div>
            Enter Name : <input type="text"  onChange={props.getUserData}/>
        </div>
    )
}

export default UserInput