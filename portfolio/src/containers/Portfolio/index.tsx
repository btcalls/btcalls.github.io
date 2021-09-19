import React, { useMemo, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faLaptop, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import BasePage from 'components/BasePage';

import './index.scss';

type Direction = 'left' | 'right';
type Stack = {
  id: number,
  src: string,
  alt: string,
  title: string;
  icon: IconDefinition,
};

const stacks: Stack[] = [
  { id: 1,
    src: require('assets/images/mobile.jpg'),
    alt: 'iOS apps',
    title: 'Mobile',
    icon: faMobileAlt },
  { id: 0,
    src: require('assets/images/web.jpg'),
    alt: 'Web Development',
    title: 'Web',
    icon: faLaptop },
];

export default function Portfolio(): React.ReactElement {
  const [direction, setDirection] = useState<Direction>('left');
  const [index, setIndex] = useState(0);

  const current = useMemo(() => stacks[index], [index]);
  const isLeft = useMemo(() => direction === 'left', [direction]);

  const onSwitch = (d: Direction): void => {
    const isLeft = d === 'left';

    setDirection(d);
    setIndex(isLeft ? 0 : 1);
  };

  return (
    <BasePage>
      <div className={`ExpertiseSection-container ${direction}`}>
        <img
          className={`bg-${isLeft ? 'web' : 'mobile'}`}
          key={current.id}
          src={current.src}
          alt={current.alt}
        />

        {stacks.map((item, i) => (
          <div key={i} className={`text-container${index === i ? ' active' : ''}`}>
            <h1>{item.title}</h1>
            <h3>Development</h3>
          </div>
        ))}

        <div className="footer">
          <span
            className={isLeft ? 'enabled' : ''}
            onClick={() => onSwitch('left')}
            aria-hidden="true"
          >
            <FontAwesomeIcon icon={stacks[0].icon} />
          </span>
          <span
            className={!isLeft ? 'enabled' : ''}
            onClick={() => onSwitch('right')}
            aria-hidden="true"
          >
            <FontAwesomeIcon icon={stacks[1].icon} />
          </span>
        </div>
      </div>
    </BasePage>
  );
}
