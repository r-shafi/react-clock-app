import { useEffect, useState } from 'react';
import '../styles/pages/clock.css';

// TODO: Make this a state so that user can customize
const clockOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  weekday: 'short',
  month: 'long',
  day: 'numeric',
};

export default function Clock() {
  const [parts, setParts] = useState(
    new Intl.DateTimeFormat('default', clockOptions).formatToParts(new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setParts(
        new Intl.DateTimeFormat('default', clockOptions).formatToParts(
          new Date()
        )
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="local">
        <span>
          <h1>
            {`${parts[6].value}:${parts[8].value}:${parts[10].value}`}{' '}
            <span>{`${parts[12].value}`}</span>
          </h1>
          <p>{`${parts[0].value}, ${parts[2].value} ${parts[4].value}`}</p>
        </span>
      </div>
      {/* if custom */}
      <button className="add-custom">+</button>
    </div>
  );
}
