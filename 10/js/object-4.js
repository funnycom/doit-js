const bag = {
  type : "backpack",
  color : "blue",
  size : 15
}

for(key in bag) {
  console.log(`${key} : ${bag[key]}`);
}
