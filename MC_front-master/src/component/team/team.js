import Personal from "./personal";
import style from "./team.module.css";


function Team() {
  return (
    <>
      <h2 className={style.h2}>팀원 소개</h2>
      <div className={style.introduce_box}>
        <div className={style.personal_box}>
        <Personal />
        </div>
      </div>
    </>
  );
}

export default Team;