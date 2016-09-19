// класс, для построения интерполяционнго многочлена в форме Лагранжа
function LagrPoly(a, b, n) {

    // задаем наследование
    BasicData.apply(this, arguments);
}

// задаем наследование
LagrPoly.prototype = Object.create(BasicData.prototype);

// построение многочлена Лагранжа и вычисление его значения в заданной точке
LagrPoly.prototype.getLagrPoly = function(x) {
    var tmp, result = 0;

    for (var i = 0, len = this.n; i < len; i++) {
        tmp = 1;
        for (var j = 0; j < len; j++) {
            if (i != j) {
                tmp *= (x - this.points[j][0]) / (this.points[i][0] - this.points[j][0]);
            }
        }
        result += this.points[i][1] * tmp;
    }

    return result;
}