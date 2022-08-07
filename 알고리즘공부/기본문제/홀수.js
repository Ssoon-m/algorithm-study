
// 7개의 자연수가 배열로 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
// 고른 홀수들중 최솟값을 찾는 프로그램을 작성하세요.
// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는
// 77, 41, 53, 85 이므로 그 합은
// 77 + 41 + 53 + 85 = 256 이 되고
// 41 < 53 < 77 < 85
// 이므로 홀수들 중 최솟값은 41이 된다.

const solution = (arr) => {
  const answer =[];
  for(i=0; i<arr.length; i++){
    if(arr[i] % 2 !== 0){
      answer.push(arr[i])
    }
  }
  return answer
}

console.log("sum",solution([12,77,38,41,53,92,85]).reduce((acc,cur)=>{
  return acc + cur;
},0))
console.log("min",Math.min(...solution([12,77,38,41,53,92,85])))