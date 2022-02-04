import React from 'react';
import { render } from 'react-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


 //const AgGrid = () => {
   //const rowData = [
     //  {make: "Toyota", model: "Celica", price: 35000},
       //{make: "Ford", model: "Mondeo", price: 32000},
       //{make: "Porsche", model: "Boxter", price: 72000}
   //];



   //const onGridReady = (params) => {
     //  console.log('grid is ready')
      // fetch('https://jsonplaceholder.typicode.com/comments').then(resp=>resp.json())
      // .then(resp => {console.log(resp)
      //  params.api.applyTransaction({add:resp})}) 
      // }

function AgGrid() {

      const columnDefs = [
    ];

    const gridOptions = {

        defaultColDef: {
            sortable: true,
            filter: 'agTextColumnFilter',
            resizable: true
        },

        columnDefs: columnDefs,
        enableSorting: true,
        enableFilter: true,
        pagination: true
    };

    const eGridDiv = document.querySelector('#myGrid');

     AgGrid.Grid(eGridDiv, gridOptions);

    function dynamicallyConfigureColumnsFromObject(anObject){
        const colDefs = gridOptions.api.getColumnDefs();
        colDefs.length=0;
        const keys = Object.keys(anObject)
        keys.forEach(key => colDefs.push({field : key}));
        gridOptions.api.setColumnDefs(colDefs);
    }
    // simple JSON example

    fetch('https://www.ag-grid.com/example-assets/row-data.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        dynamicallyConfigureColumnsFromObject(data[0])
        gridOptions.api.setRowData(data);
    })



  // return (
    //   <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
      //    <AgGridReact
              // rowData={rowData}
 //            >    
        //    <AgGridColumn field="make"></AgGridColumn>
         //  <AgGridColumn field="model"></AgGridColumn>
         //  <AgGridColumn field="price"></AgGridColumn>
         // </AgGridReact>
      // </div>
  // );
 //  }
}
// render(<AgGrid />, document.getElementById('root'));

export default AgGrid