import style from "./keyword.module.css";

const KEYWORD_DATA = [
  "인원모집중",
  "소통",
  "게더타운",
  "협업",
  "주1회",
  "결과보다는경험:)",
  "Android",
  "프론트엔드",
  "백엔드",
  "ios",
  "백엔드",
  "리눅스",
  "도커",
  "Flutter",
  "React",
  "Spring",
  "Django",
  
];

function Keyword() {
  return (
    <div className={style.container}>
      <h2>모임 키워드</h2>
      <div className={style.keyword_box}>
      {KEYWORD_DATA.map((data) => {
        return <div className={style.keyword}><p># {data}</p></div>
      })}
      </div>
    </div>
  );
}

export default Keyword;
