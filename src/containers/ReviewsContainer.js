import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'
import {addReview, deleteReview} from '../actions/index'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview}  restaurantId={this.props.restaurant.id}/>
      </div>
    )
  }
}



export default connect(state => ({reviews: state.reviews}), {addReview, deleteReview})(ReviewsContainer);
