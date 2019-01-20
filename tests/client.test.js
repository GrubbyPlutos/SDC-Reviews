import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewsList from '../client/src/Components/ReviewsList';
import sampleData from './sampleData';

configure({ adapter: new Adapter() });

describe('test', () => {
  let emptyObj;

  beforeEach(() => {
    emptyObj = {};

    let mostRecentReview = {
      id: 281,
      user_name: 'Carmen_Monahan',
      restaurant_name: 'Schmitt and Sons',
      rating: 2,
      delivery_rating: 2,
      order_rating: 5,
      update_date: '2018-12-17T08:00:00.000Z',
    };

  });

  it('ReviewsList component is exist', () => {
    const wrapper = shallow(<ReviewsList reviews_number={sampleData.length} reviews={sampleData} num_of_reviews={emptyObj} />);
    expect(wrapper).toHaveLength(1);  
  });

  it('ReviewsList component has all reviews saved reviews', () => {
    const wrapper = shallow(<ReviewsList reviews_number={sampleData.length} reviews={sampleData} num_of_reviews={emptyObj} />);
    let reviews = wrapper.state().ordered_reviews;
    expect(reviews).toEqual(sampleData);
  });

  it('ReviewsList component display first page by default', () => {
    const wrapper = shallow(<ReviewsList reviews_number={sampleData.length} reviews={sampleData} num_of_reviews={emptyObj} />);
    let page_num = wrapper.state().page_num;
    expect(page_num).toEqual(1);
  });

  it('ReviewsList component can change the rivews order by "Most recent"', () => {
    const wrapper = shallow(<ReviewsList reviews_number={sampleData.length} reviews={sampleData} num_of_reviews={emptyObj} />);
    wrapper.find('select').simulate('change', {target:{ value : 'Most recent'}} );
    expect(wrapper.state().ordered_reviews[0].id).toEqual(281);
  });

  it('ReviewsList component can change the rivews order by "Highest rated"', () => {
    const wrapper = shallow(<ReviewsList reviews_number={sampleData.length} reviews={sampleData} num_of_reviews={emptyObj} />);
    wrapper.find('select').simulate('change', {target:{ value : 'Highest rated'}} );
    expect(wrapper.state().ordered_reviews[0].rating).toEqual(5);
  });

});
