export const Header = (props) => {
  return (
    <div style={{ backgroundColor: "yellow", margin: 10 }}>
      <h1>hello {props.name}</h1>
      <h2>Email:{props.email}</h2>
      <h3>Address:{props.others.adress}</h3>
      <h3>Phone no.:{props.others.mobile}</h3>
    </div>
  );
};
