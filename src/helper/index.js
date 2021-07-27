const matchingHelper = {
  validateResult: (getState) => {
    let result = true
    const droppedItems = getState.droppedItems;
    for (let i = 0; i < droppedItems.length; i += 1) {
      if (droppedItems[i].question != droppedItems[i].answer) {
        result = false
      }
    }
    return result;
  },
};

export default matchingHelper;
