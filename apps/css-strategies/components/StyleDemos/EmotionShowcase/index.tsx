import { Button, Buttons, Root } from './styled';

/**
 * Emotion
 * @link https://emotion.sh
 * @pros supported by Material UI out of box
 * @pros separate styling component from functional component
 * @pros great support of TypeScript, built-in intellisense
 * @cons creating component for each style definition might be overkill
 */
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
