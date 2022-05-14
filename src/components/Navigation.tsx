import { NavLink } from 'react-router-dom';
import '../styles/component/navigation.css';

const activeLink = (isActive: boolean) => (isActive ? 'active' : '');

export default function Navigation() {
  return (
    <nav>
      <NavLink className={({ isActive }) => activeLink(isActive)} to="alarm">
        Alarm
      </NavLink>
      <NavLink className={({ isActive }) => activeLink(isActive)} to="/">
        Clock
      </NavLink>
      <NavLink className={({ isActive }) => activeLink(isActive)} to="timer">
        Timer
      </NavLink>
      <NavLink
        className={({ isActive }) => activeLink(isActive)}
        to="stopwatch"
      >
        Stopwatch
      </NavLink>
    </nav>
  );
}
