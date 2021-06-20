import React, { useState, } from 'react'
import { useTable } from "react-table"

// Create a state
const [filterInput, stFilterInput] = useState("");
// Use state and functions treturnd from usetable to build UI
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow, 
    setFilter
} = useTable(
    {
        columns,
        data
    },
    useFilters // Adding the useFilters Hook to the table 
);

const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("name", value);
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

