import { AgGridReact } from "ag-grid-react";
import React, {useState} from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";


function AgGrid() {
  const [rowData, setRowData] = useState([])

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
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        params.api.applyTransaction({ add: resp });
      });
  };


  return (
   <div className="App">
      <div className="ag-theme-alpine" style={{ height: "400px", width: "1300px" }}>
        <AgGridReact
        sideBar={['filters']}
        onGridReady={onGridReady}
          columnDefs={columnDefs}
           rowData={rowData}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default AgGrid;
