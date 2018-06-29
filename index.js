
var docList = [
  {name:"Ann Maria",speciality:"General Practice",location:"San Diego",state:"California",phone:"(818)345-7707",rating:"4"},
  {name:"Joseph Bell",speciality:"Pediatrics",location:"San Francisco",state:"California",phone:"(818) 365-1194",rating:"3.5"},
  {name:"Noah Terry",speciality:"Dermatology",location:"Long Beach",state:"California",phone:"(661) 753-9891",rating:"2.5"},
  {name:"Ang Oakley",speciality:"Accupuncture",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
  {name:"Angela Oakley",speciality:"Dentist",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.5"},
  {name:"Antony Perez",speciality:"Allergy and Immunology",location:"Santa Barbara",state:"California",phone:"(818)345-7707",rating:"4"},
  {name:"Joe Bell",speciality:"Cardiology",location:"Los Angeles",state:"California",phone:"(818) 365-1194",rating:"3.5"},
  {name:"Jon Terry",speciality:"Colon and Rectal",location:"Long Beach",state:"California",phone:"(661) 753-9891",rating:"2.5"},
  {name:"Ang Oakley",speciality:"Chiropractic",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
  {name:"Sisu Ryan",speciality:"Dentist",location:"Los Angeles",state:"California",phone:"(323) 583-4115",rating:"4.5"},
{name:"Nitin Gopala",speciality:"General Practice",location:"San Diego",state:"California",phone:"(818)345-7707",rating:"4"},
  {name:"Treasach Victor",speciality:"Pediatrics",location:"San Francisco",state:"California",phone:"(818) 365-1194",rating:"3.5"},
  {name:"Behiya Shoba",speciality:"Dermatology",location:"Long Beach",state:"California",phone:"(661) 753-9891",rating:"2.5"},
  {name:"Eppi Gerfrid",speciality:"Accupuncture",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
  {name:"Mariho Spas",speciality:"Dentist",location:"Sacramento ",state:"California",phone:"(323) 583-4115",rating:"4.5"},
  {name:"Juda Mesi",speciality:"Allergy and Immunology",location:"Santa Barbara",state:"California",phone:"(818)345-7707",rating:"4"},
  {name:"Ohana Bell",speciality:"Cardiology",location:"Los Angeles",state:"California",phone:"(818) 365-1194",rating:"3.5"},
  {name:"Yashiyanu Nero",speciality:"Colon and Rectal",location:"Sacramento",state:"California",phone:"(661) 753-9891",rating:"2.5"},
  {name:"Godwin Oakley",speciality:"Chiropractic",location:"Sacramento ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
  {name:"Angela Markus",speciality:"General Practice",location:"Los Angeles",state:"California",phone:"(323) 583-4115",rating:"4.5"},
{name:"Anisha June",speciality:"Accupuncture",location:"Sacramento ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
  {name:"Julio Alexender",speciality:"Dentist",location:"Sacramento ",state:"California",phone:"(323) 583-4115",rating:"4.5"},
  {name:"Julio Markes",speciality:"Allergy and Immunology",location:"Santa Barbara",state:"California",phone:"(818)345-7707",rating:"4"},
  {name:"Joanna Bell",speciality:"Cardiology",location:"Los Angeles",state:"California",phone:"(818) 365-1194",rating:"3.5"},
  {name:"Aktsuki Nero",speciality:"Colon and Rectal",location:"Long Beach",state:"California",phone:"(661) 753-9891",rating:"2.5"},
  {name:"Shakti Patel",speciality:"Chiropractic",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
  {name:"Kusuma Jaiswal",speciality:"General Practice",location:"Los Angeles",state:"California",phone:"(323) 583-4115",rating:"4.5"},
{name:"Chrysilla Gerfrid",speciality:"Accupuncture",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
  {name:"Celiene Dsouza",speciality:"Dentist",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.5"},
  {name:"Jessica Lisbet",speciality:"Allergy and Immunology",location:"Santa Barbara",state:"California",phone:"(818)345-7707",rating:"4"},
  {name:"Rae Kim",speciality:"Cardiology",location:"Los Angeles",state:"California",phone:"(818) 365-1194",rating:"3.5"},
  {name:"Ryong kim",speciality:"Colon and Rectal",location:"Long Beach",state:"California",phone:"(661) 753-9891",rating:"2.5"},
  {name:"Godwin Moe",speciality:"Chiropractic",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
  {name:"Angela Fernandes",speciality:"General Practice",location:"Fresno",state:"California",phone:"(323) 583-4115",rating:"4.5"},
{name:"Eppi Gerfrid",speciality:"Accupuncture",location:"Fresno ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
  {name:"Mariho K Lun",speciality:"Dentist",location:"Fresno ",state:"California",phone:"(323) 583-4115",rating:"4.5"},
  {name:"Juda Pinto",speciality:"Allergy and Immunology",location:"Santa Barbara",state:"California",phone:"(818)345-7707",rating:"4"},
  {name:"Ohana Citra",speciality:"Cardiology",location:"Los Angeles",state:"California",phone:"(818) 365-1194",rating:"3.5"},
  {name:"Yashiyanu Ho",speciality:"Colon and Rectal",location:"Fresno",state:"California",phone:"(661) 753-9891",rating:"2.5"},
  {name:"Godwin Oakley",speciality:"Chiropractic",location:"Fresno ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
  {name:"Angela Mark Dias",speciality:"General Practice",location:"Los Angeles",state:"California",phone:"(323) 583-4115",rating:"4.5"},
{name:"Eppi Gerfrid",speciality:"Accupuncture",location:"Fresno ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
  {name:"Mariho Jacobe",speciality:"Dentist",location:"Fresno ",state:"California",phone:"(323) 583-4115",rating:"4.5"},
  {name:"Judah Doe",speciality:"Allergy and Immunology",location:"Santa Barbara",state:"California",phone:"(818)345-7707",rating:"4"},
  {name:"Ohana Bella",speciality:"Cardiology",location:"Los Angeles",state:"California",phone:"(818) 365-1194",rating:"3.5"},
  {name:"Yashiyanu Yun",speciality:"Colon and Rectal",location:"Fresno",state:"California",phone:"(661) 753-9891",rating:"2.5"},
  {name:"Godwin Lowa",speciality:"Chiropractic",location:"Fresno ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
  {name:"Angela Dcruz",speciality:"General Practice",location:"Los Angeles",state:"California",phone:"(323) 583-4115",rating:"4.5"},



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
  