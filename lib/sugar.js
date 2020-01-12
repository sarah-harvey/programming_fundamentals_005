// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {

  let count = 0;
  for (let key in object) {
    count++;
  }
  return count;
}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  let smallest;
  for (let key in object) {
    const value = object[key];

    if (!smallest) {
      smallest = value;
    } else {
      if (value < smallest) {
        smallest = value;
      }
    }
  }

  return smallest;
  //var array =[4,3,2,9];
  // var currentMin = array[0]; 
  // for (var i = 0; i < array.length; i++) {
  //     if(array[i]<currentMin)
  //     {
  //         currentMin = array[i];
  //     }

  // }
  //   console.log(currentMin);
}


/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  let largest;
  for (let key in object) {
    const value = object[key];

    if (!largest) {
      largest = value;
    } else {
      if (value > largest) {
        largest = value;
      }
    }
  }

  return largest;
}


/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {

  const person1 = {
    name: "Sally",
    location: "Leeds"
  };
  const clonePerson1 = Object.assign({}, person1);

  return clonePerson1;

}



/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
  const person = 
    {
      name: "Sally",
      location: "Leeds"
    },
    value = object[key];
  for (let key in person) 

return value;
}


/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {

}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {

}

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) { }

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) { }

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) { }

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) { }

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) { }

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
