import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(3)};
  min-width: 300px;

  background-color: ${props => props.theme.colors.pink};
  padding: ${props => props.theme.spacing(2)};
  border: 2px ${props => props.theme.colors.violet} solid;
`;

export const ButtonDelete = styled.button`
  padding: ${props => props.theme.spacing(2)};

  color: ${props => props.theme.colors.violet};
  font-size: ${props => props.theme.fontSizes.small};
  background-color: ${props => props.theme.colors.pink};
  border: 2px ${props => props.theme.colors.violet} solid;
  border-radius: 30px;
  transform: scale(0.9);
  transition: all 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1);
    background-color: ${props => props.theme.colors.violet};
    color: ${props => props.theme.colors.pink};
    border: 2px ${props => props.theme.colors.pink} solid;
  }
`;
