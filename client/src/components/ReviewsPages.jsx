import React from 'react';
import style from '../style/style.css.jsx';

const ReviewsPages = (props) => {
    let pages = [];
    let counter = 1;
    for (var i = 1; i <= props.reviews_number; i+=10) {
        pages.push(<span className={counter} key={i} id="link" style={style.link} onClick={props.changeReviewsPage}>{counter}</span>);
        counter++;
    }
    
  return (
  <div className="reviews-list-footer" style={style.reviewsListFooter}>
    <span className="-1" id="link" style={style.link} key="-1" onClick={props.changeReviewsPage}>Prev</span>
    {pages}
    <span className="0" id="link" style={style.link} key="0" onClick={props.changeReviewsPage}>Next</span>
  </div>
  );
};

export default ReviewsPages;