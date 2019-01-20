import React from 'react';
import ReviewsListEntity from './ReviewsListEntity.jsx';
import ReviewsPages from './ReviewsPages.jsx';
import style from '../style/style.css.jsx';
import DownArrow from '../style/DownArrow.svg';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        ordered_reviews: this.props.reviews,
        rendering_order: 'Most recent',
        page_num: 1
    }

    this.changeReviewsOrder = this.changeReviewsOrder.bind(this);
    this.changeReviewsPage = this.changeReviewsPage.bind(this);
  }

  changeReviewsOrder(event) {
      // sort reviews according to selected order
      let order = event.target.value;
      let ordered_reviews = [];

      if (order === 'Most recent') {
        ordered_reviews = this.props.reviews.sort( (a,b) => {
            return new Date(b.update_date) - new Date(a.update_date);
        });
      } else if (order === 'Highest rated') {
        ordered_reviews = this.props.reviews.sort( (a,b) => {
            return b.rating - a.rating;
        });
      }

      this.setState({
          ordered_reviews: ordered_reviews,
          rendering_order: order,
          page_num: 1
      });
  }

  changeReviewsPage(event) {

      let value = parseInt(event.target.className);
      if (value === -1) {
        // user clicked prev if page number is less than 1 keep it 1
        if (this.state.page_num > 1) {
            value = this.state.page_num - 1;
        } else {
            // user on the first page cant go prev
            return;
        }
      } else if (value === 0) {
        // user clicked next if page number is more
        //  than (reviews_number / 10) keep it on that number
        if (this.state.page_num < (this.props.reviews_number / 10)) {
            value = this.state.page_num + 1;
        } else {
            // user on the last page cant go next
            return;
        }
      }

      this.setState({
        ordered_reviews: this.state.ordered_reviews,
        rendering_order: this.state.order,
        page_num: value
    });
    
  }

  render() {
    return (
      <div className="review-list">
        <div className="reviews-list-header" style={style.reviewsListHeader}>
            <span>Sort by: </span>
            <select className="reviews-list-sorting" style={style.reviewsListSorting} onChange={this.changeReviewsOrder}>
                <option value='Most recent'>Most recent</option>
                <option value='Highest rated'>Highest rated</option>
            </select>
            <DownArrow style={style.downArrow}/>
        </div>
        <br></br>
        <br></br>
        <div className="reviews-list-body">
            {
                /* display 10 reviews using the page_num attribute in the state as a referance */
                this.props.reviews.slice(this.state.page_num * 10 - 10, this.state.page_num * 10).map(review => (
                     <ReviewsListEntity review={review} key={review.id} num_of_reviews={this.props.num_of_reviews}/>
                     ))
            }
        </div>
        <br></br>
        <ReviewsPages reviews_number={this.props.reviews_number} changeReviewsPage={this.changeReviewsPage}/>
      </div>
    );
  }
}

export default ReviewsList;