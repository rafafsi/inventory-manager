import styled from "styled-components";

import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin2Line } from 'react-icons/ri'
import Button from "./Button";

const Table = ({data, column, handleEdit, handleDelete}) => {
    return (
            <TableSty>
                <Head>
                    <Row>
                        {column.map((item, idx) => <TableHeadItem idx={idx} item={item}/>)}
                    </Row>
                </Head>
                <tbody>
                    {data.map((item, idx) => <TableRow 
                        handleEdit={handleEdit} 
                        handleDelete={handleDelete} 
                        item={item} 
                        column={column} 
                        idx={idx}/>)}
                </tbody>
            </TableSty>
    )
}

const TableHeadItem = ({item, idx}) => <Th key={idx}> {item.heading} </Th>

const TableRow = ({handleEdit, handleDelete, idx, item, column}) => (

    
    
    <Row>
        {column.map((columItem, idx) => {
            if(columItem.value == 'actions'){
                return (
                    <td>
                        <Button handleClick={handleEdit} customClass="action" type="button" text={<FaRegEdit />}></Button>
                        <Button handleClick={handleDelete} customClass="action" type="button" text={<RiDeleteBin2Line />} />
                    </td>
                )
            } else {
                return (
                    <td key={idx}> {item[`${columItem.value}`]} </td>
                )
            }
      
        })}
    </Row>
)

const TableSty = styled.table`
    margin: 1em;
    padding: 5px;
    border: 3px solid var(--mainOrange);
    box-shadow: 3px 3px 17px 0px var(--mainBlack);
    border-radius: 10px;
    display: block;
    height: 30vh;
    overflow: hidden;
    overflow-y: scroll;
`
const Head = styled.thead`
    margin: 5px;
    background-color: var(--mainOrange);
    color: var(--mainBlack);
    text-transform: uppercase;
    position: sticky;
    `

const Th = styled.th`
    font-size: 1em;
    padding-left: 10px;
    padding-right: 10px;
    `

const Row = styled.tr`
    font-size: 1em;
    padding: 5px;
    text-align: center;
`

export default Table;