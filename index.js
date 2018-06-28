
var docList = [
    {name:"Ann Maria",speciality:"General Practice",location:"San Diego",state:"California",address:"134370 BURBANK BLVD SUITETARZANA, CA 91356",phone:"(818)345-7707"},
    {name:"Joseph Bell",speciality:"Pediatrics",location:"San Francisco",state:"California",address:"11550 INDIAN HILLS ROAD, SUITE # 371 MISSION HILLS, CA 91345 ",phone:"(818) 365-1194"},
    {name:"Noah Terry",speciality:"General Practice",location:"Long Beach",state:"California",address:"27420 TOURNEY ROAD, SUITE # 200 VALENCIA, CA 91355",phone:"(661) 753-9891"},
    {name:"Angela Oakley",speciality:"Dentist",location:"LongBeach ",state:"California",address:"3100 E FLORENCE AVE, SUITE # 1 HUNTINGTON PARK, CA 90255",phone:"(323) 583-4115"}]
    
    var divList = document.getElementById("myTable");
  // creating all cells
  for (var i = 0; i < docList.length; i++) {
    // creates a table row
    var row = document.createElement("tr");
 
    for (var index in docList[i]) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(docList[i][index]);
      cell.appendChild(cellText);
      row.classList.add("tabRow");
      row.appendChild(cell);
    }
    var cell = document.createElement("td");
    var link = document.createElement("a");
    var linkText = document.createTextNode("View Doctor");
    link.appendChild(linkText);
    link.setAttribute("onClick","viewDoctor(id)");
    link.setAttribute("href","viewDoctor.php?id="+i);
    link.setAttribute("id",i);
    link.setAttribute("class","view");
    cell.appendChild(link);
    row.appendChild(cell);
    divList.appendChild(row);
   
  }
  
  function viewDoctor(id){
    console.log(id);
   document.getElementsByTagName("body").innerHTML= docList[i];
  }