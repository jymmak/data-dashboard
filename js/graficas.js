window.addEventListener('load', function() {
// cambiar el nombre de sede, seleccionando la generacion
  var selectSprint = document.getElementById('select-sprint');
  selectSprint.addEventListener('change', function() {
    var site = selectSprint.options[selectSprint.selectedIndex].getAttribute('data-site');
    var sede = selectSprint.options[selectSprint.selectedIndex].getAttribute('data-sede');
    var generation = selectSprint.value;  
    document.getElementById('site').textContent = site;

    var inscritas = document.querySelector('.total-enrollment');


    // GOOGLE-CHARTS
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChartEnrollment);
    google.charts.setOnLoadCallback(drawChartAchievement);
    // 1era gráfica de alumnas inscritas
    function drawChartEnrollment() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['active', studentSedes(sede, generation)[0]],
        ['inactive', studentSedes(sede, generation)[1]],
      ]);
      var options = {'title': 'Students',
        'width': 250,
        'height': 150,
        'is3D': false
      };
      var chart = new google.visualization.PieChart(document.getElementById('enrollment-graph'));
      chart.draw(data, options);
    }

    function drawChartAchievement() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Cantidad');
      data.addRows([
        ['S1', achievement(sede, generation)[0]],
        ['S2', achievement(sede, generation)[1]],
        ['S3', achievement(sede, generation)[2]],
        ['S4', achievement(sede, generation)[3]],
      ]);
      var options = {'title': 'ACHIEVEMENT',
        'width': 250,
        'height': 150};
      var chart = new google.visualization.PieChart(document.getElementById('achievement-graph'));
      chart.draw(data, options);
    }
  });
});
 
  