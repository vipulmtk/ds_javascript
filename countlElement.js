const array = [15, 16, 17, 18, 19,15,15,15,17,17,17,17,17];

// through reduce method
const result = array.reduce((acc,val)=>({
...acc,
[val] : (acc[val] || 0) + 1
}),{}); 

// throught forEach method but one more variable needed
const count = {};
array.forEach((item)=>count[item] = (count[item] || 0) + 1)


console.log(count)