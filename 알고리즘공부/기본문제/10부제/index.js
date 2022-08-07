
const solution = (day,arr) => {
  let ans = 0;
  for(let i=0; i<arr.length; i++){
    if(day === arr[i] % 10){
      ans++;
    }
  }
  return ans;
}


let arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0,arr))