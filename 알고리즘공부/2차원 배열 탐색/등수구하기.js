// 1등이 3명이면 그 다음 학생은 4등이 된다.
// 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력

// 자기보다 큰 수가 몇개인지 판단하면 답이 나옴.
// 기준을 잘 잡자!!!
const solution = (arr) => {
  const answer = Array.from({length:arr.length},()=>1);
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(arr[i] < arr[j]) answer[i]++;
    }
  }
  return answer;
}

console.log(solution([90,90,100,100,76]))