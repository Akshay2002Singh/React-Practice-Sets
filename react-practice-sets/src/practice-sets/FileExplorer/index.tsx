import { useReducer } from "react";
import { DEFAULT_TREE, FILE_EXPLORER_ACTION_TYPES } from "./constant";
import "./styles.css";
import type { FileFolderType } from "./types";
import { FileFolderRow } from "./components/FileFolderRow";
import updateTree from "./utils";

function updataFileExplorer(
  state: FileFolderType,
  action: { type: string; payload: any }
) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case FILE_EXPLORER_ACTION_TYPES.ADD_FILE:
    case FILE_EXPLORER_ACTION_TYPES.ADD_FOLDER:
    case FILE_EXPLORER_ACTION_TYPES.TOGGLE_EXPAND:
      updateTree(
        newState,
        action.payload.path.slice(1),
        action.type,
        action.payload
      );
      return newState;
    default:
      return state;
  }
}

export const FileExplorer = ({ tree = DEFAULT_TREE }) => {
  const [fileExplorerTree, dispathFileExplorerTreeUpdate] = useReducer(
    updataFileExplorer,
    tree
  );

  return (
    <div id="file-explorer-container">
      <FileFolderRow
        data={fileExplorerTree}
        dispathFileExplorerTreeUpdate={dispathFileExplorerTreeUpdate}
        path={[]}
      />
    </div>
  );
};
