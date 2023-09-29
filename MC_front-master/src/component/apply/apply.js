import React from 'react';
import style from './apply.module.css';

function ApplyComponent() {
    // 카카오톡 오픈 채팅 링크
    const kakaoLink = 'https://open.kakao.com/o/sXx5Cizf';

    return (
        <div className={style.main_title}>
            <a href={kakaoLink}>
                <p className={style.linkText}>질문하러가기!</p>
            </a>
        </div>
    );
}

export default ApplyComponent;
