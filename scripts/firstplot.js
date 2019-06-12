// set chart scale to 0 globally
Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
        min: 0
    }
});





function print_firstplot(selected) {

  console.log("function called");

  // get selected value for dataset
  var dataset = document.getElementById('selectFirstPlot_data').value;
  console.log(dataset);

  // get selected value for plot
  var selected = document.getElementById("selectFirstPlot").value;
  console.log(selected);

  // Create data 1

  let data={};
  data.one=2108;
  data.two=1479;
  data.three=2275;
  data.four=600;

  // Create data 2

  let datatwo={};
  datatwo.one=22;
  datatwo.two=9;
  datatwo.three=32;
  datatwo.four=16;
  datatwo.five=21;


  // DATA SWITCH

  switch(dataset){

    // SWITCH VISUALIZATION OF MS OFFICE
    case "msoffice":

      switch(selected){
        // BAR CHART
        case "bar":
        var ctxLine = document.getElementById("plot1").getContext("2d");
        if(window.bar != undefined)
        window.bar.destroy();
        window.bar = new Chart(document.getElementById("plot1"),{
            type: 'bar',
            data: {
              labels: ["Excel", "Word", "Powerpoint", "Access"],
              datasets: [ { label: "users", backgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"], data: [data.one,data.two,data.three,data.four] } ] },
              options: {legend: { display: false }, title: { display: true, text: 'MS Office products by usage' } } });
          break;

        // HORIZONTAL BAR CHART
        case "horizontal":
        var ctxLine = document.getElementById("plot1").getContext("2d");
        if(window.bar != undefined)
        window.bar.destroy();
        window.bar = new Chart(document.getElementById("plot1"),{
            type: 'horizontalBar',
            data: {
              labels: ["Excel", "Word", "Powerpoint", "Access"],
              datasets: [ { label: "users", backgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"], data: [data.one,data.two,data.three,data.four] } ] },
              options: {legend: { display: false }, title: { display: true, text: 'MS Office products by usage' } } });
        break;

        // PIE CHART
        case "pie":
        var ctxLine = document.getElementById("plot1").getContext("2d");
        if(window.bar != undefined)
        window.bar.destroy();
        window.bar = new Chart(document.getElementById("plot1"),{
            type: 'pie',
            data: {
              labels: ["Excel", "Word", "Powerpoint", "Access"],
              datasets: [ { label: "users", backgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"], data: [data.one,data.two,data.three,data.four] } ] },
              options: {legend: { display: false, labels:{fontFamily:"monospace"} }, title: { display: true, text: 'MS Office products by usage' } } });
        break;

        // DOUGHNUT CHART
        case "doughnut":
        var ctxLine = document.getElementById("plot1").getContext("2d");
        if(window.bar != undefined)
        window.bar.destroy();
        window.bar = new Chart(document.getElementById("plot1"),{
            type: 'doughnut',
            data: {
              labels: ["Excel", "Word", "Powerpoint", "Access"],
              datasets: [ { label: "users", backgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"], data: [data.one,data.two,data.three,data.four] } ] },
              options: {legend: { display: false }, title: { display: true, text: 'MS Office products by usage' } } });
        break;

        // POLAR CHART
        case "polar":
        var ctxLine = document.getElementById("plot1").getContext("2d");
        if(window.bar != undefined)
        window.bar.destroy();
        window.bar = new Chart(document.getElementById("plot1"),{
            type: 'polarArea',
            data: {
              labels: ["Excel", "Word", "Powerpoint", "Access"],
              datasets: [ { label: "users", backgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"], data: [data.one,data.two,data.three,data.four] } ] },
              options: {legend: { display: false }, title: { display: true, text: 'MS Office products by usage' } } });
        break;

        // RADAR CHART
        case "radar":
        var ctxLine = document.getElementById("plot1").getContext("2d");
        if(window.bar != undefined)
        window.bar.destroy();
        window.bar = new Chart(document.getElementById("plot1"),{
          type: 'radar',
          data: { labels: ["Excel", "Word", "Powerpoint", "Access"], datasets: [ { label: "users", backgroundColor: "rgba(0,0,0,0.2)",borderColor: "rgba(0,0,0,0.5)", pointBackgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"],data: [data.one,data.two,data.three,data.four,453] } ] }, options: { legend: { display: false }, title: { display: true, text: 'MS Office products by usage' } } });
        break;

        // DEFAULT CASE
        default:
        var ctxLine = document.getElementById("plot1").getContext("2d");
        if(window.bar != undefined)
        window.bar.destroy();
        window.bar = new Chart(document.getElementById("plot1"),{
            type: 'bar',
            data: {
              labels: ["Excel", "Word", "Powerpoint", "Access"],
              datasets: [ { label: "users", backgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"], data: [data.one,data.two,data.three,data.four] } ] },
              options: {legend: { display: false }, title: { display: true, text: 'MS Office products by usage' } } });
          break;
        }
        break;


      // SWITCH VISUALIZATION OF POLITICAL
      case "political":

        switch(selected){

            // BAR CHART
            case "bar":
            var ctxLine = document.getElementById("plot1").getContext("2d");
            if(window.bar != undefined)
            window.bar.destroy();
            window.bar = new Chart(document.getElementById("plot1"),{
                type: 'bar',
                data: {
                  labels: ["green", "socialist", "conservative centrist", "neoliberal", "right wing"],
                  datasets: [ { label: "potential voters", backgroundColor: ["#2ecc71", "#e74c3c","#2c3e50","#f1c40f", "#3498db"], data: [datatwo.one,datatwo.two,datatwo.three,datatwo.four, datatwo.five] } ] },
                  options: {legend: { display: false }, title: { display: true, text: 'Potential voters by political orientation' } } });
              break;

            // HORIZONTAL BAR CHART
            case "horizontal":
            var ctxLine = document.getElementById("plot1").getContext("2d");
            if(window.bar != undefined)
            window.bar.destroy();
            window.bar = new Chart(document.getElementById("plot1"),{
                type: 'horizontalBar',
                data: {
                  labels: ["green", "socialist", "conservative centrist", "neoliberal", "right wing"],
                  datasets: [ { label: "potential voters", backgroundColor: ["#2ecc71", "#e74c3c","#2c3e50","#f1c40f", "#3498db"], data: [datatwo.one,datatwo.two,datatwo.three,datatwo.four, datatwo.five] } ] },
                  options: {legend: { display: false }, title: { display: true, text: 'Potential voters by political orientation' } } });
            break;

            // PIE CHART
            case "pie":
            var ctxLine = document.getElementById("plot1").getContext("2d");
            if(window.bar != undefined)
            window.bar.destroy();
            window.bar = new Chart(document.getElementById("plot1"),{
                type: 'pie',
                data: {
                  labels: ["green", "socialist", "conservative centrist", "neoliberal", "right wing"],
                  datasets: [ { label: "potential voters", backgroundColor: ["#2ecc71", "#e74c3c","#2c3e50","#f1c40f", "#3498db"], data: [datatwo.one,datatwo.two,datatwo.three,datatwo.four, datatwo.five] } ] },
                  options: {legend: { display: false, labels:{fontFamily:"monospace"} }, title: { display: true, text: 'Potential voters by political orientation' } } });
            break;

            // DOUGHNUT CHART
            case "doughnut":
            var ctxLine = document.getElementById("plot1").getContext("2d");
            if(window.bar != undefined)
            window.bar.destroy();
            window.bar = new Chart(document.getElementById("plot1"),{
                type: 'doughnut',
                data: {
                  labels: ["green", "socialist", "conservative centrist", "neoliberal", "right wing"],
                  datasets: [ { label: "potential voters", backgroundColor: ["#2ecc71", "#e74c3c","#2c3e50","#f1c40f", "#3498db"], data: [datatwo.one,datatwo.two,datatwo.three,datatwo.four, datatwo.five] } ] },
                  options: {legend: { display: false }, title: { display: true, text: 'Potential voters by political orientation' } } });
            break;

            // POLAR CHART
            case "polar":
            var ctxLine = document.getElementById("plot1").getContext("2d");
            if(window.bar != undefined)
            window.bar.destroy();
            window.bar = new Chart(document.getElementById("plot1"),{
                type: 'polarArea',
                data: {
                  labels: ["green", "socialist", "conservative centrist", "neoliberal", "right wing"],
                  datasets: [ { label: "potential voters", backgroundColor: ["#2ecc71", "#e74c3c","#2c3e50","#f1c40f", "#3498db"], data: [datatwo.one,datatwo.two,datatwo.three,datatwo.four, datatwo.five] } ] },
                  options: {legend: { display: false }, title: { display: true, text: 'Potential voters by political orientation' } } });
            break;

            // RADAR CHART
            case "radar":
            var ctxLine = document.getElementById("plot1").getContext("2d");
            if(window.bar != undefined)
            window.bar.destroy();
            window.bar = new Chart(document.getElementById("plot1"),{
              type: 'radar',
              data: { labels: ["green", "socialist", "conservative centrist", "neoliberal", "right wing"], datasets: [ { label: "potential voters", backgroundColor: "rgba(0,0,0,0.2)",borderColor: "rgba(0,0,0,0.5)", pointBackgroundColor: ["#2ecc71", "#e74c3c","#2c3e50","#f1c40f", "#3498db"],
              data: [datatwo.one,datatwo.two,datatwo.three,datatwo.four, datatwo.five,453] } ] }, options: { legend: { display: false }, title: { display: true, text: 'Potential voters by political orientation' } } });
            break;

            // DEFAULT CASE
            default:
            var ctxLine = document.getElementById("plot1").getContext("2d");
            if(window.bar != undefined)
            window.bar.destroy();
            window.bar = new Chart(document.getElementById("plot1"),{
                type: 'bar',
                data: {
                  labels: ["green", "socialist", "conservative centrist", "neoliberal", "right wing"],
                  datasets: [ { label: "potential voters", backgroundColor: ["#2ecc71", "#e74c3c","#2c3e50","#f1c40f", "#3498db"], data: [datatwo.one,datatwo.two,datatwo.three,datatwo.four, datatwo.five] } ] },
                  options: {legend: { display: false }, title: { display: true, text: 'Potential voters by political orientation' } } });
              break;
              }
            break;
        }
};
