import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import EventHandlingDemo from "./component/eventHandlingDemo";
import EventHandlingClass from "./component/EventHandlingClass";
import ParentComponent from "./component/method-props/ParentComponent";
import UserOutput from "./component/Assignment/UserOutput";
import UserInput from "./component/Assignment/UserInput";

function App() {

  const [state, setstate] = useState({
    userDetail: [
      {
        name: 'Gaurang valia',
        age: 24
      },
      {
        name: 'Hiren Tandel',
        age: 30
      }
    ]
  })

  const changeEventHandler = (props: any) => {
    setstate({
      userDetail: [
        {
          name: props.target.value,
          age: 24
        },
        {
          name: 'Hiren Tandel',
          age: 30
        }
      ]
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* -------------------- based on function ------------------- */}
        {/* <EventHandlingDemo /> */}

        {/* -------------------- based on Class ------------------- */}
        {/* <EventHandlingClass /> */}

        {/* <ParentComponent /> */}
        <UserInput getUserData={changeEventHandler} />
        <UserOutput name={state.userDetail[0].name} age={state.userDetail[0].age} />
        <UserOutput name={state.userDetail[1].name} age={state.userDetail[1].age} />

      </header>
    </div>
  );
}

export default App;
