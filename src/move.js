['a', 'b', 'c'].forEach((e, i) => {
  window[`variable_${e}`] = i;
  // console.log(eval('variable_' + e));
});

console.log(variable_a);