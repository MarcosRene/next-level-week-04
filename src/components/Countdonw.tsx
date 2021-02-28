import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdonwContext';
import styles from '../styles/components/Countdonw.module.css';

export function Countdonw() {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountdonw,
    resetCountdonw,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdonwContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdonwButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdonwButton} ${styles.countdonwButtonActive}`}
              onClick={resetCountdonw}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdonwButton}
              onClick={startCountdonw}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
