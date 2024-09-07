import { create } from "zustand";

const useGroups = create((set) => ({
	selectedGroup: null,
	setSelectedGroup: (selectedGroup) => set({ selectedGroup }),
	groups: [],
	setGroups: (groups) => set({ groups }),
}));

export default useGroups;
