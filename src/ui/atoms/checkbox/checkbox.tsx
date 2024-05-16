import * as Styled from "./checkbox.styled";

const Checkbox = () => (
  <form>
    <Styled.Flex>
      <Styled.CheckboxRoot defaultChecked>
        <Styled.CheckboxIndicator>❌</Styled.CheckboxIndicator>
      </Styled.CheckboxRoot>
      <Styled.Label>Accept terms and conditions.</Styled.Label>
    </Styled.Flex>
  </form>
);

export default Checkbox;
