function choose_map(selectedmap){
  console.log("function called");

  var selectedmap = document.getElementById("selectMap").value;

  switch (selectedmap) {
    case "population":
      var url = 'html/austrialeaflet.html'
      document.getElementById('iframemap').src = url;
      break;

    case "stores":
      var url = 'html/stores.html'
      document.getElementById('iframemap').src = url;
      break;

    default:
      var url = 'html/austrialeaflet.html'
      document.getElementById('iframemap').src = url;
      break;
  };
};
