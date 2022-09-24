// 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램 작성
const solution = (n) => {
  let answer = '';
  const DFS = (n) => {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += String(n % 2);
    }
  };
  DFS(n);
  return answer;
};

let N = 11;
console.log(solution(N));
