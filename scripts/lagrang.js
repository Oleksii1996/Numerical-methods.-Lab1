// класс, для построения интерполяционнго многочлена в форме Лагранжа
function LagrPoly(a, b, n) {

    // задаем наследование
    BasicData.apply(this, arguments);
}

// задаем наследование и сохраняем конструктор
LagrPoly.prototype = Object.create(BasicData.prototype);
LagrPoly.prototype.constructor = LagrPoly;

// построение многочлена Лагранжа и вычисление его значения в заданной точке
LagrPoly.prototype.getLagrPoly = function(x) {
    var tmp, result = 0;

    for (var i = 0, len = this.n; i < len; i++) {
        tmp = 1;
        for (var j = 0; j < len; j++) {
            if (i != j) {
                tmp *= (x - this.points[j].x) / (this.points[i].x - this.points[j].x);
            }
        }
        result += this.points[i].y * tmp;
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

        tr.innerHTML = "<td>" + this.points[i]["x"].toFixed(6) + "</td>" +
            "<td>" + this.f(this.points[i]["x"]).toFixed(6) + "</td>" +
            "<td>" + this.getLagrPoly(this.points[i]["x"]).toFixed(6) + "</td>" +
            "<td>" + (this.f(this.points[i]["x"]) - this.getLagrPoly(this.points[i]["x"])).toFixed(6) + "</td>";

        table.appendChild(tr);
    }

    tr = document.createElement("tr");
    tr.innerHTML = "<td>X<sub>j</sub></td><td>f(x)</td><td>L(x)</td><td>R(x)</td>";
    table.appendChild(tr);

    for (var i = 0, len = this.x.length; i < len; i++) {
        tr = document.createElement("tr");

        tr.innerHTML = "<td>" + this.x[i].toFixed(6) + "</td>" +
            "<td>" + this.f(this.x[i]).toFixed(6) + "</td>" +
            "<td>" + this.getLagrPoly(this.x[i]).toFixed(6) + "</td>" +
            "<td>" + (this.f(this.x[i]) - this.getLagrPoly(this.x[i])).toFixed(6) + "</td>";

        table.appendChild(tr);
    }
}