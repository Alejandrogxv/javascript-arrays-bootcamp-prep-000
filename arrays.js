var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]


function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function addDestructiveElement(array,element){
  array.upshift(element);
  return array
}