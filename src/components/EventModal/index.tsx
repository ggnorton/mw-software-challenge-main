import React, { useState } from "react";
import Modal, { ModalProps } from '../Modal';
import DatePicker from 'react-datepicker'
import Input from "../Input";
import { InputLabel } from "./styles";
import moment from 'moment'
import { IEventForm } from "../../pages/Home";

interface Props extends ModalProps {
    onFormSubmit: () => void
    form: IEventForm
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onDateChange: (value: Date, name: string) => void
    onDelete: (id: number | string) => void
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
        <span>{moment(form.startDate).format(timeFormat)} - {moment(form.endDate).format(timeFormat)}</span>
      </div>
      <div style={{display: 'flex'}}>
        <button onClick={() => confirmDelete()}>{confirm ? 'Confirm Delete' : 'Delete Event'}</button>
        <button onClick={() => onEdit()}>Edit event</button>
      </div>
    </React.Fragment>
  )

  const editContent = (
    <React.Fragment>
      <Input name="title" title="Event Title" value={form.title} onChange={onInputChange} />
      <div style={{display: 'flex'}}>
        <InputLabel title="Event Start Date">
          <span>Event Start Date</span>
          <DatePicker
            dateFormat="MMM dd hh:mm"
            minDate={new Date()}
            selected={form.startDate}
            showTimeInput
            onChange={(val) => onDateChange(val, 'startDate')}
          />
        </InputLabel>
        <InputLabel title="Event Start Date">
          <span>Event End Date</span>
          <DatePicker
            dateFormat="MMM dd hh:mm"
            minDate={form.startDate}
            minTime={form.startDate}
            selected={form.endDate}
            showTimeInput
            onChange={(val) => onDateChange(val, 'endDate')}
          />
        </InputLabel>
      </div>
      <div style={{display: 'flex'}}>
        {form.id &&
          <button onClick={() => onCancelEdit()}>
            Cancel Edit
          </button>
        }
        <button type="submit" onClick={onFormSubmit}>
          {form.id ? 'Save Changes' : 'Add Event'}
        </button>
      </div>
    </React.Fragment>
  )
  return (
    <Modal open={open} onClose={onClose}>
      <div style={{backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        {edit ? editContent : readContent}
      </div>
    </Modal>
  )
}
