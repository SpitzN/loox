import ItemList from './ItemList';
import classes from './App.module.css';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Main = props => {
  // const { items } = props;
  // console.log('Main.js: items', items);
  // const main = items[0];
  // const itemsForSidebar = items.filter(item => item.id !== main.id);
  const main = useSelector(state => state.loox.mainLoox);

  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const mediaQueryMatches = mediaQuery.matches;
  const mainClassName = mediaQueryMatches ? classes['app__main'] : classes['main__sidebar'];

  return (
    <Fragment>
      <main className={classes['app__main']}>
        <section className={classes['main__item']}>
          <div className={classes['main__item__img']}>{`image ${main.id}`}</div>
          <div className={classes['main__item__details']}>
            <h1>{main.title}</h1>
            <p>{main.description}</p>
          </div>
        </section>
        <section className={mainClassName}>
          <ItemList />
        </section>
      </main>
    </Fragment>
  );
};

export default Main;
