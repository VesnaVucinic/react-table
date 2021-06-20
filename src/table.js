import React, { useState, } from 'react'
import { useTable, useFilters, useSortBy } from "react-table"

export default function Table({columns, data}) {
// Create a state
const [filterInput, setFilterInput] = useState("");
// Use state and functions treturnd from usetable to build UI
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    column,
    prepareRow, 
    setFilter
} = useTable(
    {
        columns,
        data
    },
    useFilters, // Adding the useFilters Hook to the table
    useSortBy   //to sort table columns 
);

// to allow sorting
<th
    {...column.getHeadreProps(column.getSortByToggleProps())}
    className={
        column.isSorted
            ? column.isSortedDesc
                ? "sort-desc"
                : "sort-asc"
            : ""
    }
>
    {column.render("Header")}
</th>
const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("name", value);


    // Update the name filter.
    // Now the table will search for that name and show only rows which have a matching name
    setFilterInput(value);
};

// Input element
<input
    value={filterInput}
    onChange={handleFilterChange}
    placeholder={"Search name"}
/>

// Render the UI for table
return (
    <>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render("Headre")}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                    </tr>
                );
                })}
            </tbody>
        </table>
    </>
);
}
