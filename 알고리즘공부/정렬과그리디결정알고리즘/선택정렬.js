// N개의 숫자가 입력되면 오름차순으로 정렬하여
// 출력하는 프로그램을 작성하세요.
// (선택정렬을 이용!)

const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return arr;
};

// 전체의 배열 숫자중 제일 작은 숫자를 맨 앞으로 보낸다.
//
const arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
