import FullCalendar, { EventSourceInput } from "@fullcalendar/react";
import React, { useCallback, useEffect, useState } from "react";
import { EventType } from '../../types/events/event';
import { EventStatus } from "../../types/events/event.utils"

import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Undefinable } from '../../types/common';

type Props = {
  events: Undefinable<EventType[]>;
  onView: (id: number) => void
};

function getStatusColor(status) {
  switch(status) {
    case EventStatus:
      return 'green'
    case EventStatus.inProgress:
      return 'blue'
    default:
      return undefined
  }
}

export default function Calendar({ events, onView }: Props) {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const viewEvent = useCallback(({event}) => onView(+event.id), [onView])

  useEffect(() => {
    setCalendarEvents(() => (
      events.map((event) => {
        return {
          id: event.id,
          title: event.title,
          start: event.start_time,
          end: event.end_time,
          color: getStatusColor(event.status), //@todo: bonus! Change color based on status!
        };
      }))
    );
  }, [events, onView]);

  return (
    <div>
      <h1>Calendar</h1>
      <FullCalendar
        eventClick={viewEvent}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents as EventSourceInput}
      />
    </div>
  );
}
