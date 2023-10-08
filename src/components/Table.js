import React, { useMemo } from "react";
import { useTable } from "react-table";
import CompanyData from "../json/CompanyData.json";
import { COLUMNS } from "../json/Columns";

const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => CompanyData, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="table-container">
      <h1 className="font-medium text-center text-rose-600 text-2xl mt-8">
        Companies
      </h1>
      <div class="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search"
          class="border rounded-l-lg p-2 outline-none"
        />
        <button class="bg-rose-600 text-white rounded-r-lg p-2 hover:bg-rose-700 focus:outline-none">
          Search
        </button>
      </div>
      <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map((headerGroups) => (
                    <tr className="border-b-2" {...headerGroups.getHeaderGroupProps()}>
                        {
                            headerGroups.headers.map((column) => (
                                <th className="px-20 py-4 text-gray-500 font-semibold" {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))
                        }
                    </tr>
                ))
            }
          <tr className="border-b-2">
            <th className="px-20 py-4 text-gray-500 font-semibold">NAME</th>
            <th className="px-20 py-4 text-gray-500 font-semibold">WEBSITE</th>
            <th className="px-20 py-4 text-gray-500 font-semibold">REGION</th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return(
                <tr {...row.getRowProps} className="border-b-2">
                    {row.cells.map((cell) => {
                        return <td className="px-20 py-4" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
