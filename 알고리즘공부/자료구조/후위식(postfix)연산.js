const solution = (str) => {
  let result;
  let operator = ['+', '-', '*', '/'];
  const stack = [];
  for (let x of str) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  return stack[0];
};

// 3*(5+2)-9 를 후위연산식으로 표현하면
// 352+*9- 로 표현이 된다. 결과는 12
// 352+ => 5+2 === 7
// 37*9- => 3*7 === 21
// 21-9 = 12

// 5 + 3 => 53+
// 5 - 3 => 53-
let str = '352+*9-';
console.log(solution(str));
