//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// // ['  +-+', 
//     '    |', 
//     '+-+-+', 
//     '| | -', 
//     '+-+-+']


export function count(array) {

  if (array.length === 0) {
  return 0;
}
  
let indexArray = [];
let splitArray = [];
let rectangle = 0;

  
  for (let i = 0; i<array.length; i++) {
      for (let j = 0; j<array[i].length; j++) {
        if (array[i].charAt(j) === "+") {
          indexArray.push(j);
      }}}
 
  console.log("indexArray" ,indexArray)
  
if (indexArray.length===0) {
  return 0;
}

for (let k = 0; k<indexArray.length; k++) {
 if (indexArray[k] > indexArray[k+1]) { 
   splitArray.push(indexArray.splice(0, k+1))
   k = 0;
 }}
  
splitArray.push(indexArray);

for (let l = 0; l<splitArray.length; l++) {
        for(let m=0; m<splitArray[l].length; m++) { 
          for(let r = 1; r < splitArray[l].length; r++) {
          for (let n = 1; n<splitArray.length; n++) {
        for(let p=0; p<splitArray[n].length; p++) { 
          for (let q=1; q<splitArray[n].length; q++) {
          if (l < n) {
          if (splitArray[l][m] + splitArray[l][m+r] === splitArray[n][p]+splitArray[n][p+q]){
            rectangle++;
          }
        }}}}}}}

   for (let s = 0; s<array.length; s++) {
      for (let t = 0; t<array[s].length; t++) {
        if (array[s].charAt(t) === "+") {
          if (isNotRectangle(s,t)) {
            rectangle--;
          }
      }}}
  
    function isNotRectangle(num, index) {
        if (array[num - 1] === undefined) {
     if (array[num+1].charAt(index) !== "+" && array[num+1].charAt(index) !== "|" ) {
       return true;
     }}
       if (array[num + 1] === undefined) {
     if (array[num-1].charAt(index) !== "+" && array[num-1].charAt(index) !== "|" ) {
       return true;
     }}
       if (array[num + 1] !== undefined && array[num - 1] !== undefined) {
      if (array[num-1].charAt(index) !== "+" && array[num-1].charAt(index) !== "|" && array[num+1].charAt(index) !== "|" && array[num+1].charAt(index) !== "|") {
        return true
      }}
       return false }
  
console.log("rectangle", rectangle)
console.log("splitArray",splitArray) 
return rectangle;
};




