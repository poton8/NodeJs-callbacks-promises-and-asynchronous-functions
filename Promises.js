//Creates a promise function that is set to resolve after three seconds
var namePromise = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve("My name is Peyton Giles");
    },3000)
});
  
//Shows the pending state of the promise
console.log(namePromise);



//Shows the resolved promise value
namePromise.then(function(value) {
    console.log(value);
});