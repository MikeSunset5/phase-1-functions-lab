function distanceFromHqInBlocks (block) {
    if (block >= 42) {
        return block - 42 
    } else if (block < 42) {
        return 42 - block
    }
}

function distanceFromHqInFeet(block) {
    let distance = distanceFromHqInBlocks(block)
    return (distance * 264)
}

function distanceTravelledInFeet(start, end) {
    if (end > start){
        return (end - start) * 264;

    }else{
    return (start - end) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let fare = distanceTravelledInFeet(start, destination)
    if (fare <= 400) {
        return 0
    } else if (fare > 400 && fare <= 2000) {
        return (fare - 400) *.02
    } else if (fare > 2000 && fare < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}