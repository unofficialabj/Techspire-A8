import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./style.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      1<Card name="John" address="Ktm" dob={"2002-12-31"} />
      1<Card name="Mark" address="Bkt" dob={"2001-12-31"} />
    </div>
  );
}

export default App;
