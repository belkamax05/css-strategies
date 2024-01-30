'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import EmotionShowcase from './EmotionShowcase';
import MuiStylesShowcase from './MuiStylesShowcase';
import SassShowcase from './SassShowcase';
import StyleXShowcase from './StyleXShowcase';
import StyledComponentsShowcase from './StyledComponentsShowcase';
import TailwindShowcase from './TailwindShowcase';
import styles from './styles.module.scss';

const showcases = {
  ['sass']: SassShowcase,
  ['mui-styles']: MuiStylesShowcase,
  ['styled-components']: StyledComponentsShowcase,
  ['emotion']: EmotionShowcase,
  ['styleX']: StyleXShowcase,
  ['tailwind']: TailwindShowcase,
};

type ShowcaseKey = keyof typeof showcases;
const showcaseNames = Object.keys(showcases) as ShowcaseKey[];

const Showcase = ({ name }: { name: ShowcaseKey }) => {
  const Component = showcases[name];
  return (
    <div className={styles['showcase']}>
      <h2 className={styles['title']}>Showcase: {name}</h2>
      <Component />
    </div>
  );
};

const StyleDemos = () => {
  const { get: getParam } = useSearchParams();
  const showcase = getParam('showcase') as ShowcaseKey | 'all';

  return (
    <div className={styles['root']}>
      <div className={styles['links']}>
        <Link href={`/`}>NONE</Link>
        <Link href={`/?showcase=all`}>ALL</Link>
        {showcaseNames.map((name) => {
          return (
            <Link href={`/?showcase=${name}`} key={name}>
              {name}
            </Link>
          );
        })}
      </div>
      {showcase === 'all' &&
        showcaseNames.map((name) => <Showcase key={name} name={name} />)}
      {showcase !== 'all' &&
        showcaseNames.map(
          (name) => name === showcase && <Showcase key={name} name={name} />,
        )}
    </div>
  );
};

export default StyleDemos;
