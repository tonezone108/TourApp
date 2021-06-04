import React, {Component} from 'react'
// import { Button } from "@material-ui/core";

class About extends Component {


    componentDidMount() {
        console.log(this.props.testProp)
        console.log(this.props.user.username)
      }



          // componentDidUpdate() {
    //     console.log(this.props.user)
    // }

    // showTheState() {
    //     console.log(this.props.user)
    // }


    render() {
        return (
            <div>
                {/* <p style={{ textAlign: 'center', margin: '20px' }}> Welcome to the home page {this.props.user.username}</p>        */}
                <p style={{ textAlign: 'center', margin: '20px' }}> Welcome to the About Page {this.props.user.username}</p>            
                {/* <Button onClick={this.showTheState}>Click me to check state</Button> */}
                <p style={{ textAlign: 'center', margin: '20px', padding: '20px' }}> 
                <h1>About</h1>
                This is the real about page
                </p>
            </div>
            
        )
    }
}

export default About