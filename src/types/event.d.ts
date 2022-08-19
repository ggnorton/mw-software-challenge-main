export interface EventType {
  id: number,
  title: string,
  start_time: string,
  end_time: string,
  status: keyof typeof EventStatus,
  address: string,
}

export enum EventStatus {
  pending = 'pending',
  done = 'done',
  inProgress = 'in-progress',
}