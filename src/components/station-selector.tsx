'use client';

import { useRadioStationStore } from "@/store/use-radio-station-store";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "./ui/command";
import { cn } from "@/lib/utils";
import { CommandGroup } from "cmdk";

interface IStationSelector {
  stations: {
    name: string;
    url: string;
    image: string;
    streamUrl: string;
  }[];
}

export default function StationSelector({ stations }: IStationSelector) {
  const { setStation } = useRadioStationStore();
  const [open, setOpen] = useState(false)
  const [stationName, setStationName] = useState("")
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          role="comobobox"
          aria-expanded={open}
        >
          {stationName ? stations.find((station) => station.name === stationName)?.name : "Select a station"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <Command>
          <CommandInput placeholder="Search radio station..." />
          <CommandList>
            <CommandEmpty>{'No stations found.'}</CommandEmpty>
            <CommandGroup>
              {stations.map((station) => (
                <CommandItem
                  key={station.name}
                  value={station.name}
                  onSelect={() => {
                    setStationName(station.name)
                    setStation(station)
                    setOpen(false)
                  }}
                >
                  <span className="ml-2">{station.name}</span>
                  <Check className={cn("ml-auto", station.name === stationName ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
