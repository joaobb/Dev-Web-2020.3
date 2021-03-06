import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Sidebar = styled.div`
  height: 70%;
  width: 380px;

  & > header {
    display: flex;
    justify-content: space-between;
  }
`;

export const Container = styled.div.attrs({ className: 'shadowed' })`
  height: calc(${({ fullSize }) => (fullSize ? '100% - 68px' : '50% - 40px')});

  display: flex;
  flex-direction: column;

  border-radius: 30px;
  background: white;

  &:last-child {
    margin-top: ${({ fullSize }) => (fullSize ? '' : '12px')};
  }
`;

export const RecipesContainer = styled.div.attrs({ className: 'sscroll' })`
  overflow-y: auto;
  border-radius: 30px;
  height: -webkit-fill-available;
`;

export const RecipeContainer = styled(Link).attrs(({ isActive }) => ({
  className: isActive ? 'shadowed--inset' : '',
}))`
  display: flex;
  align-items: center;
  column-gap: 18px;

  padding: 10px 20px;
  width: 100%;
  background-color: transparent;
  border: none;

  text-decoration: none;
  color: #2c2c2c;

  transition: all 100ms ease-in-out;

  &:hover {
    box-shadow: inset 0 4px 8px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Preview = styled.img`
  width: 68px;
  height: 68px;

  border-radius: 50%;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: left;
  font-family: 'Raleway', sans-serif;
`;

export const Cuisine = styled.small`
  text-transform: capitalize;
`;
