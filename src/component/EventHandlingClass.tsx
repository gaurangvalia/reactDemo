import React, { Component } from 'react'

type ShowingMessage = {
    showMessage : string;
}

export class EventHandlingClass extends Component<{},ShowingMessage> {

    constructor(props:ShowingMessage) {
        super(props)
        this.state = {
            showMessage: 'Hello all'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }


    private clickHandler() {
        this.setState(
            {
                showMessage:'good bye all!!'
            }
        )
    }

    /* --------- only click event handler----------------- */
    // private clickHandler() {
    //     console.log('class method click');
    //     console.log(this);
    // }

    render() {
        return (
            <div>
                <h2>{this.state.showMessage}</h2>
                {/* --------- only click event handler----------------- */}
                {/* <button onClick={this.clickHandler}>Click Class Method</button> */}

                {/* ---- first approach ---- */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click Class Method</button> */}

                {/* ---- Second approach ---- */}
                {/* <button onClick={()=> this.clickHandler()}>Click Class Method</button> */}
                
                {/* ---- third approach (React document) ---- */}
                <button onClick={this.clickHandler}>Click Class Method</button>
            </div>
        )
    }
}

export default EventHandlingClass
