import styled from 'styled-components';

export const Container = styled.div`
  height: 70%;
  min-width: 280px;

  display: flex;
  flex-direction: column;

  border-radius: 30px;
  background: white;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.1);
`;

export const RecipesContainer = styled.div.attrs({ className: 'sscroll' })`
  overflow-y: auto;
  border-radius: 30px;
`;

export const RecipeContainer = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;

  column-gap: 18px;

  padding: 10px 20px;
  width: 100%;
  background-color: transparent;
  border: none;

  transition: all 100ms ease-in-out;

  ${({ isActive }) =>
    isActive
      ? {
          boxShadow: 'inset 0 4px 8px 4px rgba(0, 0, 0, 0.1);',
        }
      : {}}

  &:hover {
    box-shadow: inset 0 4px 8px 4px rgba(0, 0, 0, 0.1);
  }

  &:first-child {
    border-radius: 30px 30px 0 0;
  }

  &:last-child {
    border-radius: 0 0 30px 30px;
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