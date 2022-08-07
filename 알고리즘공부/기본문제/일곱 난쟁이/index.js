const solution = (arr) => {
  let sum = arr.reduce((acc, cur)=>acc+cur, 0);
  let target = sum - 100;
  for(let i = 0; i < arr.length; i++){
    if((target - arr[i] !== arr[i]) && arr.includes(target - arr[i])){
      return arr.filter((item)=> !(item === target - arr[i] || item === arr[i]));
    }
  }
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));

