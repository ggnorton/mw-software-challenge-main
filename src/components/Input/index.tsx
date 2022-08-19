import React from "react";
import { InputLabel } from "./styles";

interface Props {
  title?: string
  type?: string
  name?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ title, type = 'text', onChange, name, value }: Props) {
  return (
    <InputLabel>
      <span>{title}</span>
      <input title={title} value={value} type={type} name={name} onChange={onChange} />
    </InputLabel>
  )
}