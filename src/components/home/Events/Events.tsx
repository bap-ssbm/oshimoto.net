import Event from './Event';
import { events } from '../../../data/events-data';

export default function Events() {
  return (
    <div>
      {events.map((evt, i) => (
        <Event key={i} {...evt} />
      ))}
    </div>
  );
}
