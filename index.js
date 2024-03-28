function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`;
  }
  
  function wrapAdjective(symbol) {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    }
  }
  
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
  }
  