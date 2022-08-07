
// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력.
// 정렬을 사용하면 안된다.

const solution = (a,b,c) => {
  let min;
  if(a < b) min = a;
  else min = b;
  if(min > c) min = c;
  return min;
}

console.log(solution(50,80,30))