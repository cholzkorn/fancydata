// set chart scale to 0 globally
Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
        min: 0
    }
});



function print_firstplot(selected) {

  console.log("function called");

  // get selected value
  var selected = document.getElementById("selectFirstPlot").value;
  console.log(selected);


  // Destroy previous


  // SWITCH STATEMENT

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
          datasets: [ { label: "users", backgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"], data: [data.excel,data.word,data.powerpoint,data.access] } ] },
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
          datasets: [ { label: "users", backgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"], data: [data.excel,data.word,data.powerpoint,data.access] } ] },
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
          datasets: [ { label: "users", backgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"], data: [data.excel,data.word,data.powerpoint,data.access] } ] },
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
          datasets: [ { label: "users", backgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"], data: [data.excel,data.word,data.powerpoint,data.access] } ] },
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
          datasets: [ { label: "users", backgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"], data: [data.excel,data.word,data.powerpoint,data.access] } ] },
          options: {legend: { display: false }, title: { display: true, text: 'MS Office products by usage' } } });
    break;

    // RADAR CHART
    case "radar":
    var ctxLine = document.getElementById("plot1").getContext("2d");
    if(window.bar != undefined)
    window.bar.destroy();
    window.bar = new Chart(document.getElementById("plot1"),{
      type: 'radar',
      data: { labels: ["Excel", "Word", "Powerpoint", "Access"], datasets: [ { label: "users", backgroundColor: "rgba(0,0,0,0.2)",borderColor: "rgba(0,0,0,0.5)", pointBackgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"],data: [data.excel,data.word,data.powerpoint,data.access,453] } ] }, options: { legend: { display: false }, title: { display: true, text: 'MS Office products by usage' } } });
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
          datasets: [ { label: "users", backgroundColor: ["#56CC9D", "#007bff","#FF7851","#6f42c1"], data: [data.excel,data.word,data.powerpoint,data.access] } ] },
          options: {legend: { display: false }, title: { display: true, text: 'MS Office products by usage' } } });
      break;
  }
};
