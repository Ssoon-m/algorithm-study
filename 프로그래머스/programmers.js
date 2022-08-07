
let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];

// 효율성 통과 x
// function solution(participant, completion) {
//   let result = "";

//   for (let i = 0; i < participant.length; i++) {
//     let search = 0;
//     for (let j = 0; j < completion.length; j++) {
//       if (participant[i] === completion[j]) {
//         search++;
//       }
//       if (search > 1) break;
//     }
//     if (search >= 1) {
//       completion.splice(completion.indexOf(participant[i]), 1)
//     } else {
//       result = participant[i]
//     }
//   }
//   return result;
// }

// 효율성 통과 토드
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  return participant.find((el, index) => el !== completion[index]);
}

console.log(solution(participant, completion));