import { create } from "zustand";

interface GlobalStateProps {
  openChatbot: boolean;
  changeOpenChatbot: (status: boolean) => void;
}

const useGlobalState = create<GlobalStateProps>()((set) => ({
  openChatbot: false,
  changeOpenChatbot: (status) => set(() => ({ openChatbot: status })),
}));

export default useGlobalState;
