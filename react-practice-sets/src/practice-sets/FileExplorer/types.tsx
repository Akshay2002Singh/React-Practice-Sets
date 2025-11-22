export type FileFolderType = {
  type:  "FILE" | "FOLDER";
  name: string;
  isExpended?: boolean;
  child?: FileFolderType[];
};
