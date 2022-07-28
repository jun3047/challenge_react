import { useState } from "react";
import styles from "./Hello.module.css";
import Test from "./Test";

export default function Hello(props) {
  const [name, setName] = useState("Jun");
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인이요" : "성인 아니요";
 

  return (
    <div>
      <h1>{name}({age}) : {msg}</h1>
      <Test name={name} />
      <button
        onClick={() => {
          const newName = name === "Jun" ? "sujin" : "Jun";
          setName(newName);
          setAge(age+1);
        }}
      >
        Change
      </button>
    </div>
  );
}
