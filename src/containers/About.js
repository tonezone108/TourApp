import { connect } from "react-redux";
import About from "../components/About";
// import {login, signUp} from "../redux/actions"; IMPORT FUTURE ACTIONS HERE

// const mapStateToProps = state => {
//   return {
//     user: state.user,
//     testProp: state.testProp,
//   };
//   };

const mapStateToProps = state => {
  return {
    user: state.user,
    testProp: state.testProp,
  };
  };
  

// const mapDispatchToProps = (dispatch) => { DISPATCH FUTURE ACTIONS HERE
//     return {
//         login: (user) => dispatch(login(user)),
//         signUp: (user) => dispatch(signUp(user)),
//     };
// }

export default connect(mapStateToProps)(About);