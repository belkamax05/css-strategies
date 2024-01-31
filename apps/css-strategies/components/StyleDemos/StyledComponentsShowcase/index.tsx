import { Button, Buttons, Root } from './styled';

/**
 * styled-components
 * @link https://styled-components.com/
 * @pros / @cons see "EmotionShowcase", it's same approach
 */
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
