import React from 'react';
import style from '../style/style.css.jsx';

const Percentage = (props) => (
  <div className="percentage" style={style.percentage}>
    <h3>{Math.round((props.rate/props.reviews_number)*20)}%</h3>
    <p className="percentage-text" style={style.percentageText}>{props.text}</p>
  </div>
);

export default Percentage;