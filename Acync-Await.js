//Creates a function that returns a promise, that can be used by an asynchronous function
function printName() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("My name is Peyton Giles");
      }, 3000);
    });
  }

//The asynchorous function
async function asyncCall(){
    var Name = await printName();
    console.log(Name);
}

//Shows the pending state of the printName function
console.log(printName);

//Calls the asynchronous function that will print my name when the promise is completed
asyncCall();