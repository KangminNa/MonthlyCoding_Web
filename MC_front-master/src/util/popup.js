/**
 * 공통 팝업들
 */
import React from 'react';
import style from './css/popup.module.css';

/**
 * 사용자 얼럿
 * @param 열기여부 {true, false}
 * @param 함수 닫기
 * @param children '문구'
 * @param fun '확인시 실행할 함수. 없으면 실행x'
 * @return popup
 */
export const Alert = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, fun } = props;

    //함수가 있으면 실행. 없으면 닫기
    const propsFunction = () => {
        if(fun != null){
            close();
            return true;
        }
        else {
            close();
            return false;
        }
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? `${style.openModal} ${style.modal}` : style.modal}>
            {open ? (
            <section>
                <main>{props.children}</main>
                <footer>
                <button className={style.okBtn} onClick={propsFunction}>
                    닫기
                </button>
                </footer>
            </section>
            ) : null}
        </div>
    );
};

/**
 * 사용자 컨펌
 * @param 메세지
 * @return popup
 */
export const Confirm = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, okfun, nofun } = props;
    
    //함수가 있으면 실행. 없으면 닫기
    const okPropsFunction = () => {
        if(okfun != null){
            close();
            return okfun;
        }
        else {
            close();
        }
        return;
    }

    const noPropsFunction = () => {
        if(nofun != null){
            close();
            return nofun;
        }
        else {
            close();
        }
        return;
    }

    return (
      // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? `${style.openModal} ${style.modal}` : style.modal}>
            {open ? (
            <section>
                <main>{props.children}</main>
                <footer>
                <button className={style.okBtn} onClick={okPropsFunction}>
                    확인
                </button>
                <button className={style.noBtn} onClick={noPropsFunction}>
                    닫기
                </button>
                </footer>
            </section>
            ) : null}
        </div>
    );
};