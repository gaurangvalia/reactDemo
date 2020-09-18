import React, { Component } from 'react'

export class EmployeeList extends Component {
    constructor(props: Readonly<{}>) {
        super(props)
    
        this.state = {
            employeeLists:[
                {
                    id:1,
                    name:'gaurang',
                    companyName:'1Rivet'
                },
                {
                    id:2,
                    name:'Hiren',
                    companyName:'1Rivet'
                },
                {
                    id:3,
                    name:'Nitesh',
                    companyName:'TCS'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {/* {this.state} */}
                    <li>hhjjk</li>
                </ul>
            </div>
        )
    }
}

export default EmployeeList
