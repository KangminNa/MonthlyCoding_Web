import React from 'react';
import style from './find.module.css';
import a from './img/a.png';
import b from './img/b.png';
import c from './img/c.png';
import d from './img/d.png';
import e from './img/e.png';
import f from './img/f.png';

const FIND_DATA = [
  {
    img: a,
    contents: "일주일에 2시간 투자",
  },
  {
    img: b,
    contents: "온라인 모임 추구",
  },
  {
    img: c,
    contents: "결과보다는 과정을 추구",
  },
  {
    img: d,
    contents: "다양한 코딩 프로젝트를 경험",
  },
  {
    img: e,
    contents: "여러 분야 사람과 협업",
  },
  {
    img: f,
    contents: "다양한 개발툴 경험",
  },
];

/**
 * 조건
 */
export const Content = ({imgSrc, children}) => {
    return <div className={style.content}>
        <img src={imgSrc} alt='아이콘'/>
        <span>&nbsp;{children}</span>
        </div>
}

function Find() {
  return (
    <div className={style.container}>
      <h2>저희는 이런 분을 찾고 있어요!</h2>
      <div className={style.find_contents}>
        {FIND_DATA.map((data) => {
          return <Content imgSrc={data.img}>{data.contents}</Content>;
        })}
      </div>
    </div>
  );
}

export default Find;