import { Button, Buttons, Root } from './styled';

const StyledComponentsShowcase = () => {
  return (
    <Root>
      <Buttons>
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </Buttons>
    </Root>
  );
};

export default StyledComponentsShowcase;
