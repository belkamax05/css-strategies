import { Button, Buttons, Root } from './styled';

const EmotionShowcase = () => {
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

export default EmotionShowcase;
