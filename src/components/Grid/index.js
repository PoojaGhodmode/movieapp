//styles
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ header, children,desc }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}
      </Content>
      
    </Wrapper>
  );
};

export default Grid;
