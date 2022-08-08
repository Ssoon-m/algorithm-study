
// 연속으로 답이 맞을 땐 1점씩 더해 간다.
// 틀린 문제는 0점으로 계산

// const solution = (arr) => {
//   let result = 0;
//   for(let i=0;i<arr.length;i++){
//     if(arr[i] === 1){
//       result++;
//       i++;
//       let r = 1;
//       while(arr[i] !== 0){
//         r++;
//         result += r;
//         i++;
//       }
//     }
//   }
//   return result;
// }
const solution = (arr) => {
  let result = 0;
  let cnt = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i] === 1){
      cnt++;
      result += cnt;
    }else{
      cnt = 0;
    }
  }
  return result;
}

console.log(solution([1,0,1,1,1,0,0,1,1,0]))