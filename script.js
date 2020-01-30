var selectedRow=null;

function onFormSubmit()
{
    
var formData=readFormData();
if(selectedRow== null)
 insertNewRecord(formData);
 else
updateRecord(formData);
 resetForm();
}

function readFormData(){
    var formData={};
    formData["fullName"]=document.getElementById("fullName").value;
    formData["trip"]=document.getElementById("trip").value;
    return formData; 
}

function insertNewRecord(data)
{
    var table=document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.fullName;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.trip;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=`<a onClick="onEdit(this)" class="edit">Edit</a>|<a onClick="onDelete(this)" class="delete" >Delete</a>`;
}
//the below function is for reseting the form values to default.
function resetForm(){
document.getElementById("fullName").value="";
document.getElementById("trip").value="";
selectedRow=null;
}
function onEdit(td)
{
 selectedRow=td.parentElement.parentElement;
 document.getElementById("fullName").value=selectedRow.cells[0].innerHTML;
 document.getElementById("trip").value=selectedRow.cells[1].innerHTML;

}
function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML=formData.fullName;
    selectedRow.cells[1].innerHTML=formData.trip;  
}
function onDelete(td)
{
    if(confirm('Are you sure to dlete this record?')){
    row=td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm(); 
    }
}