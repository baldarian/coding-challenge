const definedItems = (array: any[]) => {
  const outputArray = [];
  array.forEach(item => {
    if (item) outputArray.push(item);
  });
  return outputArray;
}

// maybe we have to use .map?
