// 11:05 AM
const getConvertedTime = (str) => {

    let [time, modifier] = str.split(" ");
    let [hours, min] = time.split(":");

    if (hours === '12') hours = 00;
    if (modifier === 'PM') hours = parseInt(hours) + 12
    return `${hours}:${min}`

}

console.log(getConvertedTime('11:05 AM'))
console.log(getConvertedTime('1:05 PM'))
console.log(getConvertedTime('3:11 PM'))
console.log(getConvertedTime('12:00 PM'))
console.log(getConvertedTime('12:00 AM'))