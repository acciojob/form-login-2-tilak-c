//your JS code here. If required.
let tableBody=document.querySelector("#table tbody");
const submitElement=document.getElementById('submitBtn');
submitElement.addEventListener("click",function(event){
	event.preventDefault();
	const firstname=document.getElementById('firstname').value;
const lastname=document.getElementById('lastname').value;
const phonenumber=document.getElementById('phonenumber').value;
const emailid=document.getElementById('emailid').value;

		if(!firstname || !lastname||!phonenumber||!emailid){
			alert("Please fill all fields");
			return;
		}
	
	let newRow=document.createElement('tr');
	newRow.innerHTML=
		`<td>${firstname}</td>
		<td>${lastname}</td>
		<td>${phonenumber}</td>
		<td>${emailid}</td>
		`
	tableBody.appendChild(newRow);
			document.getElementById('firstname').value = '';
			document.getElementById('lastname').value = '';
			document.getElementById('phonenumber').value = '';
			document.getElementById('emailid').value = '';
})