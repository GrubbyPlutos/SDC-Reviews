const faker = require('faker');
const fs = require('fs');
const restaurantWriter = fs.createWriteStream('restaurant.tsv');
// const reviewWriter = fs.createWriteStream('100reviews.tsv');


const menu = [
  [1, 'bread', 4.5, ''],
  [2, 'soup', 1.5, 'chicken, peas, carrot, onion'],
  [3, 'california roll', 12, 'Masago, crabmeat, cucumber and avocado'],
  [4, 'B.L.T. Sandwich', 9.75, 'Bacon, lettuce and tomatoes'],
  [5, 'Veggie Burger', 8, 'Served on a toasted bun with coleslaw and pickles'],
];

// function to get random elements from menu array
function getRandomMenuItems() {
  let result = {};
  const randomNum = faker.random.number({'min': 0,'max': 3});
  for (let i = 0; i < randomNum; i++) {
    result[faker.random.number({'min': 1,'max': menu.length})] = '';
  }
  return Object.keys(result);
}


const createRestaurant = (count) => {
  const name = faker.company.companyName();
  const restMenu = JSON.stringify(menu);
  return (`${count}\t'${name}'\t${restMenu}`);
};

let counter = 1;

const createRestaurantData = () => {
  let result = true;
  const entries = 1e7;
  while (counter <= entries && result) {
    result = restaurantWriter.write(createRestaurant(counter) + '\n');
    counter += 1;
    if (counter % 100000 === 0) {
      console.log(counter);
    }
  }
  if (counter < entries) {
    restaurantWriter.once('drain', createRestaurantData);
  } else if (counter === entries) {
    counter = 0;
    restaurantWriter.end();
  }
};

createRestaurantData();

// const createReview = (count) => {
//   let day = faker.date.between('2018-1-01', '2019-01-01').toLocaleDateString('en-US').split('/').join('-');
//   day = "2018-" + day.substr(0, day.length-5);
//   let userName = JSON.stringify(faker.internet.userName())
//   let restaurantId = faker.random.number({'min': 5001, 'max': 155000});
//   let content = JSON.stringify(faker.lorem.sentences())
//   let orderItems = JSON.stringify(getRandomMenuItems());
//   let rating = Math.floor(Math.random() * (4)) + 1;
//   let deliveryRating = Math.floor(Math.random() * (4)) + 1;
//   let orderRating = Math.floor(Math.random() * (4)) + 1;
  
    
//   return `${count}\t${userName}\t${restaurantId}\t${content}\t${orderItems}\t${rating}\t${deliveryRating}\t${orderRating}\t${day}\n`;
// };

// const createReviewData = () => {
//   let result = true;
//   const entries = 20000000;
//   while (counter < entries && result) {
//     result = reviewWriter.write(createReview(counter));
//     counter += 1;
//     if (counter % 100000 === 0) {
//       console.log(counter);
//     }
//   }
  
//   if (counter < entries) {
//     reviewWriter.once('drain', createReviewData);
//   } else if (counter === entries) {
//     counter = 0;
//     reviewWriter.end();
//   }
// };

// createReviewData();


// let restaurantId = faker.random.number({'min': 1,'max': 10000000})
//   let content = JSON.stringify(faker.lorem.sentences())
//   let orderItems = JSON.stringify(getRandomMenuItems());
//   let rating = faker.random.number({'min': 1,'max': 5})
//   let deliveryRating = faker.random.number({'min': 1,'max': 5})
//   let orderRating = faker.random.number({'min': 1,'max': 5})