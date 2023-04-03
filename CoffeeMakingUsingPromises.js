// Coffee making in javascript using promise chaining with 8 steps
let CoffeeMaking = new Promise(function(resolve, reject) {
    console.log("The Standard ratio is 2 table spoons of coffee in 6 ounces of water");
        let tableSpoons = window.prompt("How much table spoons you want of coffee?");
        let ouncesOfWater = window.prompt("How much ounces of water?");  
        let extraBeans = window.prompt("Do you want to add extra beans? y/n");
    
    setTimeout(()=> {
        console.log("Measuring the Coffee");
        if (tableSpoons == 2 && ouncesOfWater == 6 && extraBeans === "n"){
            resolve("Your have chosen standard coffee");
        }
        else {
            resolve("You have chosen customize coffee");
        }
    }, 2000);  
}).then(() => {
    return new Promise((resolve, reject) => {
       let grind = prompt("Do you want to grind coffee y/n");
       setTimeout(()=> {
            if (grind === "y"){
               resolve("You coffee is grinding")
              }
            else {
              reject("Coffee making is stopped");
             }
        })
    }, 2000);
}).then(()=> {
    console.log("Preparing the water...");
    return new Promise((resolve, reject) => {
        console.log("Water is been boiling");
        setTimeout(() => {
            resolve("Water has been boiled, now immersing coffe grounds in french press");
        }, 3000);
    })
}).then(()=> {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve("Saturating the water");
        }, 2000);
    })
}).then(()=> {
    return new Promise((resolve, reject)=> {
        console.log("Let the ground absorb the water");
        setTimeout(() => {
            resolve("Ground has absorbed the water");
        }, 3000)
    })
}).then(()=> {
    return new Promise((resolve, reject)=> {
        console.log("Let the water extracts from the ground");
        setTimeout(() => {
            resolve("Water has been extracted from ground");
        }, 2000)
    })
}).then(()=> {
    return new Promise((resolve, reject) => {
        console.log("Plunging the coffee");
        setTimeout(() => {
            resolve("You Coffee has been plunged");
        }, 1000)
    })
}).then(()=> {
    return new Promise((resolve, reject)=> {
        console.log("Serving you the coffee");
        setTimeout(()=> {
            resolve("Enjoy! Your coffee is ready");
        }, 2000)
    })
}).then((value)=> {
    console.log(value);
}).catch((error)=> {
    // if coffee making failed
    console.log("Coffee making failed!", error);
});
