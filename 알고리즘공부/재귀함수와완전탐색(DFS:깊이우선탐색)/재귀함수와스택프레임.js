// 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.
const solution = (n) => {
  const DFS = (L) => {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  };
  DFS(n);
};

let N = 3;
console.log(solution(N));
