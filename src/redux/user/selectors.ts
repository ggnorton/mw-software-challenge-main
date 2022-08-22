import { createSelector } from "reselect";

export const baseUserSelector = ({ user }) => user;

export const userSelector = createSelector(
  baseUserSelector,
  ({ user }) => user,
);