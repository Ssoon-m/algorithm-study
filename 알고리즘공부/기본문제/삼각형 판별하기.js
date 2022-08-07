
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 "YES"
// 만들 수 없으면 "NO"를 출력한다.

const solution = (a,b,c) => {
  let max;
  const sum = a + b + c;
  if(a > b) max = a;
  else max = b;
  if(max < c) max = c;
  if((sum - max) >= max) return "YES"
  else return "NO"
}