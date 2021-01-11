import styled from 'styled-components';
import randomRGB from '../../../utils/randomRGB.js';
const Li = styled.li`
  padding: 5px;
  width: calc(100% / 5);
  background-color: ${randomRGB};

  .label,
  .percentage {
    width: min-content;
    display: block;
    padding: 10px;
  }
  .label {
    font-size: 14px;
  }
  .percentage {
    font-weight: 700;
    font-size: 18px;
  }
`;
export default Li;
