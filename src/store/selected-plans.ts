import { create } from "zustand";

interface SelectedPlansProps {
  selectedPlan: {
    name: string;
    value: number;
    options: string;
  };
  changeSelectPlan: () => void;
}

const useSelectedPlans = create<SelectedPlansProps>()((set) => ({
  selectedPlan: {
    name: "",
    value: 0,
    options: "",
  },
  changeSelectPlan: () => set(() => ({})),
}));

export default useSelectedPlans;
