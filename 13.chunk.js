webpackJsonp([13],{111:/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/boilerplates/rxjs/codepan.js ***!
  \********************************************************************//*! dynamic exports provided *//*! all exports used */function(a){a.exports="/*\n  timer takes a second argument, how often to emit subsequent values\n  in this case we will emit first value after 1 second and subsequent\n  values every 2 seconds after\n*/\nconst source = Rx.Observable.timer(1000, 2000);\n//output: 0,1,2,3,4,5......\nconst subscribe = source.subscribe(val => console.log(val));\n"}});