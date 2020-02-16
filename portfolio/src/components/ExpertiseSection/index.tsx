import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

type Direction = 'left' | 'right';
type Stack = {
  id: number,
  src: any,
  alt: string,
  title: string;
};

const stacks: Stack[] = [
  { id: 0, src: require('assets/images/web.jpg'), alt: "Web Development", title: 'Web' },
  { id: 1, src: require('assets/images/mobile.jpg'), alt: "iOS apps", title: 'Mobile' },
];

const ExpertiseSection = () => {
  const [direction, setDirection] = useState<Direction>('left');
  const [index, setIndex] = useState(0);

  // Content
  const isLeft = direction === 'left';

  const onSwitch = (d: Direction) => {
    const isLeft = d === 'left';

    setDirection(d);
    setIndex(isLeft ? 0 : 1);
  }

  return (
    <div className={`ExpertiseSection-container ${direction}`}>
      <img
        className={`bg-${isLeft ? 'web' : 'mobile'}`}
        key={stacks[index].id}
        src={stacks[index].src}
        alt={stacks[index].alt}
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
        >
          <FontAwesomeIcon icon={faLaptop} />
        </span>
        <span
          className={!isLeft ? 'enabled' : ''}
          onClick={() => onSwitch('right')}
        >
          <FontAwesomeIcon icon={faMobileAlt} />
        </span>
      </div>
    </div>
  )
}

export default ExpertiseSection;
