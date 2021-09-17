// 섭씨 온도 = (화씨온도 - 32) / 1.8
// 섭씨 : celsius, 화씨 : fahrenheit

let fahrenheit = parseFloat(prompt("변환할 화씨 온도"));
let celsius;

celsius = ((fahrenheit - 32) / 1.8).toFixed(1);
document.write(`화씨 ${fahrenheit}˚F -> 섭씨 ${celsius}˚C`);
