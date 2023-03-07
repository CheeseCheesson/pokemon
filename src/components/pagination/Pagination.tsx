import { PaginationProps } from "../../types/PaginationProps"

const Pagination = ({
  previous,
  next,
  onPrevClick,
  onNextClick,
  onLimitChange,
  limit
}: PaginationProps) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="mr-4">
        <label htmlFor="limit-select" className="mr-2 text-white">
          Show:
        </label>
        <select
          id="limit-select"
          value={limit}
          onChange={onLimitChange}
          className="border rounded py-1 px-2"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <button
        type="button"
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-l ${
          previous ? "" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!previous}
        onClick={onPrevClick}
      >
        Prev
      </button>
      <button
        type="button"
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-r ${
          next ? "" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!next}
        onClick={onNextClick}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
