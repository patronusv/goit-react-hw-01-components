import styled from 'styled-components';
const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  width: 200px;
  background-color: #eeeeee;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 4px #777777;
  .status {
    margin-right: 10px;
  }
  .avatar {
    margin-right: 15px;
  }
  .name {
    font-size: 20px;
    font-weight: 700;
  }
`;
export default Li;
