import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import MusicPad from './components/musicPad/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [power, setPower] = useState<boolean>(true);
  const [bank, setBank] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.3);
  const [display, setDisplay] = useState<string>('');

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    setDisplay('Volume: ' + Math.round(Number(e.target.value) * 100));
    setTimeout(() => {
      setDisplay('');
    }, 1000);
  };

  const handlePower = () => {
    setPower(!power);
    if (power) {
      setDisplay('');
    }
  };

  const handleBank = () => {
    if (power) {
      setBank(!bank);
      bank ? setDisplay('Heater Kit') : setDisplay('Abba Kit');
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-11 col-md-12 col-lg-9 col-xl-7 col-xxl-6 mx-auto drum-container position-relative">
            <div className="row">
              <div className="col-12 col-md-6 ps-md-4 pe-md-5 py-4 mt-4 mt-md-0">
                <div className="row flex-nowrap mx-auto mx-md-0">
                  <MusicPad
                    power={power}
                    volume={volume}
                    name={bank ? '1' : 'q'}
                    padBtn={bank ? 'Abba 1' : 'Heater 1'}
                    audio={bank ? '/audio/1.mp3' : '/audio/Heater-1.mp3'}
                    setDisplay={setDisplay}
                  />
                  <MusicPad
                    power={power}
                    volume={volume}
                    name={bank ? '2' : 'w'}
                    padBtn={bank ? 'Abba 2' : 'Heater 2'}
                    audio={bank ? '/audio/2.mp3' : '/audio/Heater-2.mp3'}
                    setDisplay={setDisplay}
                  />
                  <MusicPad
                    power={power}
                    volume={volume}
                    name={bank ? '3' : 'e'}
                    padBtn={bank ? 'Abba 3' : 'Heater 3'}
                    audio={bank ? '/audio/3.mp3' : '/audio/Heater-3.mp3'}
                    setDisplay={setDisplay}
                  />
                </div>
                <div className="row flex-nowrap mx-auto mx-md-0">
                  <MusicPad
                    power={power}
                    volume={volume}
                    name={bank ? '4' : 'a'}
                    padBtn={bank ? 'Abba 4' : 'Heater 4'}
                    audio={bank ? '/audio/4.mp3' : '/audio/Heater-4_1.mp3'}
                    setDisplay={setDisplay}
                  />
                  <MusicPad
                    power={power}
                    volume={volume}
                    name={bank ? '5' : 's'}
                    padBtn={bank ? 'Abba 5' : 'Clap'}
                    audio={bank ? '/audio/5.mp3' : '/audio/Heater-6.mp3'}
                    setDisplay={setDisplay}
                  />
                  <MusicPad
                    power={power}
                    volume={volume}
                    name={bank ? '6' : 'd'}
                    padBtn={bank ? 'Abba 6' : 'Open HH'}
                    audio={bank ? '/audio/6.mp3' : '/audio/Dsc_Oh.mp3'}
                    setDisplay={setDisplay}
                  />
                </div>
                <div className="row flex-nowrap mx-auto mx-md-0">
                  <MusicPad
                    power={power}
                    volume={volume}
                    name={bank ? '7' : 'z'}
                    padBtn={bank ? 'Abba 7' : "Kick n' Hat"}
                    audio={bank ? '/audio/7.mp3' : '/audio/Kick_n_Hat.mp3'}
                    setDisplay={setDisplay}
                  />
                  <MusicPad
                    power={power}
                    volume={volume}
                    name={bank ? '8' : 'x'}
                    padBtn={bank ? 'Abba 8' : 'Kick'}
                    audio={bank ? '/audio/8.mp3' : '/audio/RP4_KICK_1.mp3'}
                    setDisplay={setDisplay}
                  />
                  <MusicPad
                    power={power}
                    volume={volume}
                    name={bank ? '9' : 'c'}
                    padBtn={bank ? 'Abba 9' : 'Closed HH'}
                    audio={bank ? '/audio/9.mp3' : '/audio/Cev_H2.mp3'}
                    setDisplay={setDisplay}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 text-center p-5 pe-4">
                <div className="row">
                  <div className="col">
                    <p className="m-0">Power</p>
                    <div className="control mx-auto">
                      <div
                        className="inner"
                        style={power ? { float: 'right' } : { float: 'left' }}
                        onClick={handlePower}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="display">{display}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-11 mx-auto">
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.01}
                      value={volume}
                      onChange={(e) => {
                        if (power) {
                          handleVolume(e);
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="m-0">Bank</p>
                    <div className="control mx-auto">
                      <div
                        className="inner"
                        style={bank ? { float: 'right' } : { float: 'left' }}
                        onClick={handleBank}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="position-absolute end-0 top-0 px-2 py-1">
              <span className="me-2 fs-5 fw-bold fst-italic">FCC</span>
              <FontAwesomeIcon icon={faFreeCodeCamp} size="xl" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
