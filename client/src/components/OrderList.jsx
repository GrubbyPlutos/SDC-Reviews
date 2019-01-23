import React from 'react';
import OrderListEntity from './OrderListEntity.jsx';
import style from '../style/style.css.jsx';

function parseOrderItems(props) {
    if (props.order_items.slice(2,props.order_items.length-2).split('').length === 0) {
        return [];
    } else {
        return props.order_items.slice(1,props.order_items.length-1).split(',');
    }
} 

function parseMenu(str) {
    let result = {};
    str = JSON.parse(str);
    for(let i = 0; i < str.length; i++) {
        result[str[i][0]] = {name: str[i][1], price: str[i][2], content: str[i][3]}
    }
    return result;
}

const OrderList = (props) => {
    const items = parseOrderItems(props);
    const menu = parseMenu(props.menu);
    for (let j = 0; j < items.length; j++) {
        items[j] = JSON.parse(items[j]);
    }
  return (
  <div>
    {
        items.length === 0
        ? ''
        :  <div>
            <div className="user-ordered" style={style.userOrdered}>
                {props.user_name + ' ordered:'}
            </div>
            <div className="order-list" style={style.orderList}>
                {items.map( item => {
                    console.log('this is in the array', item);
                    console.log(menu[item])
                   return <OrderListEntity key={item} item={menu[item]} value={item}/>
                })}
            </div>
          </div>
    }
  </div>
  );
};

export default OrderList;