import axios from 'axios';

import { createStore, action, thunk } from 'easy-peasy';

const apiUrl = process.env.REACT_APP_API_URL;
const initialState = {
  brawlers: {
    items: [],
    lastBrawler: {},
    loading: false,
    err: { msg: '', active: false },
    addItems: action((state, payload) => {
      state.items.push(payload);
    }),
    fetchingItems: action((state) => {
      state.loading = true;
    }),
    fetchingItemsDone: action((state) => {
      state.loading = false;
    }),
    setLastBrawler: action((state, payload) => {
      state.lastBrawler = { ...payload };
    }),
    setErr: action((state, payload) => {
      state.err = payload;
    }),
    fetchItems: thunk(async (actions, playerTag) => {
      const url = `${apiUrl}/player`;
      actions.fetchingItems();
      try {
        const result = await axios.post(url, { playerTag });
        // return
        if (result.data.name) {
          actions.addItems(result.data);
          actions.setLastBrawler(result.data);
          actions.fetchingItemsDone();
          actions.setErr({ msg: '', active: false });
          // console.log(result.data);
        }
        if (result.data.err) {
          actions.fetchingItemsDone();
          actions.setLastBrawler(result.data);
          actions.setErr({
            msg: 'Player not found with this Player Tag',
            active: true,
          });
          // console.log(result.data);
        }
      } catch (e) {
        console.log(e);
      }
    }),
  },
  club: {
    items: [],
    lastClub: {},
    loading: false,
    err: { msg: '', active: false },
    addItems: action((state, payload) => {
      state.items.push(payload);
    }),
    fetchingItems: action((state) => {
      state.loading = true;
    }),
    fetchingItemsDone: action((state) => {
      state.loading = false;
    }),
    setLastClub: action((state, payload) => {
      state.lastClub = { ...payload };
    }),
    setErr: action((state, payload) => {
      state.err = payload;
    }),
    fetchItems: thunk(async (actions, clubTag) => {
      const url = `${apiUrl}/club`;
      actions.fetchingItems();
      try {
        const result = await axios.post(url, { clubTag });
        // return
        if (result.data.name) {
          actions.addItems(result.data);
          actions.setLastClub(result.data);
          actions.fetchingItemsDone();
          actions.setErr({ msg: '', active: false });
          //console.log(result.data);
        }
        if (result.data.err) {
          actions.fetchingItemsDone();
          actions.setLastClub(result.data);
          actions.setErr({
            msg: 'Club not found with this Club Tag',
            active: true,
          });
          // console.log(result.data);
        }
      } catch (e) {
        console.log(e);
      }
    }),
  },
  player_rankings: {
    items: [],
    lastRegion: [],
    loading: false,
    err: { msg: '', active: false },
    addItems: action((state, payload) => {
      state.items.push(payload);
    }),
    fetchingItems: action((state) => {
      state.loading = true;
    }),
    fetchingItemsDone: action((state) => {
      state.loading = false;
    }),
    setLastRegion: action((state, payload) => {
      state.lastRegion = payload;
    }),
    setErr: action((state, payload) => {
      state.err = payload;
    }),
    fetchItems: thunk(async (actions, country) => {
      const url = `${apiUrl}/rankings`;
      actions.fetchingItems();
      try {
        const result = await axios.post(url, { country,type:'players' });
        // return
        if (result.data.ranks.length>10) {
          actions.addItems(result.data);
          actions.setLastRegion(result.data);
          actions.fetchingItemsDone();
          actions.setErr({ msg: '', active: false });
          //console.log(result.data);
        }
        if (result.data.err) {
          actions.fetchingItemsDone();
          actions.setLastClub(result.data);
          actions.setErr({
            msg: 'ERROR',
            active: true,
          });
          // console.log(result.data);
        }
      } catch (e) {
        console.log(e);
      }
    }),
  },
  club_rankings: {
    items: [],
    lastRegion: [],
    loading: false,
    err: { msg: '', active: false },
    addItems: action((state, payload) => {
      state.items.push(payload);
    }),
    fetchingItems: action((state) => {
      state.loading = true;
    }),
    fetchingItemsDone: action((state) => {
      state.loading = false;
    }),
    setLastRegion: action((state, payload) => {
      state.lastRegion = payload;
    }),
    setErr: action((state, payload) => {
      state.err = payload;
    }),
    fetchItems: thunk(async (actions, country) => {
      const url = `${apiUrl}/rankings`;
      actions.fetchingItems();
      try {
        const result = await axios.post(url, { country,type:'clubs' });
        // return
        if (result.data.ranks.length>10) {
          actions.addItems(result.data);
          actions.setLastRegion(result.data);
          actions.fetchingItemsDone();
          actions.setErr({ msg: '', active: false });
          //console.log(result.data);
        }
        if (result.data.err) {
          actions.fetchingItemsDone();
          actions.setLastClub(result.data);
          actions.setErr({
            msg: 'ERROR',
            active: true,
          });
          // console.log(result.data);
        }
      } catch (e) {
        console.log(e);
      }
    }),
  },
};

export default createStore(initialState);
