const createAvg = (...arg) => {
    let numbers = arg.flat();
    let sum = 0;
    let devideNumber = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) { //숫자가 아니면
            numbers[i] = 0;
            devideNumber--;
        }
        // 숫자이면
        sum += numbers[i];
        devideNumber++;
    }

    return sum / devideNumber;
}

export default createAvg;