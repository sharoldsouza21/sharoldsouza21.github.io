var docList = [
    {name:"Ann Maria",img:"img.jpg",speciality:"General Practice",location:"San Diego",state:"California",address:"134370 BURBANK BLVD SUITETARZANA, CA 91356",phone:"(818)345-7707"},
    {name:"Joseph Bell",img:"img.jpg",speciality:"Pediatrics",location:"San Francisco",state:"California",address:"11550 INDIAN HILLS ROAD, SUITE # 371 MISSION HILLS, CA 91345 ",phone:"(818) 365-1194"},
    {name:"Noah Terry",img:"img.jpg",speciality:"General Practice",location:"Long Beach",state:"California",address:"27420 TOURNEY ROAD, SUITE # 200 VALENCIA, CA 91355",phone:"(661) 753-9891"},
    {name:"Angela Oakley",img:"img.jpg",speciality:"Dentist",location:"LongBeach ",state:"California",address:"3100 E FLORENCE AVE, SUITE # 1 HUNTINGTON PARK, CA 90255",phone:"(323) 583-4115"}
]
var priority = {name:"1",img:"1",speciality:"40",location:"30",state:"20",address:"1",phone:"1"};
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
        var nameText = document.createTextNode(docList[i][index]);
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
        for(var b in docList[a]){
           if(docList[a][b]==docList[i][b]) sim =sim+parseInt(priority[b]);
        }
        rel.push({a,sim});
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