import React from "react";
import { useState } from "react";

interface IProps {
  word: IWord;
}

export interface IWord {
  day: string,
  eng: string,
  kor: string,
  isDone: boolean,
  id: number,
}

export default function Word({ word: w }: IProps) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if(window.confirm("삭제 하시겠습니다?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
      method: "DELETE",
    }).then(res => {
      if(res.ok){
        setWord({
          ...word,
          id:0
        })
      }
    });
    }
  }

  if(word.id === 0){
    return null;
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td id="word.id">
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>
          뜻 {isShow == false ? "보기" : "숨기기"}
        </button>
        <button className="btn_del" onClick={del}>
          삭제
        </button>
      </td>
    </tr>
  );
}
