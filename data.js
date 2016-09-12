// заданная функция, для которой необходимо найти приближение
function f(x) {
    return Math.exp(x/2) + 3.5 * cosh(x/2);
}

// косинус гиперболический
function cosh(x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
}

// отрезок, на котором необходимо найти приближение
var a = 1.1, b = 5;

// количество отрезков, на которое будет разбито [a, b]
var n = 7;

// длинна каждого отрезка
var h = (b - a) / n;

// узлы интерполирования
var interpolationPoints = [];

// подсчет узлов интерполирования
(function() {
    // хранит абсциссу каждой подсчитываемой точки
    var tmpX = a;

    interpolationPoints[0] = [];
    interpolationPoints[0][0] = a;
    interpolationPoints[0][1] = f(a);

    interpolationPoints[7] = [];
    interpolationPoints[7][0] = a;
    interpolationPoints[7][1] = f(a);

    for (var i = 1; i < 7; i++) {
        tmpX += h;
        interpolationPoints[i] = [];
        interpolationPoints[i][0] = tmpX;
        interpolationPoints[i][1] = f(tmpX);
    }
})();