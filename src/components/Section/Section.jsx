import propTypes from 'prop-types';
import { Container, Section, SectionTitle } from './Section.styled';

export const SectionComponent = ({ title, children }) => {
  return (
    <Section>
      <Container>
        <SectionTitle>{title}</SectionTitle>
      </Container>
      {children}
    </Section>
  );
};

Section.propTypes = {
  title: propTypes.string,
};
