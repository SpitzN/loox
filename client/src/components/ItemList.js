import Item from './Item';
import { useDispatch } from 'react-redux';
import { setMainLoox } from '../features/looxSlice';
import { Fragment } from 'react';
import classes from './App.module.css';
import { useSelector } from 'react-redux';

const ItemList = props => {
  const dispatch = useDispatch();

  const main = useSelector(state => state.loox.mainLoox);
  const items = useSelector(state => state.loox.looxItems);
  const itemsForSidebar = items.filter(item => item.id !== main.id);

  const onItemClick = item => {
    dispatch(setMainLoox(item));
  };

  return (
    <Fragment>
      <div className={classes['item__list']}>
        {itemsForSidebar.map(item => (
          <Item key={item.id} item={item} onClick={onItemClick} />
        ))}
      </div>
    </Fragment>
  );
};

export default ItemList;
