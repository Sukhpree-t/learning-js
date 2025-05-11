// Immediately Invoked Function Expressions (IIFE)        to avoid globle scope pollution   ()()

(function chai() {
    console.log(`DB Connected`);
})();                                      // for removing error explicitively add semi column becausecode editor not put it own to end

( (name) => {
    console.log(`DB Connected 2 ${name}`);
})('Sukhpreet');

