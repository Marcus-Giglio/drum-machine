import useEventListener from '@use-it/event-listener';
import { useEffect, useMemo, useRef, useState } from 'react';

type Iprops = {
  power: boolean;
  name: string;
  padBtn: string;
  volume: number;
  audio: string;
  setDisplay: (display: string) => void;
};

const MusicPad = (props: Iprops) => {
  const [color, setColor] = useState<string>('');
  const [boxShadow, setBoxShadow] = useState<string>('');
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = props.volume;
    }
  }, [props.volume]);

  const changeColor = () => {
    setColor('rgb(255 165 0)');
    setBoxShadow('orange 0 3px 0 0');
    setTimeout(() => {
      setColor('');
      setBoxShadow('black 3px 3px 5px');
    }, 100);
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();

      props.setDisplay(props.padBtn);
    }
  };

  useEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === props.name) {
      changeColor();
      playAudio();
    }
  });

  return (
    <div
      className="col-2 col-md-3 pad px-5 py-4 me-3 mb-3 text-uppercase d-flex justify-content-center"
      style={{ backgroundColor: color, boxShadow: boxShadow }}
      onClick={() => {
        if (props.power) {
          changeColor();
          playAudio();
        }
      }}
    >
      <audio ref={audioRef} src={props.audio}></audio>
      {props.name}
    </div>
  );
};

export default MusicPad;
