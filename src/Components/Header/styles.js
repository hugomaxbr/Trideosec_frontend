import styled from 'styled-components';

import colors from '../../Styles/Colors';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 0 30px;
  background: ${colors.orangeMain};

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  strong {
    color: ${colors.clear};
    font-size: 22px;
    font-weight: bold;
    padding-left: 20px;
  }
`;

