import React from 'react';
import OrderList from './OrderList.jsx';
import Stars from './Stars.jsx';
import Cup from '../style/Cup.svg';
import BlueStar from '../style/BlueStar.svg';
import style from '../style/style.css.jsx';

const ReviewsListEntity = (props) => {
  return (
  <div className="reviews-list-entity" style={style.reviewsListEntity}>
    <div className="review-date" style={style.reviewDate}>
      {new Date(props.review.update_date).toLocaleDateString('en-US',{year: 'numeric', month: 'long', day: 'numeric' })}
    </div>
    <div className="review-user" style={style.reviewUser}>
      <div className="circle" style={style.circle}>
        {props.review.username.substring(0,1)}
      </div>
      <div>
        <div className="user-name" style={style.userName}>
          {props.review.user_name}
        </div >
        <div className="reviews-num" style={style.reviewsNum}>
        {
          props.num_of_reviews[props.review.user_name] > 4 ? 
          <span>
            <span><Cup style={style.icon}/></span>
            <span>Top reviewer</span>
          </span> : 
          <span>
            <span><BlueStar style={style.icon}/></span>
            <span>{props.num_of_reviews[props.review.user_name]}</span>
            <span>{props.num_of_reviews[props.review.user_name] < 2 ? ' review' : ' reviews'}</span>
          </span>
        }
        </div>
      </div>
    </div>
    <Stars reviews_number={1} rate={props.review.rating}/>
    <div>{props.review.content}</div>
    <OrderList user_name={props.review.user_name} order_items={props.review.order_items} menu={props.menu}/>
  </div>
  );
};

export default ReviewsListEntity;