import styled from 'styled-components';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../styles/styleImport';

const Root = styled.div`
  padding: 5px;
`;

const Buttons = styled.div`
  & > button {
    margin-right: 10px;
  }
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857;
  margin-bottom: 0;
  padding: 6px 12px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
`;

const PrimaryButton = styled(Button)`
  color: white;
  background-color: ${COLOR_PRIMARY};
`;

const SecondaryButton = styled(Button)`
  color: white;
  background-color: ${COLOR_SECONDARY};
`;

const StyledComponentsShowcase = () => {
  return (
    <Root>
      <Buttons>
        <Button>Default button</Button>
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
      </Buttons>
    </Root>
  );
};

export default StyledComponentsShowcase;
