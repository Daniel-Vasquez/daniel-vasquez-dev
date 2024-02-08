import { LogoDark } from "../../icons/LogoDark"
import { LogoLight } from "../../icons/LogoLight"

export const Toggle = ({ handleDarkMode }) => {
  return (
    <div className='flex items-center gap-3 justify-center'>
      <span className="text-md font-semibold text-white dark:text-black">
        <LogoDark className="w-7 h-7 text-gray-500" />
      </span>
      <label
        htmlFor="toggleSix"
        className="bg-white rounded-2xl flex items-center cursor-pointer select-none text-dark dark:bg-black dark:text-white"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggleSix"
            className="peer sr-only"
            onChange={handleDarkMode}
          />
          <div
            className="block h-8 rounded-full box bg-primary w-14"
          ></div>
          <div
            className="absolute flex items-center justify-center w-6 h-6 transition bg-black rounded-full dot left-1 top-1 peer-checked:translate-x-full peer-checked:bg-white"
          ></div>
        </div>
      </label>
      <span className="text-md font-semibold text-white dark:text-black">
        <LogoLight className="w-7 h-7 text-yellow-500" />
      </span>
    </div>
  )
}
