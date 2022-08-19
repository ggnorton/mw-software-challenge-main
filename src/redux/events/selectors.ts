import { createSelector } from "reselect";

export const baseSelector = ({ events }) => events;

export const eventsSelector = createSelector(
  baseSelector,
  ({ events }) => events,
);