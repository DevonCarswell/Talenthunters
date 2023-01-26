import React, { useState, useEffect } from "react";
// import _ from "lodash";

const Table = ({ data }) => {
  const [headers, setHeaders] = useState([]);
  const [tableData, setTableData] = useState([{}]);
  const [orderBy, setOrderBy] = useState("id");
  const _ = require("lodash");

  useEffect(() => {
    setHeaders(Object.keys(data[0]));
    setTableData(data);
  }, [data]);

  const handleClick2 = (header) => {
    console.log(header);
    let newData = [...tableData].sort((a, b) => {
      if (a[header] === b[header]) {
        return a.id > b.id ? 1 : -1;
      }
      return a[header] > b[header] ? 1 : -1;
    });
    if (header === orderBy && _.isEqual(tableData, newData)) {
      // _.reverse(newData);
      // const reversed = [];
      // const temp = Object.assign([], tableData);
      // console.log(temp);
      // while (temp.length) {
      //   reversed.push(temp.pop());
      // }
      // newData = reversed;
      _.reverse(newData);
    }

    setTableData(newData);
    setOrderBy(header);
  };

  return (
    <>
      {data.length > 0 ? (
        <table className="table" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} onClick={() => handleClick2(header)}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.map((tdata, index) => (
              <tr key={index}>
                {Object.values(tdata).map((val, i) => (
                  <td key={i}>{val}</td>
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
