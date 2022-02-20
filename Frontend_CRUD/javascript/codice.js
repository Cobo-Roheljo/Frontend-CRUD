//file json
var data = [
    {
      "id": 10001,
      "birthDate": "1953-09-01",
      "firstName": "Georgi",
      "lastName": "Facello",
      "gender": "M",
      "hireDate": "1986-06-25",
    },
    {
      "id": 10002,
      "birthDate": "1964-06-01",
      "firstName": "Bezalel",
      "lastName": "Simmel",
      "gender": "F",
      "hireDate": "1985-11-20",
    },
    {
      "id": 10003,
      "birthDate": "1959-12-02",
      "firstName": "Parto",
      "lastName": "Bamford",
      "gender": "M",
      "hireDate": "1986-08-27T22:00:00.000+0000",
    },
    {
      "id": 10004,
      "birthDate": "1954-04-30",
      "firstName": "Chirstian",
      "lastName": "Koblick",
      "gender": "M",
      "hireDate": "1986-11-30",

    },
    {
      "id": 10005,
      "birthDate": "1955-01-20",
      "firstName": "Kyoichi",
      "lastName": "Maliniak",
      "gender": "M",
      "hireDate": "1989-09-11T22:00:00.000+0000",

    }
  ];

var nextID = 10006;


//crea tabella
function tabellaCodice(){
    var righe = "";
    $.each(data,function (key,value){
    righe = righe + "<tr>";
    righe = righe + "<th>" + value.id + "</th>";
    righe = righe + "<td>" + value.firstName + "</td>";
    righe = righe + "<td>" + value.lastName + "</td>";
    righe = righe + "<td>" + value.gender + "</td>";
    righe = righe + "<td>" + "<input type='button' class='btn btn-danger' value='RIMUOVI' onclick='elimina("+value.id+")' id='"+value.id+"'>";
    righe = righe + "</tr>";
 });
    $("#tbody").append(righe);

}

$(document).ready(function (){
    tabellaCodice();
});

function elimina(id){
    $("#"+id).closest("tr").remove();
}

$(document).ready(function (){
    $('#btn').click(function(){
        var righeadd = "";
        var firstName = $("#name").val();
        var lastName = $("#lastname").val();
        var gender = $("#gender").val();
        data.push({
            "id": nextID,
            "birthDate": "",
            "firstName": firstName,
            "gender": gender,
            "hireDate": "",

        })
        

    righeadd +="<tr>";
    righeadd +=  "<th>" + nextID + "</th>";
    righeadd +="<td>" + firstName + "</td>";
    righeadd +="<td>" + lastName + "</td>";
    righeadd +="<td>" + gender + "</td>";
    righeadd +="<td>" + "<input type='button' class='btn btn-danger' value='RIMUOVI' onclick='elimina("+nextID+")' id='"+nextID+"'>";
    righeadd +="</tr>";
    nextID++;
    $('#tbody').append(righeadd);
    });
});


