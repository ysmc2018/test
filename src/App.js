import React, {useState} from 'react';

import './App.css';


function App() {

  let [글제목, ] = useState(['보태니컬한 인테리어 카페','초여름에 가기 좋은 루프탑','서울에서 하기 좋은 산책 코스','한강뷰 레스토랑','힙한 감성의 인테리어','수도권 산','한강 유람선 타기','서울 맛집']);
  let [따봉, 따봉변경] = useState(0); 

 
  return (
    <div><div className="App">
      <div className="black-nav">
        <div>가보고싶은 곳, 해보고싶은 것</div>
          <hr/>
      </div>

    </div>

    <div className='list'>
    <h3>{ 글제목[0] } <span onClick={() => {따봉변경(따봉+1)}}><span className='emogi'>👍</span></span>{따봉}</h3>
        <h4><a href="https://map.naver.com/v5/entry/place/1580543297?c=14127644.9197222,4515754.5759100,15,0,0,0,dh&placePath=%3Fentry=plt" onClick="ga('send','event','어떤걸봤나','버튼클릭');">
          <button className='blog-button'>합정 저스티나</button></a></h4>
          <h4><a href="https://m.place.naver.com/restaurant/1848488870/home">
          <button className='blog-button'>홍대 발코니가든</button></a></h4>
        <p>초록초록한 식물 인테리어로, 마음이 평안해지고 분위기도 몽글몽글해지는 나의 최애 카페</p>
        <hr/>
    </div>

    <div className='list'>
      <h3><a href="https://map.naver.com/v5/search/oktop/place/658074326?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14135261.6441852,4513905.6440083,15,0,0,0,dh" onClick="ga('send','event','어떤걸봤나','버튼클릭');">
        <button className='blog-button'>{글제목[1]}</button></a></h3>
        <p>남산타워가 눈앞에 보이는 야경맛집 루프탑</p>
        <hr/>
    </div>

    <div className='list'>
        <h3>{글제목[2]}</h3>        
        <hr/>
    </div>

    <div className='list'>
        <h3>{글제목[3]}</h3>
        <hr/>
    </div>
    
    <div className='list'>
        <h3>{글제목[4]}</h3>
        <hr/>
    </div>
    
    <div className='list'>
        <h3>{글제목[5]}</h3>
        <hr/>
    </div>
    
    <div className='list'>
        <h3>{글제목[6]}</h3>
        <hr/>
    </div>
    
    <div className='list'>
        <h3>{글제목[7]}</h3>
        <hr/>
    </div>
    
    <div className='modal'>
      <h2>아직 갈 곳이 많다</h2>
      <p>요즘 날씨 정말 좋던데</p>
    </div>
    </div>
  );
}

export default App;
