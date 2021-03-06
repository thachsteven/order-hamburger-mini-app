import React, { Component } from 'react';
import { connect } from 'react-redux';

class Order extends Component {
  renderMenu = () => {
    let { menu, burger } = this.props;

    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <th>{propsMenu}</th>
          <th>
            <button
              style={{ border: 'none', color: 'green', backgroundColor: 'transparent', fontSize: 20, outline: 'none' }}
              onClick={() => {
                this.props.addBreadItems(propsMenu, 1);
              }}
            >
              <i style={{ cursor: 'pointer' }} class="fa fa-plus-circle"></i>
            </button>
            {burger[propsMenu]}
            <button
              style={{ border: 'none', color: 'red', backgroundColor: 'transparent', fontSize: 20, outline: 'none' }}
              onClick={() => {
                this.props.addBreadItems(propsMenu, -1);
              }}
            >
              <i style={{ cursor: 'pointer' }} class="fa fa-minus-circle"></i>
            </button>
          </th>
          <th>{price}$</th>
          <th>{burger[propsMenu] * price}$</th>
        </tr>
      );
    });
  };

  render() {
    return (
      <div style={{ marginTop: '60px' }}>
        <h4 className="text-success text-center font-weight-bold">Choose Food</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Food</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{this.renderMenu()}</tbody>
          <tfoot>
            <tr>
              <th colSpan="2"></th>
              <th>Total:</th>
              <th style={{ color: 'red' }}>{this.props.total}$</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.BaiTapBurgerReducer.menu,
    burger: state.BaiTapBurgerReducer.burger,
    total: state.BaiTapBurgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBreadItems: (propsBurger, amount) => {
      const action = {
        type: 'ADD_BREAD_ITEMS',
        propsBurger,
        amount,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
