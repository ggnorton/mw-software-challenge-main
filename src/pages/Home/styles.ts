import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  position: fixed;
  top: 0;
`

export const HomeContainer = styled.div`
  padding-top: 40px;
  display: flex;
  width: 100%;
  height: calc(100vh - 40px);
`;

export const EventListContainer = styled.div`
  width: 30%;
`;

export const CalendarContainer = styled.div`
  flex-grow: 1;
  overflow-x: auto;
`;
