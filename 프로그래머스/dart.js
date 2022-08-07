// 옛날에 풀은거 2021 12? 쯤 풀은듯
function solution(dartResult) {
  var num = 0;
  var answer = [];
  var temp = 0;
  for (var i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      }
      else {
        temp = dartResult[i];
      }
    }
    else if (dartResult[i] === 'S') {
      answer.push(temp);
    }
    else if (dartResult[i] === 'D') {
      answer.push(Math.pow(temp, 2));
    }
    else if (dartResult[i] === 'T') {
      answer.push(Math.pow(temp, 3));
    }
    else if (dartResult[i] == '#') {
      answer[answer.length - 1] *= -1;
    }
    else if (dartResult[i] == '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
  }
  for (var i = 0; i < answer.length; i++) {
    num += Number(answer[i]);
  }
  return num;
}


// 2022 - 3월 6일날 풀은 문제
function solution(dartResult) {
  return dartResult.split("").reduce((acc, cur, i, array) => {
    if (parseInt(cur) || cur === '0') {
      if (array[i] === '1' && array[i + 1] === '0') {
        acc.number.push(10)
        array.splice(i + 1, 1);
        return { number: (acc.number), count: (acc.count += 1) };
      }
      acc.number.push(cur);
      return { number: (acc.number), count: (acc.count += 1) };
    } else {
      let index = acc.count - 1;
      switch (cur) {
        case 'S':
          acc.number[index] = Math.pow(acc.number[index], 1);
          return acc;
        case 'D':
          acc.number[index] = Math.pow(acc.number[index], 2);
          return acc;
        case 'T':
          acc.number[index] = Math.pow(acc.number[index], 3);
          return acc;
        case '*':
          acc.number = acc.number.map((x, i) => {
            if (i >= index - 1) {
              return x * 2
            } else {
              return x
            }
          });
          return acc;
        case '#':
          acc.number[index] = acc.number[index] * (-1)
          return acc;
      }
    }
  }, { number: [], count: 0 }).number.reduce((acc, cur) => {
    return acc + cur;
  });
}


// 다른 사람이 푼 문제...
function solution(dartResult) {
  const bonusMap = [``, `S`, `D`, `T`];
  const optionMap = {
    '*': 2,
    '#': -1
  };

  /**
   * 보너스 점수 계산 Single(S), Double(D), Triple(T)
   * @param bonusMap
   * @returns {function(*, *=)}
   */
  const bonusCheck = (bonusMap) => {
    return (data, str) => {
      const isBonus = bonusMap.indexOf(str);
      if (isBonus > 0) {
        const index = data.index;
        const currentNum = data.currentNum;
        data.points[index] = Math.pow(Number(currentNum), isBonus);
        data.explanation[index] = `${currentNum}^${isBonus}`;
      }
      return data;
    }
  };

  /**
   * 옵션 점수 계산
   * 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다.
   * 아차상(#) 당첨 시 해당 점수는 마이너스된다.
   * @param optionMap
   * @returns {function(*, *)}
   */
  const optionCheck = (optionMap) => {
    return (data, str) => {
      const index = data.index;
      const prev = index - 1;
      const option = optionMap[str];
      switch (str) {
        case '*':
          data.points[index] = data.points[index] * option;
          data.explanation[index] = `${data.explanation[index]}*${option}`;
          if (prev > -1) {
            data.points[prev] = data.points[prev] * option;
            data.explanation[prev] = `${data.explanation[prev]}*${option}`;
          }
          break;

        case '#':
          data.points[index] = data.points[index] * option;
          data.explanation[index] = `${data.explanation[index]}*(${option})`;
          break;
      }

      return data;
    }
  };

  /**
   * 현재 점수 체크
   * @param data
   * @param str
   */

  const currentNumCheck = (data, str) => {
    const num = Number(str);
    if (!isNaN(num)) {
      if (data.points[data.index]) {
        data.index++;
        data.currentNum = ``;
      }

      data.currentNum += str;
    }
  };

  /**
   * 점수 총합을 구하기 위해.
   * @param data
   * @param index
   * @param array
   */
  // 마지막 index인지 체크..
  const lastIndexCheck = (data, index, array) => {
    if (index >= array.length - 1) {
      data.answer = data.points.reduce((answer, num) => {
        return answer + num;
      }, 0);
    }
  };

  /**
   * String reduce 함수
   * @param bonusMap
   * @param optionMap
   * @returns {function(*=, *=, *=, *=)}
   */
  //1D2S0T
  const reduce = (bonusMap, optionMap) => {
    const bc = bonusCheck(bonusMap);
    const oc = optionCheck(optionMap);

    return (data, str, index, array) => {
      //숫자 체크
      currentNumCheck(data, str);
      //보너스 체크
      bc(data, str);
      //옵션 체크
      oc(data, str);
      //마지막 체크
      lastIndexCheck(data, index, array);

      return data;
    };
  };

  const getAnswer = reduce(bonusMap, optionMap);
  const data = {
    currentNum: ``,
    index: 0,
    points: [],
    explanation: [],
    answer: 0,
  };

  dartResult.split("").reduce(getAnswer, data);
  return data.answer;
}









// 위 다른사람의 코드를 절차지향으로 바꿔본 코드

function solution(dartResult) {
  const bonus = ['', 'S', 'D', 'T'];
  const options = { '*': 2, '#': -1 };
  return dartResult.split("").reduce((acc, cur, index, arr) => {
    if (!isNaN(Number(cur))) {
      if (acc.points[acc.index]) {
        acc.index++;
        acc.currentValue = '';
      }
      acc.currentValue += cur;
    }
    // 보너스 점수
    const bonusIndex = bonus.indexOf(cur);
    if (bonusIndex > 0) {
      acc.points[acc.index] = Math.pow(Number(acc.currentValue), bonusIndex);
    }
    // options
    switch (cur) {
      case "*":
        acc.points[acc.index] = acc.points[acc.index] * options[cur];
        if (acc.index - 1 >= 0) {
          acc.points[acc.index - 1] = acc.points[acc.index - 1] * options[cur];
        }
        break;
      case "#":
        acc.points[acc.index] = acc.points[acc.index] * options[cur];
        break;
    }
    // 마지막 합
    if (index >= arr.length - 1) {
      acc.answer = acc.points.reduce((acc, cur) => {
        return acc + cur;
      }, 0)
    }
    return acc;
  }, {
    index: 0,
    points: [],
    currentValue: '',
    answer: 0,
  }).answer;
}