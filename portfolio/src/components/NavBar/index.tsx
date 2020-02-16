import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

import { SNS_FB, SNS_TWITTER, SNS_IG, SNS_LINKEDIN } from 'utils/constants';

import './index.scss';

type SNS = {
  icon: IconDefinition,
  link: string,
}

const NavBar = () => {
  const onClickSNS = (link: string) => {
    window.open(link, '_blank')?.focus();
  }

  const renderSNSLinks = () => {
    const items: SNS[] = [
      { icon: faFacebookF, link: SNS_FB },
      { icon: faInstagram, link: SNS_IG },
      { icon: faTwitter, link: SNS_TWITTER },
      { icon: faLinkedinIn, link: SNS_LINKEDIN },
    ]

    return items.map((item, index) => (
      <span key={index} onClick={() => onClickSNS(item.link)}>
        <FontAwesomeIcon icon={item.icon} />
      </span>
    ));
  }

  return (
    <div className="NavBar-container">
      <div className="menus">
        <span className="brand">BTCALLS</span>
      </div>

      <div className="sns">
        {renderSNSLinks()}
      </div>
    </div>
  )
}

export default NavBar;
