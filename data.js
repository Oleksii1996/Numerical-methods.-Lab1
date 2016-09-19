// класс, описывающий заданные данные
function BasicData() {

    // косинус гиперболический
    this.cosh = function (x) {
        return (Math.exp(x) + Math.exp(-x)) / 2;
    }

    // отрезок, на котором необходимо найти приближение
    this.a = 1.1, this.b = 5;

    // количество отрезков, на которое будет разбито [a, b]
    this.n = 7;

    // длинна каждого отрезка
    this.h = (this.b - this.a) / this.n;

    // узлы интерполирования
    this.points = [];


    // подсчет узлов интерполирования, tmpX - хранит абсциссу каждой подсчитываемой точки
    var tmpX = this.a;

    this.points[0] = [];
    this.points[0][0] = this.a;
    this.points[0][1] = this.f(this.a);

    this.points[this.n] = [];
    this.points[this.n][0] = this.a;
    this.points[this.n][1] = this.f(this.a);

    for (var i = 1; i < this.n; i++) {
        tmpX += this.h;
        this.points[i] = [];
        this.points[i][0] = tmpX;
        this.points[i][1] = this.f(tmpX);
    }
}

// заданная функция, для которой необходимо найти приближение
BasicData.prototype.f = function(x) {
    return Math.exp(x / 2) + 3.5 * this.cosh(x / 2);
}