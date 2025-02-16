// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var results = [];

  _.each(numbers, function(number, idx, numbers) {
    if (number % 5 === 0) {
      results.push(number);
    }
  })
  return results.length;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  })
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  })
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    return desserts.type === 'cookie';
  })
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function(acc, price, idx, products) {
    var priceNum = products[idx].price.substring(1);
    return acc + parseFloat(priceNum);
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

  return _.reduce(desserts, function(accumulator, type, idx, desserts) {
    if (accumulator[desserts[idx].type] === undefined) {
      accumulator[desserts[idx].type] = 1;
    } else {
      accumulator[desserts[idx].type]++;
    }
    return accumulator;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  return _.reduce(movies, function(memo, releaseYear, idx, movies) {
    if (movies[idx].releaseYear >= 1990 && movies[idx].releaseYear <= 2000) {
      memo.push(movies[idx].title);
    }
    return memo;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var result = _.reduce(movies, function(memo, runtime, idx, movies) {
    if (movies[idx].runtime <= timeLimit) {
      memo.true++;
    } else {
      if (movies[idx].runtime > timeLimit) {
        memo.false++;
      }
    }
    return memo;
  }, { true: 0, false: 0 });

  if (result.true > 0) {
    return true;
  } else {
    return false;
  }
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  })
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var result = _.map(desserts, function(dessert, idx, desserts) {
    // if index of flour is -1
      //desserts idx key glutenFree is true
    //else
      //dessert idx key glutenFree is false

    if (dessert.ingredients.includes('flour')) {
      dessert.glutenFree = 'false';
    } else {
      dessert.glutenFree = 'true';
    }
    return dessert;
  });
  return result;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var result = _.map(groceries, function(item, idx, groceries) {
    var priceNum = Number(groceries[idx].price.substring(1));
    var percent = 1 - coupon;
    var saleNum = (priceNum * percent).toFixed(2);
    item.salePrice = '$' + saleNum;
    return item;
  });
  console.log(result)
  return result;
};
