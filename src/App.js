import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [글제목, 글제목변경] = useState(['보태니컬한 인테리어 카페','초여름에 가기 좋은 루프탑','서울에서 하기 좋은 산책 코스','한강뷰 레스토랑','힙한 감성의 인테리어','수도권 산','한강 유람선 타기','둘이 먹다 하나 죽어도 모르는 맛집']);
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
        <h4><a href="https://map.naver.com/v5/entry/place/1580543297?c=14127644.9197222,4515754.5759100,15,0,0,0,dh&placePath=%3Fentry=plt">
          <button className='blog-button'>합정 저스티나</button></a></h4>
          <h4><a href="https://m.place.naver.com/restaurant/1848488870/home">
          <button className='blog-button'>홍대 발코니가든</button></a></h4>
        <p>초록초록한 식물 인테리어로, 마음이 평안해지고 분위기도 몽글몽글해지는 나의 최애 카페</p>
        <hr/>
    </div>

    <div className='list'>
      <h3><a href="https://map.naver.com/v5/search/oktop/place/658074326?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14135261.6441852,4513905.6440083,15,0,0,0,dh">
        <button className='blog-button'>{글제목[1]}</button></a></h3>
        <p>남산타워가 눈앞에 보이는 야경맛집 루프탑! 이집 야경 잘하네!</p>
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
      <p>5월이 이렇게 좋은 적은 처음이야!</p>
    </div>
    </div>
  );
}

export default App;
