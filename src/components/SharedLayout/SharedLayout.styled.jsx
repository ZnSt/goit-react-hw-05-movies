import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyle = styled.header`
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const NavigationLink = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #9210e9;
  }
`;
