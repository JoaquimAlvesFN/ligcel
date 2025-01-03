import { create } from "zustand";

interface SelectedPlansProps {
  selectedPlan: {
    name: string;
    value: string;
    options?: string | null;
  };
  changeSelectPlan: (newPlan: {
    name: string;
    value: string;
    options: string;
  }) => void;
}

const useSelectedPlans = create<SelectedPlansProps>()((set) => ({
  selectedPlan: {
    name: "",
    value: "",
    options: "",
  },
  changeSelectPlan: (newPlan: {
    name: string;
    value: string;
    options: string;
  }) =>
    set(() => ({
      selectedPlan: newPlan,
    })),
}));

export default useSelectedPlans;
