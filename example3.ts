const publishItems = async () => {
  const itemsToPublish = ["foo", "bar", "baz", "boo", "quux"];
  itemsToPublish.forEach(async item => {
    await asyncPublisher.publish(item);
  });
};

// This wouldn't work as expected cause await is put into nested async function. The solution is at the bottom.
publishItems().catch(e => {
  throw new Error("Failed to publish items!");
});


await Promise.all(itemsToPublish.map(item => asyncPublisher.publish))
