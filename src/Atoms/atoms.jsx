import { atom } from 'recoil'
export const activeTodosState = atom({
    key: "activeTodosState",
    default: []
});

export const completedTodosState = atom({
    key: "completedTodosState",
    default: []
});
