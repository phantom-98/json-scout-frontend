import React from 'react'

export const Pagination = (props:{ start:number, size:number, total:number, onPrevious:Function, onNext:Function}) => {
  return (
    <nav
    className="flex items-center justify-between border-t border-gray-200 bg-white py-[8rem] px-0 sm:py-8 sm:px-6"
    aria-label="Pagination"
  >
    <div className="">
      <p className="text-gray-700 sm:text-[2rem] text-[8rem]">
        Showing <span className="font-medium">{props.start}</span> to <span className="font-medium">{props.start + props.size - 1}</span> of{' '}
        <span className="font-medium">{props.total}</span> results
      </p>
    </div>
    <div className="flex justify-between gap-4 sm:text-[2rem] text-[8rem]">
      <span
        onClick={e => props.onPrevious()}
        className="sm:w-[12rem] flex items-center justify-center rounded-full cursor-pointer bg-white shadow-md py-2 px-[4rem] font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus-visible:outline-offset-0"
      >
        Previous
      </span>
      <span
        onClick={e => props.onNext()}
        className="sm:w-[10rem] flex items-center justify-center rounded-full cursor-pointer bg-white shadow-md py-2 px-[4rem] font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus-visible:outline-offset-0"
      >
        Next
      </span>
    </div>
  </nav>
  )
}



  