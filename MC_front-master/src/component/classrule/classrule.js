import style from './classrule.module.css';
import star from './img/star.png';
import time from './img/time.png';
import hand from './img/hand.png';
import trend from './img/trend.png';
/* 모임규칙 */

const CLASSRULE_DATA = [
  {
    img: star,
    alt: "별",
    contents: "매달 첫째주, 같이 목표정하기!",
    sub_content: "매 달 첫번째 주에 같이 함께할 사이드 프로젝트를 정하니다."
  },
  {
    img: time,
    alt: "시계",
    contents: "매주 목요일(회의를 통해 시간 결정) / 2시간 (23:30~01:30)",
  },
  {
    img: trend,
    alt: "게더타운링크",
    contents: "게더타운, 모임 프로젝트 회의및 개인 담당 작업 (화상 회의)",
  },
  {
    img: hand,
    alt: "손",
    contents:
      "본업에 방해되지 않는 시간에 요즘 대세를 따른 언택트 모임을 추구합니다.",
  },
];

function Classrule() { 
  return (
    <div className={style.container}>
      <h2>모임규칙</h2>
      <div className={style.contents}>
        {CLASSRULE_DATA.map((data) => {
          return (
            <div>
              <img src={data.img} alt={data.alt}/>
              <h4>&nbsp; {data.contents}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default Classrule;