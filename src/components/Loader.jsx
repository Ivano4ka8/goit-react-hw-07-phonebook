import { Grid } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Grid
        height="80"
        width="80"
        color="#ab11ab"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{ textAlign: 'center' }}
        wrapperClass=""
        visible={true}
      ></Grid>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #c2c2c270;
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
`;
