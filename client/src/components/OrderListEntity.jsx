import React from 'react';
import style from '../style/style.css.jsx';

class OrderListEntity extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        visible: false,
      };
    }

    handleAddToCart(e) {
        e.preventDefault();
        alert('will be added to bag');
    }

    onMouseEnter() {
        this.setState({
            visible: true
        });
    }

    onMouseLeave() {
        this.setState({
            visible: false
        });
    }
    
    render() {
        return (
        <div className="order-list-entity" style={style.orderListEntity} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
            {this.props.item['name'] + ' + '}
            {
                this.state.visible
                ?  <form className="tooltiptext" style={style.tooltiptext}>
                     <div style={style.tooltiptextHeader}><span style={style.userName}>{this.props.item['name']}</span><span>${this.props.item['price']}</span></div>
                     {
                        this.props.item['content'].length === 0?
                        ''
                        :
                        <div style={style.tooltiptextContent}>{this.props.item['content']}</div>
                     }
                     <input type="button" style={style.addToBag} value="Add to bag" onClick={this.handleAddToCart.bind(this)}/>
                  </form>
                :  ''
            }
        </div>
        );
    }
};

export default OrderListEntity;
