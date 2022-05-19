export const createChannel = (event, channelObject, canCreate) => {
  const nameValue = event.target.parentElement.children[0].value;
  const channelArray = channelObject.data.filter(
    (value) => value.attributes.name === nameValue
  );
  const channelIndex =
    canCreate === 0
      ? 1
      : nameValue.length === 0
      ? 2
      : channelArray.length !== 0
      ? 3
      : nameValue;
  console.log("array", nameValue, channelArray, channelIndex);
  return channelIndex;
};
