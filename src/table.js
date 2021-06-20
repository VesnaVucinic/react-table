import React, { useState, } from 'react'
import { useTable } from "react-table"

// Use state and functions treturnd from usetable to build UI
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
} = useTable(
    {
        columns,
        data
    }
);

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

