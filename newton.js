// класс, для построения интерполяционнго многочлена в форме Ньютона
function NewtonPoly(a, b, n) {

    BasicData.apply(this, arguments);
}

NewtonPoly.prototype = Object.create(BasicData.prototype);

// прямая интерполяционная формула Ньютона
NewtonPoly.prototype.getNewtonPoly = function(x) {
    var result = this.points[0][1], tmp, den;
    var i, j, k;
    for(i=1; i < this.n; i++){
        tmp=0;
        //следующее слагаемое полинома
        for(j=0; j <= i; j++){
            den=1;
            //считаем знаменатель разделенной разности
            for(k=0; k <= i; k++){
                if (k != j) {
                    den *= this.points[j][0] - this.points[k][0];
                }
            }
            //считаем разделенную разность
            tmp += this.points[j][1] / den;
        }
        //домножаем разделенную разность на скобки (x-x[0])...(x-x[i-1])
        for(k=0; k < i; k++) {
            tmp *= x - this.points[k][0];
        }
        //полином
        result+=tmp;
    }
    return result;
}