import { useEffect, useState } from 'react'
import './App.css'
import { onclick } from './utils/gacha';
import { onclickNext } from './utils/next';

function App() {

  const [timeCount, setTimeCount] = useState(15);
  const [score, setScore] = useState(0);
  const [normal, setNormal] = useState(0);
  const [rea, setRea] = useState(0);
  const [superRea, setSuperRea] = useState(0);
  const [legendRea, setLegendRea] = useState(0);

  const [chara, setChara] = useState("");
  const [bgColor, setBgColor] = useState("white");

  const [prevScore, setPrevScore] = useState<number | null>(null);


  useEffect(() => {
    if (timeCount <= 0) return;
    const timer = setTimeout(() => {
      setTimeCount(timeCount - 1);
    }, 1000);
    return () => clearTimeout(timer); //これのおかげでtimerが重複しない
  }, [timeCount]);


  const onClick = () => {
    onclick(timeCount, {
      setNormal,
      setRea,
      setSuperRea,
      setLegendRea,
      setScore,
      setChara,
      setBgColor
    });
  }

  const onClickNext = () => {
    onclickNext(timeCount, score, {
      setTimeCount,
      setPrevScore,
      setScore,
      setNormal,
      setRea,
      setSuperRea,
      setLegendRea,
      setChara,
      setBgColor
    });
  }


  return (
    <>
      <div id="gatya-container" style={{background: timeCount === 0 ? score >= 250 ? "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)" : "white" : bgColor}}>
          <h1 id="title">ガチャ連打</h1>
          <div id="explain">
              <p>連打してレアキャラを引きまくれ！</p>
              <p>ノーマル😘：1点(50%)  レア👿：2点(30%)<br />スーパーレア🤖：10点(15%)  レジェンドレア🐉：100点(5%)</p>
          </div>
          
          <button id="btn" onClick={onClick}>押せ！</button>

          <div id="countmessage">残り時間：<span id="countdown">{timeCount}</span>秒</div>
          <progress id="timebar" value={timeCount} max="15"></progress>

          <div id="result">
              <div id="s">
                  スコア：
                  <span id="score">{score}</span>
                  <button id="next" onClick={onClickNext}>もう一度</button>
              </div>
              {timeCount > 0 && <div id="chara">{chara ? chara : "ガチャ結果"}</div>}
              {timeCount === 0 && (
                <div>
                  <div id="normal">ノーマル😘:{normal}体</div>
                  <div id="rea">レア👿:{rea}体</div>
                  <div id="superrea">スーパーレア🤖:{superRea}体</div>
                  <div id="legendrea">レジェンドレア🐉:{legendRea}体</div>
                </div>
              )}              
              <div>前回のスコア：<span id="maescore">{prevScore ?? "なし"}</span></div>
          </div>
      </div>
    </>
  )
}


export default App;