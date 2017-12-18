var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles' ];

function addElementToBeginningOfArray(array, element){
  returnArray = [element, ...array];
  return returnArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  
  return array;
}

