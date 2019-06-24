//Creates a promise function that is set to resolve after three seconds
function printName() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("My name is Peyton Giles");
      }, 3000);
    });
  }

async function asyncCall(){
    var Name = await printName();
    console.log(Name);
}

//Shows the pending state of the promise
console.log(printName);

asyncCall();