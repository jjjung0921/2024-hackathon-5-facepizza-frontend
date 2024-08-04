import React, { useState, useEffect } from "react";
import * as H from '../../styles/HomeStyled';
import * as S from '../../styles/StyledComponents';
import Locked from '../../assets/Locked.png';

const Album_Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); //토큰이 존재하면 true값
    }, []);

    return (
        <H.Magazine_Home>
            <H.ComponentName>
                <h2>표정 앨범</h2>
            </H.ComponentName>
            <H.Sectin_G>  {/* 안애 내용이 로그인여부에따라 변경 */}
            {isLoggedIn ? (
                    <S.Blink to='/album'>
                        <H.FlexRow>
                            <H.Example />
                            <H.Example />
                            {/* <H.Example /> */}
                        </H.FlexRow>
                    </S.Blink>
                ) : (
                    <H.FlexCol style={{padding: '20px 0 10px 0'}}>
                        <img src={Locked} alt="Locked" />
                        <p>로그인 후 사용해주세요</p>
                    </H.FlexCol>
                )}
            </H.Sectin_G>
        </H.Magazine_Home>
    );
}

export default Album_Home;
