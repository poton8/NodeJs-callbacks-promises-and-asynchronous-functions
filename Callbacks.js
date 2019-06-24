//Displays first and last name then calls the callback function disp()
function nameDisplay( callback){ 
    console.log("My name is Peyton Giles"); 
    callback(); 
} 
      
//Calback Function     
function disp(){ 
    console.log("The Name Display Function has finished"); 
} 
      
//Passes the two strings and then invokes the callback function disp() when NameDisplay is completed 
nameDisplay(disp);