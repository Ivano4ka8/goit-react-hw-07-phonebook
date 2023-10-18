import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  margin: 0 auto;

  @media (min-width: 320px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding-left: ${props => props.theme.spacing(4)};
    padding-right: ${props => props.theme.spacing(4)};
  }

  @media (min-width: 1280) {
    width: 1280px;
  }
`;

export const Section = styled.section`
  padding-top: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(10)};
`;

export const SectionTitle = styled.h1`
  font-weight: 900;
  font-size: ${props => props.theme.fontSizes.large};
  text-align: center;
  background-color: ${props => props.theme.colors.pink};
  border-radius: 50%;
  min-height: 50px;

  text-transform: uppercase;
  text-shadow: 1px 1px 0px #957dad, 1px 2px 0px #957dad, 1px 3px 0px #957dad,
    1px 4px 0px #957dad, 1px 5px 0px #957dad, 1px 6px 0px #957dad,
    1px 10px 5px rgba(16, 16, 16, 0.5), 1px 15px 10px rgba(16, 16, 16, 0.4),
    1px 20px 30px rgba(16, 16, 16, 0.3), 1px 25px 50px rgba(16, 16, 16, 0.2);
`;
