const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'c heese',amount:1},{name:'beef',amount:1}]

  menu: { salad: 10, cheese: 20, beef: 55 },

  total: 85,
};

const BaiTapBurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case 'ADD_BREAD_ITEMS':
      {
        if (action.amount === -1 && state.burger[action.propsBurger] < 1) {
          return { ...state };
        }
        let burgerUpdate = { ...state.burger };
        burgerUpdate[action.propsBurger] += action.amount;
        state.burger = burgerUpdate;
        //Tính tổng tiền
        state.total += action.amount * state.menu[action.propsBurger];
        return { ...state };
      }
      break;
    default:
      return { ...state };
  }
};

export default BaiTapBurgerReducer;
