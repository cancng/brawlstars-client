import React, { useState } from 'react';
import { Col, Preloader, Row } from 'react-materialize';
import { useStoreActions, useStoreState } from 'easy-peasy';

const ClubForm = () => {
  const [clubTag, setClubTag] = useState('');

  // Redux Store Actions
  const fetchClub = useStoreActions((actions) => actions.club.fetchItems);
  const setLastClub = useStoreActions((actions) => actions.club.setLastClub);
  const setError = useStoreActions((actions) => actions.club.setErr);

  // Redux Store States
  const clubStore = useStoreState((state) => state.club.items);
  const isFetching = useStoreState((state) => state.club.loading);
  const isErr = useStoreState((state) => state.club.err);
  const formOnSubmit = (e) => {
    e.preventDefault();
    if (!clubTag) {
      setError({ msg: 'Club tag can not be empty', active: true });
      return;
    }
    if (!clubTag.startsWith('#')) {
      setError({ msg: 'Club tag must start with #', active: true });
      return;
    }
    const isClubExistInStore = clubStore.find(
      (brawler) => brawler.tag === clubTag
    );
    if (isClubExistInStore) {
      setLastClub(isClubExistInStore);
      /*console.log(
        'already in store, fetching from store...',
        isClubExistInStore
      );*/
    } else {
      fetchClub(clubTag);
      // console.log('new club detected, fetching...');
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
              id='clubTag'
              placeholder='#XXXXXXXX'
              onChange={(event) => setClubTag(event.target.value)}
            />
            <label htmlFor='playerTag'>Club Tag</label>
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
      </Col>
    </Row>
  );
};

export default ClubForm;
