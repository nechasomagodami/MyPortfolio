import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return <div className='content'>
        <div className='contentImg'>
            <img src="https://sun9-14.userapi.com/c840528/v840528517/46b46/-8LQPg_o1hI.jpg"/>
        </div>
            <div className='contentText'>
                <div className='ct1'> 
                    <div className='ct1H1'>Добрый день!</div> 
                    <div>Меня зовут Дмитрий и это краткая инфа обо мне:</div></div>             
                <div className='ct2'>Прошел курс веб-разработчика на SoloLearn: <br/>
                    <img src="https://sun9-50.userapi.com/28EK-1xr944xtuhibfSLts_vxhOQiqNF67Qv6g/-goKS4uwt64.jpg" />
                    <img src="https://sun9-54.userapi.com/3e7F9V66SdI79FFUUnEyqMYF1SvfWPgJqsAqYA/5rTUdVFP2PY.jpg" />
                    <img src="https://sun9-9.userapi.com/kxCfKrZqujB5bcJoy_k-nnFLprMlZRuJtHqgyg/kwQaMcS0ZYw.jpg" />
                </div>
                <div className='ct3'>Знаком с синтаксисом ЯП: <br/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" />
                    <img src="https://img2.pngio.com/css-3-logo-png-transparent-svg-vector-freebie-supply-css-logo-png-2400_3384.png" />
                    <img src="https://www.ecomschool.co.il/wp-content/uploads/2019/10/kisscc0-computer-icons-logo-brand-javascript-angle-js-5b741783856f77.0690615715343348515466.png" />
                    <img src="https://uploads-ssl.webflow.com/57441aa5da71fdf07a0a2e19/5b9945b4a4461f4bbaf18a5f_C-Sharp-01.png" />
                    <img src="https://5bucks.ru/wp-content/uploads/2017/01/1459870313PHP-logo.svg.png" />
                </div>
                <div className='ct4'>Изучал такие классные методологии, как: <br/>
                    <div className='ct4H1'>ООП, БЭМ, SOLID, DRY, KISS</div>
                </div>
                <div className='ct5'>А данное SPA создано благодаря библиотеке: <br/>
                    <img src="https://cdn-images-1.medium.com/fit/t/1600/480/1*-dy70uysIH0N9MfVVitzgg.png" />
                </div>
            </div>

    </div>
}

export default AboutMe;