import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import 'ag-grid-community/dist/styles/ag-grid.css';

import WrapperSite from "../WrapperSite";
import { getDataRank, setDataRank } from "../../utils/localStorage";

function Grid({isAdmin}) {
  
  const rowData = getDataRank();

  return (
    <WrapperSite>
      <div className="ag-theme-alpine-dark" style={{height: 800, width: "100%"}}>
          <AgGridReact
              rowData={rowData}>
              <AgGridColumn field="Posição"></AgGridColumn>
              <AgGridColumn field="nome" editable={tr}></AgGridColumn>
              <AgGridColumn field="Time"></AgGridColumn>
              <AgGridColumn field="Mapas Jogados"></AgGridColumn>
              <AgGridColumn field="Kills"></AgGridColumn>
              <AgGridColumn field="jogos"></AgGridColumn>
              <AgGridColumn field="Vitorias"></AgGridColumn>
              <AgGridColumn field="Derrotas"></AgGridColumn>
              <AgGridColumn field="Pontos"></AgGridColumn>
          </AgGridReact>
      </div>
    </WrapperSite>
  )
}

Grid.exportDefault = {
  isAdmin: false
}

export default Grid;