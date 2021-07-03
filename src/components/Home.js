import React, { Component, Image } from 'react'
import cdg from '../images/cdg.jpg'
import castleupclose from '../images/castleupclose.jpg'
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
                {/* <p style={{ textAlign: 'center', margin: '20px', padding: '20px' }}>
                    <h1>Home</h1>
                    This App is being converted into a Tour App
                </p> */}
                <br></br>
                <img src={cdg} alt="this is car image" style={{ display: "block", margin: "auto", height: "400px", width: "1363.63px" }}/>
                {/* <Image
                    source={require('../images/cdg.jpg')}
                /> */}
                <p style={{ textAlign: 'left', margin: '20px' }}> Welcome to the home page {this.props.user.username}</p>
                <p style={{ textAlign: 'left', margin: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Pretium quam vulputate dignissim suspendisse in est ante in. Ultrices sagittis orci a scelerisque purus semper eget. 
                Vel pretium lectus quam id leo in vitae turpis massa. In tellus integer feugiat scelerisque varius morbi enim. Malesuada proin libero nunc consequat interdum varius sit amet mattis. 
                Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Duis at tellus at urna condimentum. Consectetur libero id faucibus nisl tincidunt eget nullam. 
                Egestas pretium aenean pharetra magna ac placerat. Fames ac turpis egestas integer eget aliquet. Amet consectetur adipiscing elit pellentesque habitant. 
                Id venenatis a condimentum vitae sapien.
                </p>
                {/* <Button onClick={this.showTheState}>Click me to check state</Button> */}
                <p style={{ textAlign: 'left', margin: '20px' }}> Some More Text {this.props.user.username}</p>
                <div style={{display: "flex"}}>
                <p style={{ textAlign: 'left', margin: '20px',}}>
                Semper eget duis at tellus at urna condimentum mattis pellentesque. 
                Malesuada bibendum arcu vitae elementum curabitur. 
                Condimentum vitae sapien pellentesque habitant morbi tristique. 
                Commodo nulla facilisi nullam vehicula ipsum. 
                Tortor posuere ac ut consequat semper viverra nam libero. 
                Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. 
                Cursus turpis massa tincidunt dui ut ornare lectus sit. Nisl nisi scelerisque eu ultrices vitae auctor. 
                Diam quis enim lobortis scelerisque. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. 
                Nulla posuere sollicitudin aliquam ultrices.

                Faucibus nisl tincidunt eget nullam non nisi est sit amet. 
                Egestas sed sed risus pretium quam vulputate dignissim. 
                Enim diam vulputate ut pharetra sit amet aliquam id diam. 
                Tortor pretium viverra suspendisse potenti nullam ac tortor. 
                Enim neque volutpat ac tincidunt vitae semper. Donec ac odio tempor orci dapibus. 
                Nec nam aliquam sem et tortor consequat id. Sagittis id consectetur purus ut faucibus. 
                Adipiscing diam donec adipiscing tristique risus nec. Dignissim convallis aenean et tortor. 
                Amet risus nullam eget felis. Pretium nibh ipsum consequat nisl vel pretium lectus. 
                Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque.
                </p>
                <img src={castleupclose} alt="this is car image" margin-left="auto" margin-right="auto" padding="20px" dispaly="flex" width="350px" height="350px"/>
                </div>
                
            </div>

        )
    }
}

export default Home