import React from 'react';
import { useGetLooxQuery } from '../features/looxAPI';
import Main from './Main';
import { useDispatch } from 'react-redux';
import { setLooxItems, setLooxSuccess, setMainLoox } from '../features/looxSlice';
import { useSelector } from 'react-redux';
import classes from './App.module.css';

function App() {
  const { data = [], loading, error } = useGetLooxQuery();
  const looxLoading = useSelector(state => state.loox.looxLoading);
  const dispatch = useDispatch();

  const main = data[0];

  if (!loading && !error && data.length > 0) {
    dispatch(setMainLoox(main));
    dispatch(setLooxItems(data));
    dispatch(setLooxSuccess());
  }

  return (
    <div className={classes.app}>
      <header className={classes['app__header']}>
        <h1>Loox</h1>
      </header>
      {loading && <div>Loading...</div>}
      {error && <div>Error!</div>}
      {!looxLoading && <Main />}
    </div>
  );
}

export default App;
