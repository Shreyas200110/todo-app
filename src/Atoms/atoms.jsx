import { atom } from 'recoil'
export const activeTodosState = atom({
    key: "activeTodosState",
    default: []
});

export const completedTodosState = atom({
    key: "completedTodosState",
    default: []
});

export const todosState = atom({
    key: "todosState",
    default: []
});

export const currTabState = atom({
    key: "currTabState",
    default: 0,
})
