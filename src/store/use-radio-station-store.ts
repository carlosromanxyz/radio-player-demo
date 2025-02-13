import { create } from "zustand";

interface IRadioStation {
  name: string;
  url: string;
  image: string;
  streamUrl: string;
}

interface IRadioStore {
  currentStation: IRadioStation | null;
  setStation: (station: IRadioStation) => void;
}

export const useRadioStationStore = create<IRadioStore>((set) => ({
  currentStation: null,
  setStation: (station) => set({ currentStation: station }),
}));
