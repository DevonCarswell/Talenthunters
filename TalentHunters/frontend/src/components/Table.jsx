import React, { useState, useEffect } from "react";

const Table = ({ data }) => {
  const [headers, setHeaders] = useState([]);
  const [tableData, setTableData] = useState([{}]);

  useEffect(() => {
    setHeaders(Object.keys(data[0]));
    setTableData(data);
  }, [data]);

  const handleClick = (header) => {
    const newdata = [...tableData].sort((a, b) =>
      a[header] > b[header] ? 1 : -1
    );
    setTableData(newdata);
  };
  //console.log(headers);
  return (
    <>
      {data.length > 0 ? (
        <table className="table" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} onClick={() => handleClick(header)}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.map((tdata, index) => (
              <tr key={index}>
                {Object.values(tdata).map((val) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Table;
