import dummy from "../db/data.json";
import Word, { IWord } from "../Word";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import React from "react";

export default function Day() {
  const {day} = useParams();
  const wordList = dummy.words.filter((word: { day: number; }) => word.day === Number(day));
  const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
}
