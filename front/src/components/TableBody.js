const TableBody = ({ tableData, columns }) => {
    return (
      <tbody>
        {tableData.map((data) => {
          return (
            <tr key={data.id}>
              {columns.map(({ accessor }) => {
                if (accessor==="link"){
                  const tData = data[accessor] ? data[accessor] : "——";
                  return <td key={accessor}><a href={tData}>{tData}</a></td>;
                }else{
                  const tData = data[accessor] ? data[accessor] : "——";
                  return <td key={accessor}>{tData}</td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };
  
  export default TableBody;