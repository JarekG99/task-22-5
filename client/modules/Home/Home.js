import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
// import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to home page!</h1>
      </div>
    );
  }
}

export default Home;

// const mapStateToProps = (state) => {
//   return {};
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };
//
// Home.propTypes = {
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home);
