import style from './main.module.css';
import Title from './title/title';
import Classrule from './classrule/classrule';
import Find from './find/find';
import Keyword from './keyword/keyword';
import ApplyComponent from './apply/apply';
import WeAre from './weare/weare';


function Main() {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <Title />
        <WeAre />
        <Keyword />
        <Classrule />
        <Find />
        <ApplyComponent />
      </div>
    </div>
  );
}

export default Main;