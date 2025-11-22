import { FILE_EXPLORER_ACTION_TYPES } from "./constant";
import type { FileFolderType } from "./types";

export default function updateTree(
  tree: FileFolderType,
  path: string[],
  actionType: string,
  payload: any
) {
  if (path.length === 0) {
    if (actionType === FILE_EXPLORER_ACTION_TYPES.TOGGLE_EXPAND) {
      tree.isExpended = tree.isExpended ? false : true;
    } else if (actionType === FILE_EXPLORER_ACTION_TYPES.ADD_FILE) {
      tree.child?.push({
        type: "FILE",
        name: payload.name,
      });
    } else if (actionType === FILE_EXPLORER_ACTION_TYPES.ADD_FOLDER) {
      tree.child?.push({
        type: "FOLDER",
        name: payload.name,
        isExpended: false,
        child: [],
      });
    }
    return;
  }

  if (tree.child) {
    const node = tree.child.find((ele) => ele.name === path[0]);
    if (node) updateTree(node, path.slice(1), actionType, payload);
  }
}