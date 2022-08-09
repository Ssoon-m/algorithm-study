// Input: strs = ["flower","flow","flight"]
// Output: "fl"

//https://leetcode.com/problems/longest-common-prefix/submissions/
const solution = (arr) => {
  const overlapObj = {};
  const cri = arr[0];
  let result = '';
  if (arr.length === 1) return arr[0];
  for (let i = 1; i < arr.length; i++) {
    let temp = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (cri.indexOf(arr[i][j], j) === j) {
        if (overlapObj[arr[i][j]]) overlapObj[arr[i][j]]++;
        else overlapObj[arr[i][j]] = 1;
      } else {
        break;
      }
    }
  }
  let temp = '';
  console.log(overlapObj);
  for (const [key, value] of Object.entries(overlapObj)) {
    if (value === arr.length - 1) result += key;
    else if (value >= arr.length) result += temp.padEnd(value, key);
  }
  return result;
};

console.log(solution(['aaa', 'aa', 'aaa']));
