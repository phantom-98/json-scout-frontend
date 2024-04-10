import React from 'react'

export const Pagination = (props:{ start:number, size:number, total:number, onPrevious:Function, onNext:Function}) => {
  return (
    <nav
    className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-8 sm:px-6"
    aria-label="Pagination"
  >
    <div className="hidden sm:block">
      <p className="text-gray-700 text-[2rem]">
        Showing <span className="font-medium">{props.start}</span> to <span className="font-medium">{props.start + props.size - 1}</span> of{' '}
        <span className="font-medium">{props.total}</span> results
      </p>
    </div>
    <div className="flex flex-1 justify-between sm:justify-end gap-4 text-[2rem]">
      <span
        onClick={e => props.onPrevious()}
        className="w-[12rem] flex items-center justify-center rounded-full cursor-pointer bg-white shadow-md py-2 font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus-visible:outline-offset-0"
      >
        Previous
      </span>
      <span
        onClick={e => props.onNext()}
        className="w-[10rem] flex items-center justify-center rounded-full cursor-pointer bg-white shadow-md py-2 font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus-visible:outline-offset-0"
      >
        Next
      </span>
    </div>
  </nav>
  )
}



  