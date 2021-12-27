import React, { Fragment } from 'react';
import classes from './App.module.css';

const Item = props => {
  const { title, description } = props.item;

  const onClick = () => {
    console.log('Item.js: onClick', props.item.id);
    props.onClick(props.item);
  };

  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const mediaQueryMatches = mediaQuery.matches;
  const mainClassItem = mediaQueryMatches ? classes['main__item'] : classes['side__item'];
  const mainClassItemImg = mediaQueryMatches
    ? classes['main__item__img']
    : classes['side__item__img'];
  const mainClassItemDetails = mediaQueryMatches
    ? classes['main__item__details']
    : classes['side__item__details'];

  return (
    <Fragment>
      <div className={mainClassItem} onClick={onClick}>
        <div className={mainClassItemImg}>{`image ${props.item.id}`}</div>
        <div className={mainClassItemDetails}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Item;
