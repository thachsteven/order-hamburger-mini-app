import React, { Component } from 'react';
import { connect } from 'react-redux';

class Burger extends Component {
  renderBurgerItems = () => {
    let { burger } = this.props;

    return Object.entries(burger).map(([propsBurger, value], index) => {
      let breadItems = [];

      for (let i = 0; i < value; i++) {
        breadItems.push(<div key={i} className={propsBurger}></div>);
      }
      return breadItems;
    });
  };

  render() {
    return (
      <div>
        <h3 className="text-danger font-weight-bold">Your Burger</h3>
        <div className="breadTop"></div>
        {this.renderBurgerItems()}
        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BaiTapBurgerReducer.burger,
  };
};

export default connect(mapStateToProps)(Burger);
