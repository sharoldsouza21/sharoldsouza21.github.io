
var docList = [
    {name:"Ann Maria",speciality:"General Practice",location:"San Diego",state:"California",phone:"(818)345-7707",rating:"4"},
    {name:"Joseph Bell",speciality:"Pediatrics",location:"San Francisco",state:"California",phone:"(818) 365-1194",rating:"3.5"},
    {name:"Noah Terry",speciality:"General Practice",location:"Long Beach",state:"California",phone:"(661) 753-9891",rating:"2.5"},
    {name:"Ang Oakley",speciality:"Accupuncture",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
    {name:"Angela Oakley",speciality:"Dentist",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.5"},

 
 
  ]
    
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
    link.setAttribute("href","viewDoctor.html?id="+i);
    link.setAttribute("id",i);
    link.setAttribute("class","view");
    cell.appendChild(link);
    row.appendChild(cell);
    divList.appendChild(row);
   
  }
  