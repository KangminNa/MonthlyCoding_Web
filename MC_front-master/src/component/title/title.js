import style from './title.module.css';

/* Monthly Coding */
function Title() {
    return (
        <div id={style.main_title}>
          <p>
            <span>M</span>onthly
            <br />
            <span>C</span>oding
          </p>
        </div>
    );
}

export default Title;