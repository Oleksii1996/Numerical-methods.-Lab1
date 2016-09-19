// класс, для построения интерполяционнго многочлена в форме Лагранжа
function LagrPoly() {

    // задаем наследование
    BasicData.apply(this, arguments);
}

// задаем наследование
LagrPoly.prototype = Object.create(BasicData.prototype);

// построение многочлена Лагранжа и вычисление его значения в хаданной точке
LagrPoly.prototype.getLagrPoly = function(x) {
    var tmp = 1, result = 0;

    for (var i = 0; i < this.n; i++) {
        for (var j = 0; j < this.n; j++) {
            if (i != j) {
                tmp *= (x - this.points[j][0]) / (this.points[i][0] - this.points[j][0]);
            }
        }
        result += this.points[i][1]*tmp;
    }

    return result;
}