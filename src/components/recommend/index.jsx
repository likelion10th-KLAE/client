import React, { useState, useEffect } from "react";
import { RecommendSection, Qna, Question, Answer, Register } from "./styled";

const questions = [
  "Q1. 어디에서 키울 건가요? (생육 장소)",
  "Q2. 선호하는 식물 종류",
  "Q3. 고려해야 할 특수한 환경이 있나요",
  "Q4. 식물에 원하는 효능이나 기능이 있나요?"
]

const answers = [
  [
    "A1. 마당이나 탁 트인 공간에서 키우고 싶어요", 
    "A2. 텃밭이나 담장에서 키우고 싶어요", 
    "A3. 실내에서 소규모로 키우고 싶어요 (베란다, 건물 內)", 
    "A4. 방 안에서 소규모로 키우고 싶어요"
  ],
  [
    "A1. 소규모 텃밭용 야채", 
    "A2. 관상용 꽃", 
    "A3. 열매", 
    "A4. 분재 및 플랜테리어 용"
  ],
  [
    "A1. 햇볕이 거의 들어오지 않는 환경에 있어요", 
    "A2. 외출을 자주 해서 급수 주기가 길었으면 좋겠어요"
  ],
  [
    "A1. 공기 정화", 
    "A2. 해충박멸", 
    "A3. 탈취", 
    "A4. 아로마"
  ]
]

const Recommend = () => {

  const [clicked, setClicked] = useState([false, false, false, false]);
  const [canRegister, setCanRegister] = useState(false);

  const clickButton = (ques_idx, ans_idx) => {

    let newArr = clicked.map((item, index) => {
      if (index === ques_idx) {
        return ans_idx;
      } else {
        return item;
      }
    })

    setClicked(newArr);
  } 

  const clickRegister = () => {
    if (canRegister) {
      console.log("register");
    } else {
      alert("모두 입력");
    }
  };

  useEffect(() => {
    if (clicked[0]!==false && clicked[1]!==false && clicked[2]!==false && clicked[3]!==false) {
      setCanRegister(true);
    }
  });

  return (
    <RecommendSection>
      {questions.map((question, idx) => (
        <Qna>
          <Question>{question}</Question>
          {answers[idx].map((answer, index) => (
            <>
            {
              index === clicked[idx]
              ?
              <Answer sender={true} onClick = {() => {clickButton(idx, index)}}>{answer}</Answer>
              :
              <Answer sender={false} onClick = {() => {clickButton(idx, index)}}>{answer}</Answer>
            }
          </>
          ))}
        </Qna>
      ))}
      <Register sender={canRegister} onClick={() => {clickRegister()}}>추천받기</Register>
    </RecommendSection>   
  )
}

export default Recommend;