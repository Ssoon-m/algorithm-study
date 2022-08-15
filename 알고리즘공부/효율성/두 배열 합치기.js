// 두 배열을 합쳐서 오름차순으로 정렬된 배열을 return 하라.

// 내가 푼 풀이
// const solution = (arr1, arr2) => {
//   return arr1.concat(arr2).sort((a, b) => a - b);
// };

// <<Two Pointers Algorithm>>
// 두개를 합쳐서 sort를 하는 접근법으로 생각하면 안된다.
// n개를 정렬하면 n x logn의 시간복잡도를 가진다.
// Two Pointers Algorithm은 for문 하나로 끝낼수 있다. 시간복잡도 O(2n)
const solution = (arr1, arr2) => {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
};

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];

console.log(solution(a, b));
