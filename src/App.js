import './App.css';
import Confetti from 'react-confetti';
import ConfettiExplosion from 'react-confetti-explosion';
import Carousel from './components/Carousel/Carousel';
import { useState } from 'react';
import AnimatedLetters from './components/AnimatedLetters/AnimatedLetters';
import { ReactFloatingBalloons } from 'react-floating-balloons';
import chanda from './assets/music/chanda.mp3';

function App() {
  const [surprise, setSurprise] = useState(false);
  const [isCarouselDialog, setIsCarouselDialog] = useState(false);
  const sentence = "HAPPY BIRTHDAY ANKAN";
  const [audio, setAudio] = useState({
    audio: new Audio(chanda),
    isPlaying: false,
  });

  const changeState = (e) => {
    e.preventDefault();
    setSurprise(true);
    audio.audio.play();
  };

  const changeCarouselDialog = (e) => {
    e.preventDefault();
    setIsCarouselDialog(true)
  };

  const bigExplodeProps = {
    force: 0.6,
    duration: 5000,
    particleCount: 200,
    height: '100%',
    width: '100%'
  };

  return (
    <div className="App">
      {surprise ? (
        <>
          <div className='home-top'>
            {isCarouselDialog && (
              <Carousel setIsCarouselDialog={setIsCarouselDialog}/>
              )}
            <AnimatedLetters sentence={sentence}/>
            <div className=''>
              <button onClick={changeCarouselDialog}>Click Me</button>
            </div>
          </div>
          <ConfettiExplosion {...bigExplodeProps}/>
          <Confetti
            friction={0.99}
            wind={0.05}
            gravity={0.2}
          />
          <ReactFloatingBalloons
            count={5}
            msgText="Happy Birthday Ankan"
            colors={["yellow", "purple"]}
            popVolumeLevel={0.1}
          />
        </>
      ) : (
        <div className='btn'>
          <button onClick={changeState}>Click Me</button>
        </div>

      )}
    </div>
  );
}

export default App;
