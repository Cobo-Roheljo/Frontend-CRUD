//non piu' file json
var data = [];
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
    righe = righe + "<td>" + "<input type='button' class='btn btn-warning' value='MODIFICA' onclick='modifica("+value.id+")' id='"+value.id+"'>";
    righe = righe + "<td>" + "<input type='button' class='btn btn-danger' value='RIMUOVI' onclick='elimina("+value.id+")' id='"+value.id+"'>";
    righe = righe + "</tr>";
 });
    $("#tbody").append(righe);
}

//tabella presa tramite il server
$(document).ready(function (){
    $.get("http://localhost:8080/employees", function(contenuto){
      data = contenuto["_embedded"]["employees"];
      tabellaCodice();
    })
});

//elimina 
function elimina(id){
    $("#"+id).closest("tr").remove();
}

//aggiungi
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
    righeadd +="<td>" + "<input type='button' class='btn btn-warning' value='MODIFICA' onclick='modifica("+nextID+")' id='"+nextID+"'>";
    righeadd +="<td>" + "<input type='button' class='btn btn-danger' value='RIMUOVI' onclick='elimina("+nextID+")' id='"+nextID+"'>";
    righeadd +="</tr>";
    nextID++;
    $('#tbody').append(righeadd);
    });
});

//modifica
$(document).ready(function () {
  $('#dtBasicExample').DataTable();
  $('.dataTables_length').addClass('bs-select');
});




