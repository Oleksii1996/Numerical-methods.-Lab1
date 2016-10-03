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

// заполняем таблицу
LagrPoly.prototype.fillTable = function(table) {
    table.innerHTML = "<th colspan='4'>Интерполяционный многочлен Лагранжа</th>";
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>Узлы интерполирования</td><td>f(x)</td><td>L(x)</td><td>R(x)</td>";
    table.appendChild(tr);

    for (var i = 0, len = this.points.length; i < len; i++) {
        tr = document.createElement("tr");

        tr.innerHTML = "<td>" + this.points[i][0].toFixed(6).toString() + "</td>" +
            "<td>" + this.f(this.points[i][0]).toFixed(6).toString() + "</td>" +
            "<td>" + this.getLagrPoly(this.points[i][0]).toFixed(6).toString() + "</td>" +
            "<td>" + (this.f(this.points[i][0]) - this.getLagrPoly(this.points[i][0])).toFixed(6).toString() + "</td>";

        table.appendChild(tr);
    }

    tr = document.createElement("tr");
    tr.innerHTML = "<td>X<sub>j</sub></td><td>f(x)</td><td>L(x)</td><td>R(x)</td>";
    table.appendChild(tr);

    for (var i = 0, len = this.x.length; i < len; i++) {
        tr = document.createElement("tr");

        tr.innerHTML = "<td>" + this.x[i].toFixed(6).toString() + "</td>" +
            "<td>" + this.f(this.x[i]).toFixed(6).toString() + "</td>" +
            "<td>" + this.getLagrPoly(this.x[i]).toFixed(6).toString() + "</td>" +
            "<td>" + (this.f(this.x[i]) - this.getLagrPoly(this.x[i])).toFixed(6).toString() + "</td>";

        table.appendChild(tr);
    }
}