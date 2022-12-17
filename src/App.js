import { useState } from "react";
import { Header } from "./Components/Header";
import "./styles.css";

export default function App(props) {
  const [name, setName] = useState("govind");
  const [name1, setName1] = useState("mike");
  const [name2, setName2] = useState("gaby");
  return (
    <div className="App">
      <Header
        name={name}
        email={"govind.hembram463gmail.com"}
        others={{ adress: "Bahragora", mobile: "123456" }}
      />
      <Header
        name={name1}
        email={"govind.hembram463gmail.com"}
        others={{ adress: "Bahragora", mobile: "123456" }}
      />
      <Header
        name={name2}
        email={"govind.hembram463gmail.com"}
        others={{ adress: "Bahragora", mobile: "123456" }}
      />

      <button
        onClick={() => {
          setName("Hembram"), setName1("scholoser"), setName2("gabri");
        }}
      >
        Update Name
      </button>
    </div>
  );
}
