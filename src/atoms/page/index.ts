import { atom } from 'recoil';

const pageState = atom<number>({ key: 'pageState', default: 1 });

export { pageState };
