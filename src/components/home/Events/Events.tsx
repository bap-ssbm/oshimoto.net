import Event from './Event';
import { events } from '../../../data/events-data';

export default function Events() {
  return (
    <div>
      <h2 className="text-[30px] mb-10">Recent Exhibitions</h2>
      <div>
        {events.map((evt, i) => (
          <Event key={i} {...evt} />
        ))}
      </div>
    </div>
  );
}
