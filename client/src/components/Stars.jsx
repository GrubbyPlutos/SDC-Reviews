import React from 'react';
import GoldStar from '../style/GoldStar.svg';
import GrayStar from '../style/GrayStar.svg';
import style from '../style/style.css.jsx';

const Stars = (props) => {
    let stars_filling_percentage = Math.round((props.rate/props.reviews_number)*20);
  return (
  <div className="stars" style={style.stars}>
  { stars_filling_percentage >= 10? <GoldStar style={style.star}/> : <GrayStar style={style.star}/>}
  { stars_filling_percentage >= 30? <GoldStar style={style.star}/> : <GrayStar style={style.star}/>}
  { stars_filling_percentage >= 50? <GoldStar style={style.star}/> : <GrayStar style={style.star}/>}
  { stars_filling_percentage >= 70? <GoldStar style={style.star}/> : <GrayStar style={style.star}/>}
  { stars_filling_percentage >= 90? <GoldStar style={style.star}/> : <GrayStar style={style.star}/>}
   </div>
  );
};

export default Stars;