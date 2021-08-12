//?Complete the function below to change the value of bottom right corner element to 'X'. Note: The change made should not affect the original array.

function changeToX(arr) {
  //write your code here.
  let newarr = [...arr];
  newarr[2][2] = "x";
  console.log(newarr);
  return newarr;
}
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
changeToX(arr);
