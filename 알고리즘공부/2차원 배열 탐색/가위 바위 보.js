
// A가 이기면 A , B가 이기면 B, 비기면 D
// 1:가위 , 2:바위 , 3:보
// 2  1 => 2
// 3  2 => 3
// 3  1 => 1
const solution = (a,b) => {
  let result = [];
  const COUNT = a.length;
  for(let i=0; i<COUNT; i++){
    if(a[i]===b[i]) result.push('D')
    else if(a[i] === 1 && b[i] === 3) result.push('A')
    else if(a[i] === 2 && b[i] === 1) result.push('A')
    else if(a[i] === 3 && b[i] === 2) result.push('A')
    else result.push('B')
  }
  return result;
}
console.log(solution([2,3,3,1,3],[1,1,2,2,3]))
