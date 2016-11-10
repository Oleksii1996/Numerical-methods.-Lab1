//
function RMS(a, b, n, m) {
	if (m > n) {
		throw new Error("m > n !!!");
	} else {
		this.m = m;
	}

	BasicData.apply(this, arguments);
}

RMS.prototype = Object.create(BasicData.prototype);
RMS.prototype.constructor = RMS;

// нахождение наилучшего среднеквадратического отклонения
RMS.prototype.getRms = function(x) {
	var c = [], d = [], i = 0, j = 0, coefs, res = 0;

	debugger;
	for (i = 0; i < this.m; i++) {
		c[i] = [];
		for (j = 0; j < this.n; j++) {
			c[i][j] += Math.pow(this.points[j].x, i);
		}
	}

	console.log(c);

	for (i = 0; i < this.m; i++) {
		for (j = 0; j < this.n; j++) {
			d[i] += this.f(this.points[j].x) * Math.pow(this.points[j].x, i);
		}
	}

	coefs = this.solveSystem(c, d);

	for (i = 0; i < coefs.length; i++) {
		res += coefs[i] * Math.pow(x, i);
	}

	return res;
}

// решение СЛАУ
RMS.prototype.solveSystem = function(c, d) {
	var i = 0, j = 0, k = 0, len = c.length, res = [];

	for (i = 0; i < c.length; i++) {
		c[i].push(d[i]);
	}

	for (i = 0; i < len; i++){    
     	for (j = len; j >= i; j--){
	        c[i][j] = c[i][j] / c[i][i];  
     	}


     	for (k = i + 1; k < len; k++){
       		for (j = len; j >= i; j--){
         		c[k][j] -= c[i][j] * c[k][i];  
       		}  
     	}  
	}


	for (i = 0; i < len; i++){
         res[i] = c[i][len];
    }

    for (i = len - 2; i >= 0; i--){
        for (j = i + 1; j < len; j++){
            res[i] -= res[j] * c[i][j];   
        }
    }

	return res;
}

// заполняем таблицу
RMS.prototype.fillTable = function(table) {
    table.innerHTML = "<th colspan='4'>Наилучшее среднеквадратическое отклонение</th>";
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>Узлы интерполирования</td><td>f(x)</td><td>L(x)</td><td>R(x)</td>";
    table.appendChild(tr);

    for (var i = 0, len = this.points.length; i < len; i++) {
        tr = document.createElement("tr");

        tr.innerHTML = "<td>" + this.points[i]["x"].toFixed(6) + "</td>" +
            "<td>" + this.f(this.points[i]["x"]).toFixed(6) + "</td>" +
            "<td>" + this.getRms(this.points[i]["x"]).toFixed(6) + "</td>" +
            "<td>" + (this.f(this.points[i]["x"]) - this.getRms(this.points[i]["x"])).toFixed(6) + "</td>";

        table.appendChild(tr);
    }

    tr = document.createElement("tr");
    tr.innerHTML = "<td>X<sub>j</sub></td><td>f(x)</td><td>L(x)</td><td>R(x)</td>";
    table.appendChild(tr);

    for (var i = 0, len = this.x.length; i < len; i++) {
        tr = document.createElement("tr");

        tr.innerHTML = "<td>" + this.x[i].toFixed(6) + "</td>" +
            "<td>" + this.f(this.x[i]).toFixed(6) + "</td>" +
            "<td>" + this.getRms(this.x[i]).toFixed(6) + "</td>" +
            "<td>" + (this.f(this.x[i]) - this.getRms(this.x[i])).toFixed(6) + "</td>";

        table.appendChild(tr);
    }
}