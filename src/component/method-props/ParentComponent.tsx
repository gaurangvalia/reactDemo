import React, { Component } from 'react';
import ChildComponent from "./ChildComponent";

type parentModel = {
    message: string;
}

export class ParentComponent extends Component<any, parentModel> {

    constructor(props: parentModel) {
        super(props)

        this.state = {
            message: 'Parent'
        }

        this.showingMessage = this.showingMessage.bind(this);
    }

    public showingMessage() {
        console.log(`hello ${this.state.message}`);
    }

    render() {
        return (
            <div>
                {/* <ChildComponent getHandler={this.showingMessage} /> */}
            </div>
        )
    }
}

export default ParentComponent
