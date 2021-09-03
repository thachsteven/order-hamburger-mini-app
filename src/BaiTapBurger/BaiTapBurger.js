import React, { Component } from 'react';
import './BaiTapBurger.css';
import Burger from './Burger';
import Order from './Order';

export default class BaiTapBurger extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6  text-center">
            <h2 className="text-success">Bài tập Burger CyberSoft</h2>
            <Burger />
          </div>
          <div className="col-6">
            <Order />
          </div>
        </div>
      </div>
    );
  }
}
