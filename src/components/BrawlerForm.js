import React, { useEffect, useState } from 'react';
import { Col, Preloader, Row } from 'react-materialize';
import { useStoreActions, useStoreState } from 'easy-peasy';

const BrawlerForm = () => {
  const [playerTag, setPlayerTag] = useState('');

  // Redux Store Actions
  const fetchBrawler = useStoreActions(
    (actions) => actions.brawlers.fetchItems
  );
  const setLastBrawler = useStoreActions(
    (actions) => actions.brawlers.setLastBrawler
  );
  const setError = useStoreActions((actions) => actions.brawlers.setErr);

  // Redux Store States
  const brawlerStore = useStoreState((state) => state.brawlers.items);
  const isFetching = useStoreState((state) => state.brawlers.loading);
  const isErr = useStoreState((state) => state.brawlers.err);

  const formOnSubmit = (e) => {
    e.preventDefault();
    if (!playerTag) {
      setError({ msg: 'Player tag can not be empty', active: true });
      return;
    }
    if (!playerTag.startsWith('#')) {
      setError({ msg: 'Player tag must start with #', active: true });
      return;
    }
    const isBrawlerExistInStore = brawlerStore.find(
      (brawler) => brawler.tag === playerTag
    );
    if (isBrawlerExistInStore) {
      setLastBrawler(isBrawlerExistInStore);
      console.log(
        'already in store, fetching from store...',
        isBrawlerExistInStore
      );
    } else {
      fetchBrawler(playerTag);
      console.log('new brawler detected, fetching...');
    }
  };

  return (
    <Row>
      <Col s={12} style={{ marginTop: '15px' }}>
        <form onSubmit={formOnSubmit}>
          <div className='input-field'>
            {isErr.active && (
              <div className='materialert danger'>{isErr.msg}</div>
            )}
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='playerTag'
              placeholder='#XXXXXXXXX'
              onChange={(event) => setPlayerTag(event.target.value)}
            />
            <label htmlFor='playerTag'>Player Tag</label>
          </div>
          <div className='input-field center'>
            {isFetching ? (
              <Preloader size='small' color='red' />
            ) : (
              <button className='btn' type='submit'>
                Send
              </button>
            )}
          </div>
        </form>
        {/*<span>{playerTag}</span>*/}
      </Col>
    </Row>
  );
};

export default BrawlerForm;
