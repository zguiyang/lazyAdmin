import LocalForage from 'localforage';

export const storage = LocalForage.createInstance({
  driver: [LocalForage.LOCALSTORAGE, LocalForage.INDEXEDDB, LocalForage.WEBSQL],
});
