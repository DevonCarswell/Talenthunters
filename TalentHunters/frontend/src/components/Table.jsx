import React, { useState, useEffect } from "react";

const Table = ({ data }) => {
  const [headers, setHeaders] = useState([]);
  const [tableData, setTableData] = useState([{}]);
  const [orderBy, setOrderBy] = useState("id");
  const lodash = require("lodash");

  useEffect(() => {
    setHeaders(Object.keys(data[0]));
    setTableData(data);
  }, [data]);

  const handleClick = (header) => {
    let newData = [...tableData].sort((a, b) => {
      if (a[header] === b[header]) {
        return a.id > b.id ? 1 : -1;
      }
      return a[header] > b[header] ? 1 : -1;
    });
    if (header === orderBy && lodash.isEqual(tableData, newData)) {
      lodash.reverse(newData);
    }

    setTableData(newData);
    setOrderBy(header);
  };

  console.log(data);

  return (
    <>
      {data.length ? (
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
                {Object.values(tdata).map((val, i) => {
                  if (Object.prototype.toString.call(val) === "[object Date]") {
                    return (
                      <td key={i}>
                        {new Date(val).toLocaleDateString("en-gb")}
                      </td>
                    );
                  }
                  return <td key={i}>{val}</td>;
                })}
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
