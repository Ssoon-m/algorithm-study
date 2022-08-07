function solution(board, moves) {
  let temp = [];
  let overlapCount = 0;
  for (let move of moves) {
    for (let items of board) {
      if (items[move - 1] === 0) continue;
      temp.push(items[move - 1]);
      items[move - 1] = 0;
      break;
    }
  }
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] !== temp[i + 1]) continue;

    temp.splice(i, 2);
    overlapCount += 2;

    i -= 2;
    if (i < 0) i = -1;
  }
  return overlapCount;
}


















// const transpose = matrix =>
//   matrix.reduce(
//     (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
//     []
//   );

// const solution = (board, moves) => {
//   const stacks = transpose(board).map(row =>
//     row.reverse().filter(el => el !== 0)
//   );
//   const basket = [];
//   let result = 0;

//   for (const move of moves) {
//     const pop = stacks[move - 1].pop();
//     if (!pop) continue;
//     if (pop === basket[basket.length - 1]) {
//       basket.pop();
//       result += 2;
//       continue;
//     }
//     basket.push(pop);
//   }

//   return result;
// };