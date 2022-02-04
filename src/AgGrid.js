import { AgGridReact } from "ag-grid-react";
import React, {useState} from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";


function AgGrid() {
  const [rowData, setRowData] = useState([])
  const [column, setColumn] = useState([])

  const columnDefs = [
    { field: "name" },
    { field: "email" },
    { field: "country" },
    { field: "age" },
    { field: "dateOfBirth" },
    { field: "yearOfBirth" },
    { field: "athlete" },
    { field: "sport" },
    { field: "make" },
    { field: "model" },
    { field: "price" }
  ];
  

  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
    resizeable: true,
  };

  const onGridReady = (params) => {
    console.log("grid is ready");
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(Object.keys(resp[0]).map(col => ({field: col})),);
        setColumn(Object.keys(resp[0]).map(col=> ({field: col})));
        params.api.applyTransaction({ add: resp });
      });
  };


  return (
   <div className="App">
      <div className="ag-theme-alpine" style={{ height: "400px", width: "1300px" }}>
        <AgGridReact
        sideBar={['filters']}
        onGridReady={onGridReady}
          columnDefs={column}
           rowData={rowData}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default AgGrid;
