import { InfinitySpin } from "react-loader-spinner"

export const LoadSpinner = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
        <InfinitySpin color="blue"/>
    </div>
  )
}