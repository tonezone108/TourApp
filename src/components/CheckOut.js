import React, {Component} from 'react'
// import { Button } from "@material-ui/core";

class CheckOut extends Component {


    render() {
        return (
            <div>
                {/* <p style={{ textAlign: 'center', margin: '20px' }}> Welcome to the home page {this.props.user.username}</p>        */}
                <p style={{ textAlign: 'center', margin: '20px' }}> Welcome to the CheckOut Page</p>            
                {/* <Button onClick={this.showTheState}>Click me to check state</Button> */}
                <p style={{ textAlign: 'center', margin: '20px', padding: '20px' }}> 
                <h1>CheckOut</h1>
                This is the CheckOut page
                </p>
            </div>
            
        )
    }
}

export default CheckOut