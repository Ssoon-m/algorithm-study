
// 7개의 수가 배열로 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
// 예) [1,5,3,8,6,10,11]
const solution = (num) => {
  let answer, min = Number.MAX_SAFE_INTEGER;
  for(let i=0; i<num.length;i++){
    if(min > num[i]){
      min = num[i]
    }
    return answer = min
  }
}

console.log(solution([1,5,3,8,6,10,11]))