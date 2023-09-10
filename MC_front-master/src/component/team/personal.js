import style from './personal.module.css';

const INTRODUCE_DATA = [
    {
        name: "정한솔",
        job: "Android-Native",
        stack: ["Kotlin","Java","React","Android","Git"]
    },
    {
        name: "현초은",
        job: "Backend 짜바리",
        stack: ["Java", "Unity", "C/C#", "Python", "SpringBoot", "AWS"]
    },
    {
        name: "길재혁",
        job: "Full-Stack 개발자",
        stack: ["JSP", "Aos", "java", "Jquery", "React", "SpringBoot"]
    },
    {
        name: "문상현",
        job: "Android-Native",
        stack: ["Kotlin", "Git", "Java", "Firebase", "Android"]
    },
    {
        name: "나강민",
        job: "치어리더",
        stack: ["CI|CD", "Cubernetes", "Java", "Docker", "C", "Linux", "Kotlin", "Aos"]
    },
    {
        name: "김서우",
        job: "웹 프론트엔드 취준생",
        stack: ["JS", "React", "RTK", "Redux", "Next.js", "Typescript"]
    },
    {
        name: "정민서",
        job: "편입준비생",
        stack: ["토익900", "Aos", "java", "Jquery", "React"]
    },
]


function Personal() {
  return (
    <>
      {INTRODUCE_DATA.map((data) => {
        return (
          <div className={style.introduce_box}>
            <p className={style.name}>{data.name}</p>
            <p className={style.major}>{data.job}</p>
            <p>주요스택</p>
            <div className={style.div}>
              {data.stack.map((data) => {
                return (
                  <div className={style.personal_box}>
                    <p>{data}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Personal;