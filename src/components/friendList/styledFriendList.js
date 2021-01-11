import styled from 'styled-components';
const Wrapper = styled.div`
  padding: 30px 0;
  .friend-list {
    margin: 0 auto;
    width: max-content;
  }
  .item:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export default Wrapper;
