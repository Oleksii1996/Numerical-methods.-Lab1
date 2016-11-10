// класс, описывающий заданные данные
function BasicData(a, b, n) {

    // отрезок, на котором необходимо найти приближение
    this.a = a, this.b = b;

    // количество отрезков, на которое будет разбито [a, b]
    this.n = n;

    // длинна каждого отрезка
    this.h = (this.b - this.a) / this.n;

    // points - узлы интерполирования, x - точки для построения графиков
    this.points = [], this.x = [];


    // подсчет узлов интерполирования, tmpX - хранит абсциссу каждой подсчитываемой точки
    var tmpX = this.a;

    this.points[0] = [];
    this.points[0].x = this.a;
    this.points[0].y = this.f(this.a);

    this.points[this.n] = [];
    this.points[this.n].x = this.b;
    this.points[this.n].y = this.f(this.b);

    for (var i = 1; i < this.n; i++) {
        tmpX += this.h;
        this.points[i] = [];
        this.points[i].x = tmpX;
        this.points[i].y = this.f(tmpX);
    }

    for (i = 0; i <= this.n+1; i++) {
        this.x.push(this.a + ((2*i - 1) / 2) * this.h);
    }
}

// заданная функция, для которой необходимо найти приближение
BasicData.prototype.f = function(x) {
    return Math.exp(x / 2) + 3.5 * this.cosh(x / 2);
}

// косинус гиперболический
BasicData.prototype.cosh = function (x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
}