var docList = [
    {name:"Ann Maria",img:"img.jpg",speciality:"General Practice",location:"San Diego",state:"California",phone:"(818)345-7707",rating:"4"},
    {name:"Joseph Bell",img:"img1.jpg",speciality:"Pediatrics",location:"San Francisco",state:"California",phone:"(818) 365-1194",rating:"3.5"},
    {name:"Noah Terry",img:"img2.jpg",speciality:"Dermatology",location:"Long Beach",state:"California",phone:"(661) 753-9891",rating:"2.5"},
    {name:"Ang Oakley",img:"img3.jpg",speciality:"Accupuncture",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
    {name:"Angela Oakley",img:"img4.jpg",speciality:"Dentist",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.5"},
    {name:"Antony Perez",img:"img.jpg",speciality:"Allergy and Immunology",location:"Santa Barbara",state:"California",phone:"(818)345-7707",rating:"4"},
    {name:"Joe Bell",img:"img1.jpg",speciality:"Cardiology",location:"Los Angeles",state:"California",phone:"(818) 365-1194",rating:"3.5"},
    {name:"Jon Terry",img:"img.jpg",speciality:"Colon and Rectal",location:"Long Beach",state:"California",phone:"(661) 753-9891",rating:"2.5"},
    {name:"Ang Oakley",img:"img2.jpg",speciality:"Chiropractic",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
    {name:"Sisu Ryan",img:"img4.jpg",speciality:"Dentist",location:"Los Angeles",state:"California",phone:"(323) 583-4115",rating:"4.5"},
	{name:"Nitin Gopala",img:"img.jpg",speciality:"General Practice",location:"San Diego",state:"California",phone:"(818)345-7707",rating:"4"},
    {name:"Treasach Victor",img:"img2.jpg",speciality:"Pediatrics",location:"San Francisco",state:"California",phone:"(818) 365-1194",rating:"3.5"},
    {name:"Behiya Shoba",img:"img.jpg",speciality:"Dermatology",location:"Long Beach",state:"California",phone:"(661) 753-9891",rating:"2.5"},
    {name:"Eppi Gerfrid",img:"img2.jpg",speciality:"Accupuncture",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
    {name:"Mariho Spas",img:"img1.jpg",speciality:"Dentist",location:"Sacramento ",state:"California",phone:"(323) 583-4115",rating:"4.5"},
    {name:"Juda Mesi",img:"img.jpg",speciality:"Allergy and Immunology",location:"Santa Barbara",state:"California",phone:"(818)345-7707",rating:"4"},
    {name:"Ohana Bell",img:"img2.jpg",speciality:"Cardiology",location:"Los Angeles",state:"California",phone:"(818) 365-1194",rating:"3.5"},
    {name:"Yashiyanu Nero",img:"img3.jpg",speciality:"Colon and Rectal",location:"Sacramento",state:"California",phone:"(661) 753-9891",rating:"2.5"},
    {name:"Godwin Oakley",img:"img1.jpg",speciality:"Chiropractic",location:"Sacramento ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
    {name:"Angela Markus",img:"img.jpg",speciality:"General Practice",location:"Los Angeles",state:"California",phone:"(323) 583-4115",rating:"4.5"},
	{name:"Anisha June",img:"img.jpg",speciality:"Accupuncture",location:"Sacramento ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
    {name:"Julio Alexender",img:"img2.jpg",speciality:"Dentist",location:"Sacramento ",state:"California",phone:"(323) 583-4115",rating:"4.5"},
    {name:"Julio Markes",img:"img1.jpg",speciality:"Allergy and Immunology",location:"Santa Barbara",state:"California",phone:"(818)345-7707",rating:"4"},
    {name:"Joanna Bell",img:"img4.jpg",speciality:"Cardiology",location:"Los Angeles",state:"California",phone:"(818) 365-1194",rating:"3.5"},
    {name:"Aktsuki Nero",img:"img2.jpg",speciality:"Colon and Rectal",location:"Long Beach",state:"California",phone:"(661) 753-9891",rating:"2.5"},
    {name:"Shakti Patel",img:"img1.jpg",speciality:"Chiropractic",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
    {name:"Kusuma Jaiswal",img:"img1.jpg",speciality:"General Practice",location:"Los Angeles",state:"California",phone:"(323) 583-4115",rating:"4.5"},
	{name:"Chrysilla Gerfrid",img:"img2.jpg",speciality:"Accupuncture",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
    {name:"Celiene Dsouza",img:"img4.jpg",speciality:"Dentist",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.5"},
    {name:"Jessica Lisbet",img:"img4.jpg",speciality:"Allergy and Immunology",location:"Santa Barbara",state:"California",phone:"(818)345-7707",rating:"4"},
    {name:"Rae Kim",img:"img.jpg",speciality:"Cardiology",location:"Los Angeles",state:"California",phone:"(818) 365-1194",rating:"3.5"},
    {name:"Ryong kim",img:"img4.jpg",speciality:"Colon and Rectal",location:"Long Beach",state:"California",phone:"(661) 753-9891",rating:"2.5"},
    {name:"Godwin Moe",img:"img.jpg",speciality:"Chiropractic",location:"Long Beach ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
    {name:"Angela Fernandes",img:"img3.jpg",speciality:"General Practice",location:"Fresno",state:"California",phone:"(323) 583-4115",rating:"4.5"},
	{name:"Eppi Gerfrid",img:"img.jpg",speciality:"Accupuncture",location:"Fresno ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
    {name:"Mariho K Lun",img:"img2.jpg",speciality:"Dentist",location:"Fresno ",state:"California",phone:"(323) 583-4115",rating:"4.5"},
    {name:"Juda Pinto",img:"img1.jpg",speciality:"Allergy and Immunology",location:"Santa Barbara",state:"California",phone:"(818)345-7707",rating:"4"},
    {name:"Ohana Citra",img:"img.jpg",speciality:"Cardiology",location:"Los Angeles",state:"California",phone:"(818) 365-1194",rating:"3.5"},
    {name:"Yashiyanu Ho",img:"img.jpg",speciality:"Colon and Rectal",location:"Fresno",state:"California",phone:"(661) 753-9891",rating:"2.5"},
    {name:"Godwin Oakley",img:"img3.jpg",speciality:"Chiropractic",location:"Fresno ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
    {name:"Angela Mark Dias",img:"img4.jpg",speciality:"General Practice",location:"Los Angeles",state:"California",phone:"(323) 583-4115",rating:"4.5"},
	{name:"Eppi Gerfrid",img:"img.jpg",speciality:"Accupuncture",location:"Fresno ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
    {name:"Mariho Jacobe",img:"img2.jpg",speciality:"Dentist",location:"Fresno ",state:"California",phone:"(323) 583-4115",rating:"4.5"},
    {name:"Judah Doe",img:"img1.jpg",speciality:"Allergy and Immunology",location:"Santa Barbara",state:"California",phone:"(818)345-7707",rating:"4"},
    {name:"Ohana Bella",img:"img4.jpg",speciality:"Cardiology",location:"Los Angeles",state:"California",phone:"(818) 365-1194",rating:"3.5"},
    {name:"Yashiyanu Yun",img:"img3.jpg",speciality:"Colon and Rectal",location:"Fresno",state:"California",phone:"(661) 753-9891",rating:"2.5"},
    {name:"Godwin Lowa",img:"img2.jpg",speciality:"Chiropractic",location:"Fresno ",state:"California",phone:"(323) 583-4115",rating:"4.7"},
    {name:"Angela Dcruz",img:"img1.jpg",speciality:"General Practice",location:"Los Angeles",state:"California",phone:"(323) 583-4115",rating:"4.5"},

 
 
  ]
var priority = {name:"0",img:"0",speciality:"40",location:"20",state:"10",address:"0",phone:"0"};
var x = document.URL;
var id = x.split("=")[1];
var docInfo = document.getElementById("docInfo");
var i = parseInt(id);
var relDisplay = 3;


for(var index in docList[i]){
    if(index==="name"){
        var nameText = document.createTextNode(docList[i][index]);
        var nameNode = document.createElement("h1");
        nameNode.appendChild(nameText);
        nameNode.setAttribute("class","docName");
        docInfo.appendChild(nameNode); 

    }
    else if(index==="img"){
        var imgNode = document.createElement("img");
        imgNode.setAttribute("src",docList[i][index]);
        imgNode.setAttribute("alt","Doctor's Photo");
        imgNode.setAttribute("class","docImg");
        docInfo.appendChild(imgNode);
    }
    else{
        var nameText = document.createTextNode(index.charAt(0).toUpperCase()+index.substr(1)+": "+docList[i][index]);
        var nameNode = document.createElement("p");
        nameNode.appendChild(nameText);
        nameNode.setAttribute("class","info");
        docInfo.appendChild(nameNode); 
    } 
}

//Related doctors function
var rel = []
for(var a =0 ;a <docList.length;a++){
    if(a!=i){
        var sim = 0;
       if(docList[a]["speciality"]==docList[i]["speciality"]) sim =sim+parseInt(priority["speciality"]);       
       if(docList[a]["location"]==docList[i]["location"]) sim =sim+parseInt(priority["location"]);   
       if(docList[a]["state"]==docList[i]["state"]) sim =sim+parseInt(priority["state"]);   
        
        
       rel.push({a,sim});
        console.log(a+" "+sim);
    }   
}
rel.sort(function(a,b){
    return b.sim - a.sim;
});

for(var r =0;r<relDisplay;r++){
    var relDoc  = document.getElementById("relDoc");
    var a =document.createElement("a");
    var rDoc = document.createElement("div");
    rDoc.setAttribute("id","rDoc");
    var docArray = docList[rel[r]["a"]];
    var p0 = document.createTextNode(docArray["name"]);
    var p1 = document.createTextNode(docArray["speciality"]);
    var p2 = document.createTextNode(docArray["location"]+", "+docArray["state"]);
    var pName = document.createElement("h4");
    var pSpec = document.createElement("p");
    var pLoc = document.createElement("p");

    pName.appendChild(p0);
    rDoc.appendChild(pName);

    pSpec.appendChild(p1);
    rDoc.appendChild(pSpec);

    pLoc.appendChild(p2);
    rDoc.appendChild(pLoc);

    a.appendChild(rDoc);
    a.setAttribute("href","viewDoctor.html?id="+rel[r]["a"]);
    relDoc.appendChild(a);
}