// // 알파벳 변환시 이동횟수를 구해주는 함수
// const upDownCount = (name, i) => {
//   const alpabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let count =
//     alpabet.indexOf(name[i]) < 13
//       ? alpabet.indexOf(name[i])
//       : 26 - alpabet.indexOf(name[i]);
//   return count;
// };

// // 연속된 A의 갯수를 세어주는 함수
// const repeatA = (name) => {
//   let count = 0;
//   for (let i = 0; i < name.length; i++) {
//     if (name[i] !== 'A') break;
//     count++;
//   }
//   return count;
// };

// const solution = (name) => {
//   let arr = [0];
//   let answer = 0; // 움직인 횟수를 계속 누적해서 더해줄 것이다.

//   for (let i = 0; i < name.length; i++) {
//     // 문자열을 순차적으로 조회하면서 A를 만나면 앞으로 갈지 뒤로갈지를 고민해야한다.
//     // 그래서 조회한 문자가 "A"일때와 아닐때로 나눈다.
//     if (name[i] === 'A') {
//       if (i === 0) arr.push(repeatA(name) - 1);
//       // 시작부터 A가 연속된다면 뒤로가는 것이 이득이다.
//       // 중간에 "A"를 만났을 때 A앞의 문자열의 길이보다 연속되는 A의 길이가 길다면 이득보는 횟수만큼이 arr에 push될 것이다.
//       else if (name[i - 1] !== 'A') arr.push(repeatA(name.slice(i)) - (i - 1));
//       answer++; // 기본적으로 우측으로 이동한 횟수를 더해주어야 한다. 마지막에 이득본 횟수만큼을 빼줄 것이기 때문.
//     }
//     //A가 아니면   알파벳 변환(위아래 이동한 수) + 우측 이동한 수
//     else answer += upDownCount(name, i) + 1;
//   }
//   //              Math.max(...arr)는 뒤로이동을 통해 최대로 이득을 본 횟수가 될 것이다.
//   return answer - Math.max(...arr) - 1;
//   // 마지막에 -1을 해주는 이유는 기본적으로 알파벳 변환을 해준뒤에 우측 이동한 수를 더해주는데,
//   // 마지막 알파벳을 변환할 때 우측으로 이동할 필요가 없기 때문에 -1을 해주는 것이다.
// };
function solution(name) {
  let answer = 0;
  //좌우 이동 값
  //최대로 많이 움직이는 경우는 길이만큼 이동이므로 길이값만큼 설정
  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    //아스키코드값 변환
    let tmp = name.charCodeAt(i);

    //78(N) 보다 작을 경우 그냥 카운트해준다.
    if (tmp < 78) {
      answer += tmp % 65;
    }
    //78보다 클경우 이전 알파벳이 더 빠르다.
    else {
      answer += 91 - tmp;
    }

    //좌우 이동 인덱스
    let nextIndex = i + 1;

    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65)
      nextIndex += 1;

    //BBBAAAAAABA인 경우는 다시 왼쪽으로 돌아가는 것이 더 빠르다.
    //처음 위치로 돌아간 횟수(i*2) + 문자열길이 - A가 연속으로 나오는 지점의 다음값
    min = Math.min(min, i * 2 + name.length - index);
    min = Math.min(min, (name.length - index) * 2 + i); // ✨ 바뀐 부분
  }
  answer += min;
  return answer;
}
console.log(solution('JEROEN'));
