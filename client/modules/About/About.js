import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div className={styles['about']}>
        <h1>Hello world!</h1>
        <h2>Hello world!</h2>
        <h3>Hello world!</h3>
        <h4>Hello world!</h4>
      </div>
    );
  }
}

export default About;

// const mapStateToProps = (state) => {
//   return {};
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };
//
// About.propTypes = {
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(About);
