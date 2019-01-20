import React from 'react';
import Summary from './Summary.jsx';
import ReviewsList from './ReviewsList.jsx';
import style from '../style/style.css.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      restaurant_name: '',
      reviews_number: 0,
      rating: 0,
      delivery_rating: 0,
      order_rating: 0,
      num_of_reviews: {}
    }

  }

  componentDidMount() {

    const id = window.location.pathname.substring(13);

    fetch(`${id}/reviews`)
    .then(response => response.json())
    .then(data => {

      let restaurant_name = data[0]['restaurant_name'] || '';
      let reviews_number = data.length || 0;
      let rating = 0;
      let delivery_rating = 0;
      let order_rating = 0;
      let num_of_reviews = {};

      // calculate the summation of rating, delivery_rating and order_rating
      data.forEach(review => {
        rating += review['rating'] || 0;
        delivery_rating += review['delivery_rating'] || 0;
        order_rating += review['order_rating'] || 0;
        num_of_reviews[review['user_name']] = (num_of_reviews[review['user_name']]  || 0) + 1;
      });

      this.setState({
        reviews: data,
        restaurant_name: restaurant_name,
        reviews_number: reviews_number,
        rating: rating,
        delivery_rating: delivery_rating,
        order_rating: order_rating,
        num_of_reviews: num_of_reviews
      });

    })
    .catch(function(error) {
      console.log('Cant get the reviews from the server', error);
    });

  }

  render() {
    return (
      <div className="review-main" style={style.reviewMain}>
       <Summary restaurant_name={this.state.restaurant_name} reviews_number={this.state.reviews_number} rating={this.state.rating} delivery_rating={this.state.delivery_rating} order_rating={this.state.order_rating}/>
       <hr></hr>
       <ReviewsList reviews_number={this.state.reviews_number} reviews={this.state.reviews} num_of_reviews={this.state.num_of_reviews}/>
      </div>
    );
  }
}

export default Review;