(function() {
    var lagr = new LagrPoly(1.1, 5, 7);
    var newton = new NewtonPoly(1.1, 5, 7);

    // рисуем графики
    var drawChart = function(lagr, newton, canvas) {
        google.charts.load("current", {packages:['corechart']});
        google.charts.setOnLoadCallback(drawC);

        var arr = [];
        for (var i = 0, len = this.x.length; i < len; i++) {
            arr.push([this.x[i], this.getLagrPoly(this.x[i])]);
        }

        function drawC() {
            var data = new google.visualization.DataTable();

            data.addColumn("number", "x");
            data.addColumn("number", "f(x)");
            data.addColumn("number", "Lagrang");
            data.addColumn("number", "Newton");

            data.addRows(arr);

            var options = {
                title: "",
                legend: "none",
                width: "95%",
                height: 400
            }

            var chart = new google.visualization.LineChart(canvas);
            chart.draw(data, options);
        }
    }

    drawChart(document.getElementById("forChart"));
})();