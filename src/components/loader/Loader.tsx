import { FC } from "react"

const Loader: FC = () => {
  return (
    <div
      className={"border-4 border-dashed rounded-full h-20 w-20 animate-spin text-ice"}
    />
  )
}

export default Loader
