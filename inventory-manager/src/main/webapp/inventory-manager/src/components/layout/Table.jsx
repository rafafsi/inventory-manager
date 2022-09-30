import styled from "styled-components";

const Table = ({data, column}) => {
    return (
            <TableSty>
                <Head>
                    <Row>
                        {column.map((item, idx) => <TableHeadItem idx={idx} item={item}/>)}
                    </Row>
                </Head>
                <tbody>
                    {data.map((item, idx) => <TableRow item={item} column={column} idx={idx}/>)}
                </tbody>
            </TableSty>
    )
}

const TableHeadItem = ({item, idx}) => <Th key={idx}> {item.heading} </Th>
const TableRow = ({item, column}) => (
    <Row>
        {column.map((columItem, idx) => {
            return <td key={idx}> {item[`${columItem.value}`]} </td>
        })}
    </Row>
)

const TableSty = styled.table`
    margin: 1em;
    padding: 5px;
    border: 2px solid var(--mainBlack);
    border-radius: 10px;
`
const Head = styled.thead`
    margin: 5px;
    background-color: var(--mainOrange);
    color: var(--mainBlack);
    text-transform: uppercase;
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