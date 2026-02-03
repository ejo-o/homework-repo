import React from "react";

function Card({ name, age, birthday, hobby, mbti }) {
  return (
    <div className="card">
      <p>이름 : {name}</p>
      <p>나이 : 만 {age}세</p>
      <p>생일 : {birthday}</p>
      <p>취미 : {hobby.join(", ")}</p>
      <p>MBTI : {mbti}</p>
    </div>
  );
}

export default Card;
