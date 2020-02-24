
exports.min = function min (array) {
    
    if (array === undefined || array.length == 0 ) {
      return 0;
    }

    array.sort((a,b) => a - b );
    
    return array[0];
}

exports.max = function max (array) {

    if (array === undefined || array.length == 0 ) {
      return 0;
    }

    array.sort((a,b) => a - b);
    
    return array[array.length - 1];
}

exports.avg = function avg (array) {

    if (array === undefined || array.length == 0 ) {
      return 0;
    }

    let res = array.reduce((a,b) => a + b);
    let res1 = (res / (array.length )).toFixed(2);
    
    return res1;
}
