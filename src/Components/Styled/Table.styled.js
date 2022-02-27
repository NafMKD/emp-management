import React from "react";
import styled from "styled-components";

export const Table = styled.table`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    border-collapse: collapse;
    width: 100%;
    background-color: transparent;
    border: 1px solid #dee2e6;
    white-space: nowrap!important;
    margin-bottom: 0;
    color: inherit;
`;

export const TableHead = styled.thead`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    word-wrap: break-word;
    border-collapse: collapse;
    white-space: nowrap!important;
    color: inherit;
    box-sizing: border-box;
`;

export const TableBody = styled.tbody`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    word-wrap: break-word;
    border-collapse: collapse;
    white-space: nowrap!important;
    color: inherit;
    box-sizing: border-box;
`;

export const TableHeadRow = styled.tr`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    word-wrap: break-word;
    border-collapse: collapse;
    white-space: nowrap!important;
    color: inherit;
    box-sizing: border-box;
`;

export const TableHeadColumn = styled.th`
    font-size: 1rem;
    line-height: 1.5;
    word-wrap: break-word;
    border-collapse: collapse;
    white-space: nowrap!important;
    color: inherit;
    box-sizing: border-box;
    text-align: -webkit-match-parent;
    padding: .75rem;
    border: 1px solid #dee2e6;
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
    border-bottom-width: 2px;
    border-top-width: 0;
`;

export const TableBodyRow = styled.tr`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    word-wrap: break-word;
    border-collapse: collapse;
    white-space: nowrap!important;
    color: inherit;
    box-sizing: border-box;
`;

export const TableBodyColumn = styled.td`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    word-wrap: break-word;
    border-collapse: collapse;
    white-space: nowrap!important;
    color: inherit;
    box-sizing: border-box;
    padding: .75rem;
    vertical-align: top;
    border: 1px solid #dee2e6;
`;

const datas  = (bodyColumns) =>{
    const data = bodyColumns.map((bodyColumns) => {
        return <TableBodyColumn key={Math.random()*100}>{bodyColumns}</TableBodyColumn>;
    });
    return data;
}

export const StyledTable = ({headColumns, bodyRows=null}) => {
    const heads = headColumns.map((headColumn) => {

        return <TableHeadColumn key={Math.random()*100}>{headColumn}</TableHeadColumn>;
    });

    const datasView = bodyRows.map((bodyRow) => {
        return (
            <TableBodyRow key={Math.random()*100}>
                {datas(bodyRow)}
            </TableBodyRow>
        );
    });
    return (
        <Table>
            <TableHead>
                <TableHeadRow>
                    {heads}
                </TableHeadRow>
            </TableHead>
            <TableBody>
                {(bodyRows===null) ? "" : datasView}
            </TableBody>
        </Table>
    );
}