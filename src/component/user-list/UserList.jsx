import "./UserList.css";

export const UserList = ({ chanterObject }) => {
  // const arrayOfChanters = chanterObject.map(
  //   (chanter, index) => chanter.data[index].attributes.userName
  // );

  const name =
    chanterObject === [] ? "" : String(chanterObject[0].attributes.userName);
  // arrayOfChanters.map((name, i) => {
  //   return <li key={i}>{name}</li>;
  // });

  console.log(String(chanterObject[0].attributes.userName));
  return <li>{name}</li>;
};
