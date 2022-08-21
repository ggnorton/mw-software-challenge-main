import { EventStatus } from "./event.utils";

export interface EventType {
  id: number,
  title: string,
  start_time: string,
  end_time: string,
  status: EventStatus,
  address: string,
}
