import { FILE_EXPLORER_ACTION_TYPES, FILE_FOLDER_NAME } from "../constant";
import type { FileFolderType } from "../types";

export const FileFolderRow = ({
  data,
  dispathFileExplorerTreeUpdate,
  path,
}: {
  data: FileFolderType;
  dispathFileExplorerTreeUpdate: any;
  path: string[];
}) => {
  const toggle_folder_expand = (folderName: string) => {
    dispathFileExplorerTreeUpdate({
      type: FILE_EXPLORER_ACTION_TYPES.TOGGLE_EXPAND,
      payload: { path: [...path, folderName] },
    });
  };

  const add_file = (currentFolderName: string) => {
    const fileName = prompt("Please enter fileName", "");
    if (fileName) {
      dispathFileExplorerTreeUpdate({
        type: FILE_EXPLORER_ACTION_TYPES.ADD_FILE,
        payload: { path: [...path, currentFolderName], name: fileName },
      });
    }
  };

  const add_folder = (currentFolderName: string) => {
    const folderName = prompt("Please enter folderName", "");
    if (folderName) {
      dispathFileExplorerTreeUpdate({
        type: FILE_EXPLORER_ACTION_TYPES.ADD_FOLDER,
        payload: { path: [...path, currentFolderName], name: folderName },
      });
    }
  };

  if (data.type === FILE_FOLDER_NAME.folder) {
    const currentPath = [...path, data.name];
    return (
      <div className="col">
        <div className="file-explorer-folder-item">
          <div>
            <span onClick={() => toggle_folder_expand(data.name)}>
              {data.isExpended ? "v" : ">"}
            </span>
            <span onClick={() => toggle_folder_expand(data.name)}>
              {data.name}
            </span>
          </div>
          <div>
            <span onClick={() => add_folder(data.name)}>📁</span>
            <span onClick={() => add_file(data.name)}>📄</span>
          </div>
        </div>
        {data.isExpended ? (
          <div className="col ml-16">
            {data?.child?.map((ele) => (
              <FileFolderRow
                data={ele}
                dispathFileExplorerTreeUpdate={dispathFileExplorerTreeUpdate}
                path={currentPath}
                key={`${currentPath.join("/")}/${ele.name}}`}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="file-explorer-file-item">
      <span>{data.name}</span>
    </div>
  );
};
