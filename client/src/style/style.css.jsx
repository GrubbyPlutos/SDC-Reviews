const reviewMain = {
  padding: '30px',
  font: '16px Arial',
};

const percentageList = {
  display: 'inline-flex',
};

const percentage = {
  padding: '2px 10px 2px 10px',
  maxWidth: '65px',
};

const rating = {
  marginTop: '1px',
  fontSize: '13px',
  color: 'gray',
};

const percentageText = {
  fontSize: '13px',
  color: 'gray',
};

const reviewsListSorting = {
  padding: '8px 32px 8px 12px',
  fontSize: '16px',
  backgroundColor: '#fff',
  color: 'rgba(0,0,0,.87)',
  border: '2px solid rgba(0,0,0,.2)',
  WebkitAppearance: 'none', /* Removes default chrome and safari style */
  MozAppearance: 'none', /* Removes default style Firefox */
  backgroundPosition: '100% 50%',
  backgroundRepeat: 'no-repeat',
};

const downArrow = {
  height: '25px',
  width: '25px',
  position: 'relative',
  left: '-35px',
  top: '7px',
};

const reviewsListHeader = {
  padding: '6px',
  float: 'right',
  color: 'gray',
};

const reviewsListFooter = {
  textAlign: 'center',
};

const link = {
  color: 'blue',
  textDecoration: 'underline',
  padding: '5px',
  cursor: 'pointer',
};

const reviewsListEntity = {
  padding: '20px 0px 20px 0px',
};

const reviewDate = {
  color: 'gray',
  float: 'right',
  fontSize: '13px',
};

const reviewUser = {
  display: 'table',
  alignItems: 'center',
  padding: '10px',
};

const circle = {
  color: 'white',
  backgroundColor: '#40c2de',
  width: '40px',
  height: '40px',
  borderRadius: '40px',
  textAlign: 'center',
  fontSize: '20px',
  verticalAlign: 'middle',
  display: 'table-cell',
  padding: '5px',
};

const userName = {
  fontWeight: 'bold',
  paddingLeft: '10px',
};

const reviewsNum = {
  paddingLeft: '10px',
  fontSize: '14px',
  fontWeight: 'light',
};

const stars = {
  padding: '0px',
  display: 'inline-flex',
};

const star = {
  backgroundSize: '22px 22px',
  height: '22px',
  width: '22px',
};

const icon = {
  height: '20px',
  width: '20px',
  lineHeight: '1.45',
  paddingRight: '5px',
};

const userOrdered = {
  padding: '10px 5px 0px 5px',
  color: 'gray',
  fontSize: '14px',
};

const orderList = {
  display: 'inline-flex',
  marginTop: '8px',
};

const orderListEntity = {
  cursor: 'pointer',
  marginRight: '10px',
  padding: '8px',
  backgroundColor: 'rgb(235, 235, 235)',
};

const tooltiptext = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: '#fff',
  border: '1px solid rgba(0,0,0,.1)',
  boxShadow: '0 3px 9px rgba(0,0,0,.5)',
  borderRadius: '3px',
  width: '400px',
  height: '120px',
  padding: '10px 0px 0px 0px',
  position: 'absolute', /* Position the tooltip */
  transform: 'translateY(10px) translateX(-8px)',
  transition: '.25s ease-out',
  zIndex: 1,
};

const tooltiptextHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  padding: '5px 10px 0px 10px',
};

const tooltiptextContent = {
  padding: '10px 10px 0px 10px',
};

const addToBag = {
  color: 'white',
  backgroundColor: '#0070eb',
  height: '50px',
  textAlign: 'center',
  fontSize: '16px',
};

export default {
  reviewMain,
  percentageList,
  percentage,
  rating,
  percentageText,
  stars,
  star,
  reviewsListSorting,
  downArrow,
  reviewsListHeader,
  reviewsListFooter,
  link,
  reviewsListEntity,
  reviewDate,
  reviewUser,
  circle,
  userName,
  reviewsNum,
  icon,
  userOrdered,
  orderList,
  orderListEntity,
  tooltiptext,
  tooltiptextHeader,
  tooltiptextContent,
  addToBag,
};
