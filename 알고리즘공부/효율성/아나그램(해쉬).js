const solution = (arr1, arr2) => {
  const obj1 = arr1.split('').reduce((acc, cur) => {
    acc[cur] = acc[cur] || 0;
    acc[cur]++;
    return acc;
  }, {});
  const obj2 = arr2.split('').reduce((acc, cur) => {
    acc[cur] = acc[cur] || 0;
    acc[cur]++;
    return acc;
  }, {});
  let flag = false;
  for (const [key, value] of Object.entries(obj1)) {
    if (obj1[key] !== obj2[key]) flag = true;
  }
  return flag ? 'NO' : 'YES';
};

const arr1 = 'AbaAeCe';
const arr2 = 'baeeACA';

console.log(solution(arr1, arr2));
