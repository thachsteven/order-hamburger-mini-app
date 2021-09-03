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
              onClick={() => {
                this.props.addBreadItems(propsMenu, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
            {burger[propsMenu]}
            <button
              onClick={() => {
                this.props.addBreadItems(propsMenu, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
          </th>
          <th>{price}</th>
          <th>{burger[propsMenu] * price}</th>
        </tr>
      );
    });
  };

  render() {
    return (
      <div style={{ marginTop: '60px' }}>
        <h4 className="text-success text-center font-weight-bold">Chọn thức ăn</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th></th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderMenu()}</tbody>
          <tfoot>
            <tr>
              <th colSpan="2"></th>
              <th>Tổng cộng</th>
              <th>{this.props.total}</th>
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
