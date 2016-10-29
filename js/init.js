(function(){

    var inputRangeFirst = new ConstrInputRange({
        input : document.querySelector('.first_block input[type="range"]'),
        valueElement : document.querySelector('.first_block .value'),
        colorDefault : '#fff',
        colorSelect  : '#25c5cc',
        min : 0,
        max : 400,
        step : 1,
        value : 200,
        content : '+'
    }),

    inputRangeLast = new ConstrInputRange({
        input : document.querySelector('.last_block input[type="range"]'),
        valueElement : document.querySelector('.last_block .value'),
        colorDefault : '#fff',
        colorSelect  : '#25c5cc',
        min : 0,
        max : 4000,
        step : 1,
        value : 3000,
        content : '+'
    });

})();