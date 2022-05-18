export const logInUser = (event, userObject) => {
  const nameValue = event.target.parentElement.children[0].value;
  const passValue = event.target.parentElement.children[1].value;

  // userObject.data.map((value) =>
  //   value.attributes.userName === nameValue
  //     ? console.log(true)
  //     : console.log(false)
  // );
  const isUser = userObject.data.filter(
    (value) => value.attributes.userName === nameValue
  );

  console.log("array", isUser);
  const index =
    nameValue.length === 0 || passValue.length === 0
      ? 1
      : isUser.length === 0
      ? 2
      : isUser[0].attributes.password !== passValue
      ? 3
      : isUser[0].id;
  console.log(nameValue, passValue, userObject, index);

  return index;
};
