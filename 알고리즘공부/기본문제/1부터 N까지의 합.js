
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

const solution = (n) => {
  let ans = 0;
  for(let i=1; i<=n; i++){
    ans += i
  }
  return ans
}
console.log(solution(10))