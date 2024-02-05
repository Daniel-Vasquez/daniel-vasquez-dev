import React from 'react'

export const Toggle = ({ handleDarkMode }) => {
  return (
    <div className='flex items-center gap-3 justify-center'>
      <span class="text-md font-semibold text-white dark:text-black">Dark</span>
      <label
        for="toggleSix"
        class="bg-white rounded-2xl flex items-center cursor-pointer select-none text-dark dark:bg-black dark:text-white"
      >
        <div class="relative">
          <input
            type="checkbox"
            id="toggleSix"
            class="peer sr-only"
            onChange={handleDarkMode}
          />
          <div
            class="block h-8 rounded-full box bg-primary w-14"
          ></div>
          <div
            class="absolute flex items-center justify-center w-6 h-6 transition bg-black rounded-full dot left-1 top-1 peer-checked:translate-x-full peer-checked:bg-white"
          ></div>
        </div>
      </label>
      <span class="text-md font-semibold text-white dark:text-black">Light</span>
    </div>
  )
}
