const solution = (a, b, c) => {

  if (!(a >= 1 && a <= 6 && b >= 1 && b <= 6 && c >= 1 && c <= 6)) {
    return 0;
  }

  const sum = a + b + c;
  const sumOfSquares = a ** 2 + b ** 2 + c ** 2;
  const sumOfCubes = a ** 3 + b ** 3 + c ** 3;https://school.programmers.co.kr/learn/courses/30/lessons/181930#

  if (a === b && b === c) {
    // 세 숫자가 모두 같을 때
    return sum * sumOfSquares * sumOfCubes;
  } else if (a === b || b === c || a === c) {
    // 세 숫자 중 두 숫자가 같을 때
    return sum * sumOfSquares;
  } else {
    // 세 숫자가 모두 다를 때
    return sum;
  }
};

