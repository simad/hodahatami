import React from "react"
import { SocialIcon } from 'react-social-icons';

import "./socialIcons.css"

const SocialIcons = () => {
  return (
    <div className="social-icons">
        <SocialIcon className="social-icon" url="https://linkedin.com/in/hoda-hatami" bgColor="#202020" target="_blank" rel="noreferrer"/>
        <SocialIcon className="social-icon" url="https://pinterest.com/hshatami" bgColor="#202020" target="_blank" rel="noreferrer"/>
        <SocialIcon className="social-icon" url="mailto://hoda.hatami@gmail.com" bgColor="#202020" target="_blank" rel="noreferrer"/>
    </div>
  )
}

export default SocialIcons
