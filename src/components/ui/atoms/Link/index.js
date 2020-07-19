import React from 'react';
import './styles.scss';

export default function Link({link, name}) {
  return (
    <a className="link" href={link}> {name}</a>
  )
}