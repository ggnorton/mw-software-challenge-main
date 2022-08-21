import FullCalendar, { EventSourceInput } from "@fullcalendar/react";
import React, { useEffect, useState } from "react";
import { EventType } from "../../types/event";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Undefinable } from '../../types/common';

type Props = {
  events: Undefinable<EventType[]>;
  onView: (id: number | string) => void
};

function getStatusColor(status) {
  switch(status) {
    case 'done':
      return 'green'
    case 'in-progress':
      return 'blue'
    default:
      return undefined
  }
}

export default function Calendar({ events, onView }: Props) {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    setCalendarEvents(
      events.map((event) => {
        return {
          id: event.id,
          title: event.title,
          start: event.start_time,
          end: event.end_time,
          color: getStatusColor(event.status), //@todo: bonus! Change color based on status!
        };
      })
    );
  }, [events, onView]);

  return (
    <div>
      <h1>Calendar</h1>
      <FullCalendar
        eventClick={({event}) => onView(+event.id)}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents as EventSourceInput}
      />
    </div>
  );
}
