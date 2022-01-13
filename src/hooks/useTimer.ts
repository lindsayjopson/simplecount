import {
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';

const baseDate = +new Date(`04/25/2022`);

const useTimer = () => {
  const timerRef = useRef(0);
  const intervalRef = useRef<any>();

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const updateTimeValues = useCallback((difference: number) => {
    var d = Math.floor(difference / (1000 * 60 * 60 * 24));
    var h = Math.floor((difference / (1000 * 60 * 60)) % 24);
    var m = Math.floor((difference / 1000 / 60) % 60);
    var s = Math.floor((difference / 1000) % 60);

    setDay(d);
    setHour(h);
    setMinute(m);
    setSecond(s);
  }, []);

  const calculateEndTime = useCallback(() => {
    let difference = baseDate - +new Date();

    timerRef.current = difference;
  
  }, []);

  const run = useCallback(() => {
    decreaseNum();
    intervalRef.current = setInterval(decreaseNum, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const decreaseNum = useCallback(() => {
    if (timerRef.current >= 0) {
      updateTimeValues(baseDate - +new Date());
      timerRef.current = timerRef.current - 1;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    calculateEndTime();
    run();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    day,
    hour,
    minute,
    second,
  };
};

export default useTimer;
