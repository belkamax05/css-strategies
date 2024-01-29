'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import SassShowcase from './SassShowcase';
import StyleXShowcase from './StyleXShowcase';
import StyledComponentsShowcase from './StyledComponentsShowcase';
import styles from './styles.module.scss';

const showcases = {
  ['sass']: SassShowcase,
  ['styled-components']: StyledComponentsShowcase,
  ['styleX']: StyleXShowcase,
};

type ShowcaseKey = keyof typeof showcases;
const showcaseNames = Object.keys(showcases) as ShowcaseKey[];

const StyleDemos = () => {
  const { get: getParam } = useSearchParams();
  const showcase = getParam('showcase') as ShowcaseKey;
  const Component = showcases[showcase] || null;

  return (
    <div className={styles['root']}>
      <div className={styles['links']}>
        <Link href={`/`}>NONE</Link>
        {showcaseNames.map((showcase) => {
          return (
            <Link href={`/?showcase=${showcase}`} key={showcase}>
              {showcase}
            </Link>
          );
        })}
      </div>
      {Component && (
        <div className={styles['showcase']}>
          <h2 className={styles['title']}>Showcase: {showcase}</h2>
          <Component />
        </div>
      )}
    </div>
  );
};

export default StyleDemos;
