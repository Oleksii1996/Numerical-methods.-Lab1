//
function NewtonPoly(a, b, n) {

    BasicData.apply(this, arguments);
}

NewtonPoly.prototype = Object.create(BasicData.prototype);

// прямая интерполяционная формула Ньютона
NewtonPoly.prototype.getNewtonPoly = function(x) {
    var q = (x - this.points[0][0]) / this.h, result = 0;


}

// факториал числа
NewtonPoly.prototype.factorial = function(n) {
    if (n < 0) {
        return undefined;
    }
    if (n === 0) {
        return 1;
    }

    var result = 1;
    n.toFixed(0);
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// факториал с заданным количеством итераций
NewtonPoly.prototype.factorial = function(n, countIterations) {
    var result = 1;
    for (var i = 0; i < countIterations; i++) {
        result *= (n - i);
    }
    return result;
}

//
NewtonPoly.prototype.combinations = function(n, m) {

}