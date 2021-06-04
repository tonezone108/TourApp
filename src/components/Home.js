import React, {Component} from 'react'
// import { Button } from "@material-ui/core";

class Home extends Component {


    state = {
        username: this.props.user.username,
        testProp: this.props.testProp
      };

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
                <p style={{ textAlign: 'center', margin: '20px' }}> Welcome to the home page {this.props.user.username}</p>               
                {/* <Button onClick={this.showTheState}>Click me to check state</Button> */}
                <p style={{ textAlign: 'center', margin: '20px', padding: '20px' }}> 
                <h1>Home</h1>
                This App is being converted into a Tour App
                </p>
            </div>
            
        )
    }
}

export default Home