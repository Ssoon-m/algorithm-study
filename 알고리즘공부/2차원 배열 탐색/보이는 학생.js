// const solution = (arr) => {
//   let answer = 1;
//   for(let i=1; i<arr.length; i++){
//     if(arr[i] > arr[i-1]){
//       answer++;
//     } else{
//       for(let j=i+1; j<arr.length; j++){
//         if(arr[j] > arr[i-1]){
//           answer++;
//           i=j;
//           break;
//         } 
//       }
//     }
//   }
//   return answer;
// }
const solution = (arr) => {
  let answer = 1;
  let max = arr[0];
  for(let i=1; i<arr.length;i++){
    if(arr[i] > max){
      answer++;
      max = arr[i]
    }
  }
  return answer;
}
console.log(solution([130,135,148,140,145,150,150,153]))