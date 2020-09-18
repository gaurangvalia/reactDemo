
import React from "react";

const UserOutput = (props:any) =>  {
        return (
            <div>
                <p> 
                    Hey, I'm {props.name} 
                </p>
                <p> 
                    I'm {props.age} year old
                </p>
            </div>
        )
}

export default UserOutput