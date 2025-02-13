'use client';
import { useRadioStationStore } from "@/store/use-radio-station-store";

export default function StationPlayer() {
  const { currentStation } = useRadioStationStore();
  console.log(`Current station: ${currentStation}`);
  return (
    <div>
      {currentStation ? (
        <div>
          <h1>{currentStation.name}</h1>
          <audio src={currentStation.streamUrl} controls autoPlay />
        </div>
      ) : (
        <p>Select a station</p>
      )}
    </div>
  )
}
