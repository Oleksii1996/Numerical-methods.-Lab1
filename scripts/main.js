(function() {
    var lagr = new LagrPoly(1.1, 5, 7);
    var newton = new NewtonPoly(1.1, 5, 7);
    var rms = new RMS(1.1, 5, 7, 7);

    // рисуем графики
    var drawChart = function(lagr, newton, /*rms,*/ canvas) {
        google.charts.load("current", {packages:['corechart']});
        google.charts.setOnLoadCallback(drawC);

        var arr = [];
        for (var i = 0, len = lagr.x.length; i < len; i++) {
            arr.push([lagr.x[i], lagr.f(lagr.x[i]), lagr.getLagrPoly(lagr.x[i]), newton.getNewtonPoly(newton.x[i])/*, rms.getRms(rms.x[i])*/]);
        }
        //arr.push([10, lagr.f(10), lagr.getLagrPoly(10), newton.getNewtonPoly(10)]);

        function drawC() {
            var data = new google.visualization.DataTable();

            data.addColumn("number", "x");
            data.addColumn("number", "f(x)");
            data.addColumn("number", "Lagrang");
            data.addColumn("number", "Newton");
            //data.addColumn("number", "Rms");

            data.addRows(arr);

            var options = {
                title: "Графики",
                legend: {
                    0: "f(x)",
                    1: "Полином Лагранжа",
                    2: "Полином Ньютона",
                    //3: "Среднеквадратическое"
                },
                width: "100%",
                height: 400
            }

            var chart = new google.visualization.LineChart(canvas);
            chart.draw(data, options);
        }
    }

    document.getElementById("buildTableBtn").addEventListener("click", function() {
        document.getElementById("leftForm").style.visibility = "visible";
        lagr.fillTable(document.getElementById("lagrTable"));
        newton.fillTable(document.getElementById("newtonTable"));
        //rms.fillTable(document.getElementById("rmsTable"));
    });

    document.getElementById("drawChartBtn").addEventListener("click", function() {
        document.getElementById("rightForm").style.visibility = "visible";
        drawChart(lagr, newton, /*rms,*/ document.getElementById("forChart"));
    });

})();