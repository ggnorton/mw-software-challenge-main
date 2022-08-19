import React from "react";
import { EventType } from "../../types/event";
import { EventListWrapper } from './styles';
import moment from 'moment'

type Props = {
  events?: EventType[] | undefined;
  onView: (id: number | string) => void
};

export default function EventList({ onView, events }: Props) {
  const timeFormat = "MMM Do YY h:mm"

  if (!events) {
    return <p>No events.</p>;
  }

  return (
    <EventListWrapper>
      <h1>Event List</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id} onClick={() => onView(event.id)}>
            <p>{event.id} {event.title}</p>
            <p>{moment(event.start_time).format(timeFormat)} - {moment(event.end_time).format(timeFormat)}</p>
          </li>
        ))}
      </ul>
    </EventListWrapper>
  );
}
