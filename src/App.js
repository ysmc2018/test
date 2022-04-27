import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','남자 마스크팩 추천','아무글1','아무글2','아무글3','아무글4','아무글5','아무글6','아무글7']);
  let [따봉, 따봉변경] = useState(0); 


  return (
    <div><div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
          <hr/>
      </div>

    </div>

    <div className='list'>
    <h3>{ 글제목[0] } <span onClick={() => {따봉변경(따봉+1)}}><span className='emogi'>👍</span></span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
    </div>

    <div className='list'>
      <h3><a href="https://map.naver.com/v5/search/%EA%B0%95%EB%82%A8%EC%9A%B0%EB%8F%99/place/1820911105?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14139355.2737438,4511430.4814907,15,0,0,0,dh">
        <button className='blog-button'>{글제목[1]}</button></a></h3>
        <p>2월 15일 발행</p>
        <hr/>
    </div>

    <div className='list'>
        <h3>{글제목[2]}</h3>
        <p>2월 14일 발행</p>
        <hr/>
    </div>

    <div className='list'>
        <h3>{글제목[3]}</h3>
        <p>2월 14일 발행</p>
        <hr/>
    </div>
    
    <div className='list'>
        <h3>{글제목[4]}</h3>
        <p>2월 14일 발행</p>
        <hr/>
    </div>
    
    <div className='list'>
        <h3>{글제목[5]}</h3>
        <p>2월 14일 발행</p>
        <hr/>
    </div>
    
    <div className='list'>
        <h3>{글제목[6]}</h3>
        <p>2월 14일 발행</p>
        <hr/>
    </div>
    
    <div className='list'>
        <h3>{글제목[7]}</h3>
        <p>2월 14일 발행</p>
        <hr/>
    </div>
    
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </div>
  );
}

export default App;
