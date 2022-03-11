function debouncingFun(fun, delay) {
    let timmer;
    return function () {
        clearTimeout(timmer);
       timmer= setTimeout(function() {
            getData()
        },delay)
    }
}

let fetchData = debouncingFun(getData, 500);
// apply fetchData function on eventLisenters to work