// класс, для построения интерполяционнго многочлена в форме Ньютона
function NewtonPoly(a, b, n) {

    BasicData.apply(this, arguments);
}

NewtonPoly.prototype = Object.create(BasicData.prototype);
NewtonPoly.prototype.constructor = NewtonPoly;

// прямая интерполяционная формула Ньютона
NewtonPoly.prototype.getNewtonPoly = function(x) {
    var result = this.points[0].y, tmp, den;
    var i, j, k;
    for(i = 1; i < this.n; i++){
        tmp = 0;
        //следующее слагаемое полинома
        for(j = 0; j <= i; j++){
            den = 1;
            //считаем знаменатель разделенной разности
            for(k = 0; k <= i; k++){
                if (k != j) {
                    den *= this.points[j].x - this.points[k].x;
                }
            }
            //считаем разделенную разность
            tmp += this.points[j].y / den;
        }
        //домножаем разделенную разность на скобки (x-x[0])...(x-x[i-1])
        for(k = 0; k < i; k++) {
            tmp *= x - this.points[k].x;
        }
        //полином
        result += tmp;
    }
    return result;
}

// заполняем таблицу
NewtonPoly.prototype.fillTable = function(table) {
    table.innerHTML = "<th colspan='4'>Интерполяционный многочлен Ньютона</th>";
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>Узлы интерполирования</td><td>f(x)</td><td>L(x)</td><td>R(x)</td>";
    table.appendChild(tr);

    for (var i = 0, len = this.points.length; i < len; i++) {
        tr = document.createElement("tr");

        tr.innerHTML = "<td>" + this.points[i]["x"].toFixed(6) + "</td>" +
            "<td>" + this.f(this.points[i]["x"]).toFixed(6) + "</td>" +
            "<td>" + this.getNewtonPoly(this.points[i]["x"]).toFixed(6) + "</td>" +
            "<td>" + (this.f(this.points[i]["x"]) - this.getNewtonPoly(this.points[i]["x"])).toFixed(6) + "</td>";

        table.appendChild(tr);
    }

    tr = document.createElement("tr");
    tr.innerHTML = "<td>X<sub>j</sub></td><td>f(x)</td><td>L(x)</td><td>R(x)</td>";
    table.appendChild(tr);

    for (var i = 0, len = this.x.length; i < len; i++) {
        tr = document.createElement("tr");

        tr.innerHTML = "<td>" + this.x[i].toFixed(6) + "</td>" +
            "<td>" + this.f(this.x[i]).toFixed(6) + "</td>" +
            "<td>" + this.getNewtonPoly(this.x[i]).toFixed(6) + "</td>" +
            "<td>" + (this.f(this.x[i]) - this.getNewtonPoly(this.x[i])).toFixed(6) + "</td>";

        table.appendChild(tr);
    }
}