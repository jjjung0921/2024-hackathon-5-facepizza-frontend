import React from "react";
import * as H from '../../styles/HomeStyled';
import * as S from '../../styles/StyledComponents';

const AboutUs_Home = () => {

    return (
        <H.Magazine_Home>
            <H.ComponentName>
                <h2>about 얼굴피자</h2>
            </H.ComponentName>
            <H.Sectin_G>
                <S.Blink to='/aboutus'>
                    <H.FlexRow>
                        <H.Example />
                        <H.Example />
                        {/* <H.Example /> */}
                    </H.FlexRow>
                </S.Blink>
            </H.Sectin_G>
        </H.Magazine_Home>
    );
}

export default AboutUs_Home;