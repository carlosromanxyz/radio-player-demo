'use client';

import { useRadioStationStore } from "@/store/use-radio-station-store";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandInput, CommandItem, CommandList } from "./ui/command";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          role="comobobox"
        >
          {value ? stations.find((station) => station.name === value)?.name : "Select a station"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <Command>
          <CommandInput placeholder="Search radio station..." />
          <CommandList>
            {stations
              .filter((station) => station.name.toLowerCase().includes(value.toLowerCase()))
              .map((station) => (
                <CommandItem
                  key={station.name}
                  onClick={() => {
                    setValue(station.name) // Optional to show the selected station
                    setStation(station)
                    setOpen(false)
                  }}
                >
                  <Image src={station.image} alt={station.name} className="h-6 w-6 rounded-full" />
                  <span className="ml-2">{station.name}</span>
                  <Check className={cn(
                    "ml-auto",
                    station.name === value ? "opacity-100" : "opacity-0"
                  )} />
                </CommandItem>
              ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
