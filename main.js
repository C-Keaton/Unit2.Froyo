
const newFlavor = [prompt("Enter Flavor #1/6: "), prompt("Enter Flavor #2/6: "), prompt("Enter Flavor #3/6: "), prompt("Enter Flavor #4/6: "), prompt("Enter Flavor #5/6: "), prompt("Enter Flavor #6/6: ")]

const scoops = [];

const myFroyoOrder = (myFlavors) => {
  for(let i = 0; i < newFlavor.length; i++) {
    const currentCount = newFlavor[i];
    
    if(scoops[currentCount] === undefined) {
  
      scoops[currentCount] = 1;
    } 
    
    else {
      scoops[currentCount]++; 
    } 
  }
  return scoops
}

console.log(myFroyoOrder(scoops))