import React, { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import CompanyData from "../json/CompanyData.json";
import { COLUMNS } from "../json/Columns";
import GlobalFilter from "./GlobalFilter";

const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => CompanyData, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <div className="flex-col">
      <h1 className="font-medium text-center text-rose-600 text-2xl mt-8">
        Companies
      </h1>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} class="table-auto">
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr className="border-b-2" {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => (
                <th
                  className="px-20 py-4 text-gray-500 font-semibold"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps} className="border-b-2">
                {row.cells.map((cell) => {
                  return (
                    <td className="px-20 py-4" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-end my-6 mx-6">
        <button class="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded" onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button class="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 ml-4 rounded" onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
      <hr className="border-2 mt-1 w-full" />
    </div>
  );
};

export default FilteringTable;
