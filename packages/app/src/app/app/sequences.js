import { when, set } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';
import * as actions from './actions';

export const loadApp = [
  actions.setJwtFromStorage,
  actions.listenToConnectionChange,
  when(state`jwt`),
  {
    true: [
      actions.getUser,
      set(state`user`, props`user`),
      actions.setPatronPrice,
    ],
    false: [],
  },
];

export const setConnection = set(state`connection`, props`connection`);

export const showAuthenticationError = [];

export const unloadApp = actions.stopListeningToConnectionChange;

export const openModal = set(state`currentModal`, props`modal`);
