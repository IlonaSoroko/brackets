module.exports = function check(str, bracketsConfig) {
  let open = [];
  let close = [];
  let exclusiveElements = [];
  let stack = [];
  let openIndex;
  let closeIndex;
  str = str.split('');

  bracketsConfig.forEach(element => {
    if (element[0] == element[1]) {
      exclusiveElements.push(element[0]);
    }
    else {
      open.push(element[0]);
      close.push(element[1]);
    }
  });

  for (let i = 0; i < str.length; i++) {
    if (exclusiveElements.includes(str[i])) {
      stack.push(str[i]);
      continue;
    }
    openIndex = open.indexOf(str[i]);
    if (openIndex !== -1) {
      stack.push(openIndex);
      continue;
    }

    closeIndex = close.indexOf(str[i]);
    if (closeIndex !== -1) {
      openIndex = stack.pop();
      if (openIndex !== closeIndex) {
        return false;
      }
    }
  }



  if (stack.length !== 0) {
    return false;
  }
  return true;
}
