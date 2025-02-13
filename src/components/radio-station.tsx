import React from 'react'
import StationSelector from './station-selector'
import { stations } from '@/data/stations'
import StationPlayer from './station-player'

export default function RadioStation() {
  return (
    <main className='flex flex-col gap-4 items-center justify-center min-h-screen p-6'>
      <h1 className='text-4xl font-bold'>Radio Station</h1>
      <p className='mt-4 text-lg'>
        This is a radio station player example using Zustand for state management.
      </p>

      <StationSelector stations={stations} />
      <StationPlayer />
    </main>
  )
}
