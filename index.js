// Code your solution in this file!
// function distanceFromHqInBlocks(pickup){
//    pickup=43
//     return Math.abs(pickup-42)
// }
// function distanceFromHqInBlocks(pickup){
//     pickup=50
//      return Math.abs(pickup-42)
// }
//  function distanceFromHqInBlocks(pickup){
//     pickup=34
//      return Math.abs(pickup-42)
// }
    
function distanceFromHqInBlocks(destination){
    const hq = 42;
    // return Math.abs(blocks-hq)

    // let destination;
    // distanceInBlocks=destination-hq;
    if (destination>hq){
        return destination-hq;
    } else {
        return hq-destination;
    }
}
 //below comment also possible solution

//  function distanceFromHqInBlocks(destination){
//     reurn Math.abs(destination-42)
//  }

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination){
    //let distance = distanceFromHqInFeet();
   // let distance = function distanceTravelledInFeet(start, destination){
      let distance = Math.abs(destination - start) * 264;

    if (distance <= 400){
        return 0;
    } else if (distance >400 && distance <=2000){
        return (distance-400)*0.02;
        } else if (distance >2000 && distance <=2500){
            return 25
        } else {
            return 'cannot travel that far'
        }
    }  
