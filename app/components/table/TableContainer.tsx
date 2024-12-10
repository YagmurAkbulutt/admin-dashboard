import React, { JSX } from 'react'

const TableContainer = ({children} : {children:JSX.Element | JSX.Element[]}) => {
  return (
    <div className="relative w-full overflow-x-auto">
        <table className="border shadow bg-white w-full table-auto rounded-md mt-5">
            {children}
            </table>
            </div>
  )
}

export default TableContainer