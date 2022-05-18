export const createUser = (event, userObject) => {
  const nameValue = event.target.parentElement.children[0].value;
  const passValue = event.target.parentElement.children[1].value;
  const passConfirmValue = event.target.parentElement.children[2].value;

  // userObject.data.map((value) =>
  //   value.attributes.userName === nameValue
  //     ? console.log(true)
  //     : console.log(false)
  // );
  const array = userObject.data.filter(
    (value) => value.attributes.userName === nameValue
  );
  console.log("array", array);
  const index =
    nameValue.length === 0 ||
    passValue.length === 0 ||
    passConfirmValue.length === 0
      ? 1
      : passValue.length <= 4 || passValue.length >= 20
      ? 2
      : passValue !== passConfirmValue
      ? 3
      : array.length !== 0
      ? 4
      : [nameValue, passValue];
  console.log(nameValue, passValue, passConfirmValue, userObject, index);

  return index;
};
