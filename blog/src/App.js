import logo from './logo.svg';
import './App.css';

function App() {
  // 대충 서버에서 가져온 실제 데이터라고 가정
  let post = '강남 우동 맛집';
  //변수에 있던 자료를 html에 넣고 싶다면 원래 아래의 방법대로 해야함
  //document.querySelector('h4').innerHTML = post;
  return (
    <div className="App">
      {/* JSX 문법1 : class 넣을 땐 className */}
      {/* JSX 문법2 : 데이터바인딩(=변수 넣기, 데이터를 html에 꽂아넣기) {중괄호} */}
      {/* JSX 문법3 : style 넣을 땐 style={ {스타일병:'값'} }*/}
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
