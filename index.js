// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective (star = '*'){
  const adjective = function(adjective='a hard worker'){
      return `You are ${star}${adjective}${star}!`
   }
   return adjective
}
function wrapAdjective (or ='||'){
    const coding =function(adjective='a dedicated programmer'){
        return `You are ${or}${adjective}${or}!`
    }
    return coding
}

