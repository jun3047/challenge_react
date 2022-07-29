import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";
import { IDay } from "./DataList";

export default function CreateWord() {
    const days : IDay[] = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();

    function onSubmit(e: React.FormEvent){
        e.preventDefault();
        
        if(dayRef.current && korRef.current && engRef.current){

            const day = dayRef.current.value;
            const eng = engRef.current.value;
            const kor = korRef.current.value;

            fetch(`http://localhost:3001/words/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day,
                eng,
                kor,
                isDone: false,
            }),
          }).then((res) => {
            if (res.ok) {
                alert("생성 완료");
                navigate(`/day/${day}`);
            }
          });
        }
    }

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);
    
    return(
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button>저장</button>
        </form>
    );
}