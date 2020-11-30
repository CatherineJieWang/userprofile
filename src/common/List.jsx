import styled from "styled-components";
import {
  BP_TABLET} from './cssVars';
export const ListContainer = styled.div`
  padding: 80px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: ${BP_TABLET}) {
    padding: 30px;
  }
`;

export const ListCardContainer = styled.div`
  width: calc(50% - 15px);
  min-width: 640px;
  @media (max-width: ${BP_TABLET}) {
    width: 100%;
    min-width: 315px;
  }
`;
