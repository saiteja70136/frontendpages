 "use strict";
 document.querySelector('.emailattr').addEventListener('keydown',(ano)=>{
 let val=document.querySelector('.emailattr').value.length;
 if(val===0){
    if (ano.key >= '0' && ano.key <= '9') {
            // Prevent the number from being typed into the field
            ano.preventDefault();
            // Optionally clear the field
            document.querySelector('.emailattr').value = '';
    }
 }
});
let hodd = document.querySelector('.confirmpass');
hodd.addEventListener('keydown',function(event){
	const allowedRegex = /^[a-zA-Z0-9!@#\$%\^&]$/;
	if(allowedRegex.test(event.key)){
	   let holdpass=document.querySelector('.createpass').value;
	   if(holdpass.length!==0){
		  if(holdpass[this.value.length]===event.key){
             
		  }else{
			alert("confirm password is not matched with password!!");
		  }
	   }else{
		  event.preventDefault();
		  document.querySelector('.confirmpass').value = '';
	   }
	}
});
let holdde=document.querySelector('.telephono');
holdde.addEventListener('keydown',function(event){
    if(!(event.key >= '0' && event.key <= '9')){
		event.preventDefault();
		this.value="";
	}
	
});