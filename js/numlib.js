/*

 * Numlib :: JS Library
 * Licensed under MIT License
 * Author: MizoPro © 2017
 * Version: 1.0.0 (Beta)

 */
 
function numlib(number) {
    return this.init(number);
}

numlib.fn = numlib.prototype = {
    init: function(a):
        return isNumber(number) ? number : null;
    },
    isNumber: function(n) {
        return isNumber(n);
    },
    // TODO gcd, lcm
    gcd: function() {
        var a = this;
        var numbers = [a] + arguments;
        return gcd(numbers);
    },
    lcm: function() {
        var a = this;
        var numbers = [a] + arguments;
        return lcm(numbers);
    },
    isPositive: function() {
        return this > 0;
    },
    isNegative: function() {
        return this < 0;
    },
    isNull: function() {
        return this === 0;
    },
    isEven: function() {
        return this % 2 === 0;
    },
    isOdd: function() {
        return this % 2 === 1;
    },
    pow: function(p) {
        return pow(this, p);
    },
    root: function(r) {
        return pow(this, ((r>0) ? 1/r : 1);
    },
    sqrt: function() {
        return sqrt(this);
    },
    sqr: function() {
        return sqr(this);
    },
    friends: function(b) {
        var a = this;
        return friends(a,b);
    },
    quarkPairs: function(b) {
        var a = this;
        return quarkPairs(a,b);
    },
    range: function(start, step) {
        if (isNotNumber(start)) start = 0;
        if (isNotNumber(step)) step = 1;
        var end = this,
            i;
        for (i = start ; i < end; i += step) {
            yield i;
        }
        //return true;
        //return range(start, end, step);
    },
    xrange: function() {
        var start = 0,
            step = 1;
        return this.range(start, step);
    },
    ed: function(b) {
    //Euclidean division ::: a = q*b + r
        var a = this,
            q = Math.floor(a/b),
            r = a%b;
        return [q,r];
    },
    div: function(b) {
        var a = this,
            q = Math.floor(a/b);
        return q;
    },
    mod: function(b) {
        var a = this,
            r = a%b;
        return r;
    },
    tripleTwins: function(a,b,c) {
        var a = this;
        return tripleTwins(a,b,c);
    }
}
