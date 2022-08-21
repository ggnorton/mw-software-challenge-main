import React, { useState } from "react";
import Modal, { ModalProps } from '../Modal';
import DatePicker from 'react-datepicker'
import Input from "../Input";
import { ContentContainer, InputLabel, FlexContainer } from './styles';
import moment from 'moment'
import { IEventForm } from "../../pages/Home";

interface Props extends ModalProps {
    onFormSubmit: () => void
    form: IEventForm
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onDateChange: (value: Date, name: string) => void
    onDelete: (id: number) => void
    onEdit: () => void
    onCancelEdit: () => void
    edit?: boolean
};

export default function EventModal ({
  onFormSubmit,
  open,
  onClose,
  form,
  onDelete,
  onEdit,
  onCancelEdit,
  onInputChange,
  onDateChange,
  edit = false
}: Props) {

  const timeFormat = "MMM Do YY h:mm"

  const [confirm, setConfirm] = useState(false)

  const confirmDelete = () => {
    if (!confirm) {
      setConfirm(true)
      return
    }

    onDelete(form.id)
    setConfirm(false)
  }

  const readContent = (
    <React.Fragment>
      <div>
        <p>Event Title</p>
        <p>{form.title}</p>
      </div>
      <div>
        <span>{moment(form.start_time).format(timeFormat)} - {moment(form.end_time).format(timeFormat)}</span>
      </div>
      <FlexContainer>
        <button onClick={() => confirmDelete()}>{confirm ? 'Confirm Delete' : 'Delete Event'}</button>
        <button onClick={() => onEdit()}>Edit event</button>
      </FlexContainer>
    </React.Fragment>
  )

  const editContent = (
    <React.Fragment>
      <Input name="title" title="Event Title" value={form.title} onChange={onInputChange} />
      <FlexContainer>
        <InputLabel title="Event Start Date">
          <span>Event Start Date</span>
          <DatePicker
            dateFormat="MMM dd hh:mm"
            minDate={new Date()}
            selected={form.start_time}
            showTimeInput
            onChange={(val) => onDateChange(val, 'startDate')}
          />
        </InputLabel>
        <InputLabel title="Event Start Date">
          <span>Event End Date</span>
          <DatePicker
            dateFormat="MMM dd hh:mm"
            minDate={form.start_time}
            minTime={form.start_time}
            selected={form.end_time}
            showTimeInput
            onChange={(val) => onDateChange(val, 'endDate')}
          />
        </InputLabel>
      </FlexContainer>
      <FlexContainer>
        {form.id &&
          <button onClick={() => onCancelEdit()}>
            Cancel Edit
          </button>
        }
        <button type="submit" onClick={onFormSubmit}>
          {form.id ? 'Save Changes' : 'Add Event'}
        </button>
      </FlexContainer>
    </React.Fragment>
  )
  return (
    <Modal open={open} onClose={onClose}>
      <ContentContainer>
        {edit ? editContent : readContent}
      </ContentContainer>
    </Modal>
  )
}
