import React, { useEffect, useState } from "react";
import { CalendarContainer, EventListContainer, HeaderContainer, HomeContainer } from "./styles";
import EventList from "../../components/EventList";
import Calendar from "../../components/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { eventsSelector } from "../../redux/events/selectors";
import { getEvents, createEvent, deleteEvent } from '../../redux/events/events';
import { createGlobalStyle } from 'styled-components'
import faker from "@faker-js/faker";

import "react-datepicker/dist/react-datepicker.css";
import { EventType, EventStatus } from '../../types/event';
import EventModal from "../../components/EventModal";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
`

const defaultEventForm: IEventForm = {
  id: null,
  title: '',
  startDate: new Date(),
  endDate: new Date(),
  status: 'pending',
  address: faker.address.streetAddress()
}

export interface Props {}

export interface IEventForm {
  id: number
  title: string
  startDate: Date
  endDate: Date
  status: keyof typeof EventStatus
  address: string
}

export function HomePage(props: Props) {
  const events = useSelector(eventsSelector);
  const dispatch = useDispatch();

  const [isCreationModalOpen, setCreationModal] = useState(false)
  const [editContent, setEditContent] = useState(true)
  const [eventForm, setEventForm] = useState(defaultEventForm)
  const [formCopy, setFormCopy] = useState(defaultEventForm)
  const [search, setSearch] = useState('')

  const searchEvents = events.filter(event => event.title.includes(search) || event.title === search)

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  useEffect(() => {
    setFormCopy(defaultEventForm)
  }, [isCreationModalOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setEventForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const changeDate = (value, name) => {
    setEventForm(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const openEditEvent = () => {
    setFormCopy(eventForm)
    setEditContent(true)
  }

  const cancelEditEvent = () => {
    setEventForm(formCopy)
    setFormCopy(defaultEventForm)
    setEditContent(false)
  }

  const openCreateEvent = () => {
    setEventForm(defaultEventForm)
    setEditContent(true)
    setCreationModal(true)
  }

  const openViewEvent = (id) => {
    const event: EventType = events.find(e => e.id === id)
    setEventForm({
      ...event,
      title: event.title,
      startDate: new Date(event.start_time),
      endDate: new Date(event.end_time),
    })
    setEditContent(false)
    setCreationModal(true)
  }

  const onDeleteEvent = (id) => {
    dispatch(deleteEvent(id))
    setEventForm(defaultEventForm)
    setCreationModal(false)
  }

  const submitForm = () => {
    const formattedForm = {
      ...eventForm,
      start_time: new Date(eventForm.startDate).toISOString(),
      end_time: new Date(eventForm.endDate).toISOString(),
    }

    dispatch(createEvent(formattedForm))
    setCreationModal(false)
  }

  if (!events) {
    return <p>Loading...</p>;
  }

  return (
    <HomeContainer>
      <GlobalStyle />
      <HeaderContainer>
        <button onClick={openCreateEvent}>
          Create Event
        </button>
        <input placeholder="Search Events" type="search" onChange={e => setSearch(e.target.value)} />
      </HeaderContainer>
      <EventListContainer>
        <EventList onView={openViewEvent} events={searchEvents} />
      </EventListContainer>
      <CalendarContainer>
        <Calendar onView={openViewEvent} events={searchEvents} />
      </CalendarContainer>
      <EventModal
        edit={editContent}
        form={eventForm}
        open={isCreationModalOpen}
        onDateChange={changeDate}
        onDelete={onDeleteEvent}
        onEdit={openEditEvent}
        onCancelEdit={cancelEditEvent}
        onInputChange={handleChange}
        onFormSubmit={submitForm}
        onClose={() => setCreationModal(false)}
      />
    </HomeContainer>
  );
}
