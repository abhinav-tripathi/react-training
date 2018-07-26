'use strict'

let colors = ['Green', 'Red', 'Blue'];
for (let i = 0; i <= colors.length; i++) {
        console.log(colors[i]);
}

////**********************************************************************

//function createIterator() {
//    let index = 0;
//    return {
//        next: function () {
//            let done = index > 2;
//            let value = !done ? index++ : undefined;
//            return { value: value, done: done };
//        }
//    }
//}

//let r = createIterator();
//console.log(r.next());
//console.log(r.next());
//console.log(r.next());
//console.log(r.next());

//let obj = {};
//obj[Symbol.iterator] = createIterator;

//for (let v of obj) {
//    console.log(v);
//}

////**********************************************************************
//function* createIterator() {
//    let i = 0;
//    while (i <= 3) {
//        yield i++;
//    }
//}

//let r = createIterator();
//console.log(r.next());
//console.log(r.next());
//console.log(r.next());
//console.log(r.next());
//console.log(r.next());

////**********************************************************************
//function* createIterator(items) {
//    items.forEach(function (item) {
//        yield item; // Syntex error.
//    }
//    );
//}

////**********************************************************Generator function expression
//let createIterator = function* (items) {
//    for (let it of items) {
//        yield it + 1;
//    }
//}

//let test = createIterator([1, 2, 3]);
//console.log(test.next());
//console.log(test.next());
//console.log(test.next());

////**********************************************************Generator object method
//let obj = {
//    createIterator: function* (...items) {
//        for (let it of items) { // for-of loop 
//            yield it + 1;
//        }
//    },

//    *createIterator1(...items) {
//        for (let it of items) {
//            yield it + 1;
//        }
//    }
//}

//let test = obj.createIterator1(2, 3, 4, 5);
//console.log(test.next());
//console.log(test.next());
//console.log(test.next());

////**********************************************************Creating iterables
//let marks = {
//    subjects: [],
//    [Symbol.iterator]: function* () {
//        for (let sub of this.subjects) {
//            yield sub;
//        }
//    }
//}

//marks.subjects.push(2);
//marks.subjects.push(4);
//marks.subjects.push(5);
//marks.subjects.push(6);

//for (let m of marks) {
//    console.log(m);
//}

////**********************************************************Built-in iterators
//let colors = ["red", "green", "blue"];
//let tracking = new Set([1234, 5678, 9012]);
//let data = new Map();

//data.set("title", "Understanding ECMAScript 6");
//data.set("format", "ebook");

//for (let value of colors.values()) {
//        console.log(value);
//}

//for (let value of tracking.keys()) {
//        console.log(value);
//}

//for (let value of data.keys()) {
//        console.log(value);
//}

////**********************************************************Destructuring for-of loop
//let data = new Map();
//data.set('title', 'thinking in core java');
//data.set('country', 'India');
//for (let [k, v] of data) {
//        console.log(`${k}-${v}`);
//}

////**********************************************************spread and non array iteratable
//let smallNums = [1, 2, 3];
//let bigNums = [101, 102, 103];
//let allNums = [0, ...smallNums, ...bigNums];
//console.log(allNums);

////**********************************************************Passings argument to iterators
//function* createIterator() {
//        let first = yield 1;
//        let second = yield first + 2;
//        yield second + 3;
//}

//let iterator = createIterator();
//console.log(iterator.next());
//console.log(iterator.next(8));
//console.log(iterator.next(2));

//function* fibonacci() {
//        var fn1 = 0;
//        var fn2 = 1;
//        while (true) {
//                var current = fn1;
//                fn1 = fn2;
//                fn2 = current + fn1;
//                var reset = yield current;
//                if (reset) {
//                        fn1 = 0;
//                        fn2 = 1;
//                }
//        }
//}

////**********************************************************Throwing exception iterators
//function* createIterator() {
//        let first = yield 1;
//        console.log(first);
//        let second;
//        try {
//                second = yield first + 2;
//        }
//        catch (err) {
//                second = 6;
//                //console.log('abc');
//        }

//        yield second + 3;
//}

//let test = createIterator();
//console.log(test.next());
//console.log(test.next(4));
//console.log(test.throw(new Error('error 5672')));
//console.log(test.next());

////**********************************************************Generator return statement
//function* createIterator() {
//        yield 1;
//        yield 5;
//        return 9;
//        yield 10;
//}

//let test = createIterator();
//console.log(test.next());
//console.log(test.next());
//console.log(test.next());
//console.log(test.next());

//// for-of ignore any value returned by return.

//let obj = {};
//obj[Symbol.iterator] = createIterator;
//for (let v of obj) {
//        console.log(v);
//}

////**********************************************************Delegating Generator
//function* numberGenerator() {
//        yield 3;
//        yield 6;
//        return 9;
//}

//function* colorGenerator() {
//        yield 'Red';
//        yield 'Green';
//        yield 'Blue';
//}

//function* repeatGenerator(count) {
//        for (let i = 0; i < count; i++) {
//                yield 'repeat';
//        }
//}

//function* combinedGenerators() {
//        yield* repeatGenerator(result);
//        yield* colorGenerator();
//        yield true;
//}

//let test = combinedGenerators();
//console.log(test.next());
//console.log(test.next());
//console.log(test.next());
//console.log(test.next());
//console.log(test.next());
//console.log(test.next());
//console.log(test.next());

////**********************************************************Delegating Generator
//function* createIterator() {
//        yield* 'hello';
//}

//let test = createIterator();
//console.log(test.next());
//console.log(test.next());
//console.log(test.next());
//console.log(test.next());
//console.log(test.next());
//console.log(test.next());