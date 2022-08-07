// 8 7 16 ,
// 5 14
// 13
// 5 7 8 13 14 16
//[5,3,2,11]
function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      answer.push(sum);
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}

console.log(solution([5, 3, 2, 11]))