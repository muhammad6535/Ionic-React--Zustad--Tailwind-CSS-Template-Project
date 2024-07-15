import create from 'zustand';

interface HomeStore {
    count: number;
    increment: () => void;
    decrement: () => void;
}

const useHomeStore = create<HomeStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useHomeStore;
