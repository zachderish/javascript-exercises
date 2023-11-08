const sumAll = function() {
    start = arguments[0];
    end = arguments[1];
    if (end < start) {
        start = arguments[1];
        end = arguments[0];
    }
    console.log(start, end);
    sum = 0;
    if (typeof(end) != "number" || typeof(start) != "number" || start < 0 || end < 0) {
        return 'ERROR';
    }

    while (start <= end) {
        sum += start;
        start++;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
