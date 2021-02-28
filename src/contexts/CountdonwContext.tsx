import { createContext, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';
import { CountdownContextData } from './types';

type CountdownCountdown = {
  children: React.ReactNode;
};

let countdonwTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdonwProvider({ children }: CountdownCountdown) {
  const { startNewChallenges } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdonw() {
    setIsActive(true);
  }

  function resetCountdonw() {
    clearTimeout(countdonwTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.05 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdonwTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenges();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountdonw,
        resetCountdonw,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
