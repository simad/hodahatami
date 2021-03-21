import React from "react"
import { SocialIcon } from 'react-social-icons';

import "./socialIcons.css"

const SocialIcons = () => {
  return (
    <div className="social-icons">
        <SocialIcon className="social-icon" url="https://linkedin.com/hoda-hatami" bgColor="#202020"/>
        <SocialIcon className="social-icon" url="https://pinterest.com/hodahatami" bgColor="#202020"/>
        <SocialIcon className="social-icon" url="mailto://hoda.hatami@gmail.com" bgColor="#202020"/>
    </div>
  )
}

export default SocialIcons
