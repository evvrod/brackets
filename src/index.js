module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i += 1) {
    console.log(isFirst(str[i], bracketsConfig));
    if (isFirst(str[i], bracketsConfig)) {
      if (isPare(stack[stack.length - 1], str[i], bracketsConfig)) {
        stack.pop();
      }
      else {
        stack.push(str[i]);
      }
    }
    else {
      if (stack.length === 0 || !isPare(stack[stack.length - 1], str[i], bracketsConfig)) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}

let isFirst = (a, bracketsConfig) => {
  for (let i = 0; i < bracketsConfig.length; i += 1) {
    if (bracketsConfig[i][0] === a) {
      return true;
    }
  }
  return false;
}

let isPare = (a, b, bracketsConfig) => {
  for (let i = 0; i < bracketsConfig.length; i += 1) {
    if (bracketsConfig[i][0] === a && bracketsConfig[i][1] === b) {
      return true;
    }
  }
  return false;
}