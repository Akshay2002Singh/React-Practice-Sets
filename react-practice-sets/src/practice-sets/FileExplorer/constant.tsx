import type { FileFolderType } from "./types";

export const FILE_EXPLORER_ACTION_TYPES = {
  ADD_FILE: "ADD_FILE",
  ADD_FOLDER: "ADD_FOLDER",
  TOGGLE_EXPAND: "TOGGLE_EXPAND",
} as const;

export const FILE_FOLDER_NAME = {
  file: "FILE",
  folder: "FOLDER",
} as const;

export const DEFAULT_TREE: FileFolderType = {
  type: FILE_FOLDER_NAME.folder,
  isExpended: false,
  name: "project",
  child: [
    { type: FILE_FOLDER_NAME.file, name: ".gitignore" },
    { type: FILE_FOLDER_NAME.file, name: "README.md" },

    // ---------------------
    // src/
    // ---------------------
    {
      type: FILE_FOLDER_NAME.folder,
      isExpended: false,

      name: "src",
      child: [
        {
          type: FILE_FOLDER_NAME.folder,
          isExpended: false,

          name: "components",
          child: [
            {
              type: FILE_FOLDER_NAME.folder,
              isExpended: false,

              name: "ui",
              child: [
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "Button.tsx",
                },
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "Modal.tsx",
                },
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "Dropdown.tsx",
                },
              ],
            },
            {
              type: FILE_FOLDER_NAME.folder,
              isExpended: false,

              name: "layout",
              child: [
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "Header.tsx",
                },
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "Footer.tsx",
                },
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "Sidebar.tsx",
                },
              ],
            },
          ],
        },

        {
          type: FILE_FOLDER_NAME.folder,
          isExpended: false,

          name: "hooks",
          child: [
            {
              type: FILE_FOLDER_NAME.file,
              name: "useAuth.ts",
            },
            {
              type: FILE_FOLDER_NAME.file,
              name: "useFetch.ts",
            },
          ],
        },

        {
          type: FILE_FOLDER_NAME.folder,
          isExpended: false,

          name: "pages",
          child: [
            {
              type: FILE_FOLDER_NAME.folder,
              isExpended: false,

              name: "dashboard",
              child: [
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "index.tsx",
                },
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "settings.tsx",
                },
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "activity.tsx",
                },
              ],
            },
            {
              type: FILE_FOLDER_NAME.folder,
              isExpended: false,

              name: "auth",
              child: [
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "login.tsx",
                },
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "register.tsx",
                },
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "forgot-password.tsx",
                },
              ],
            },
          ],
        },

        {
          type: FILE_FOLDER_NAME.file,
          name: "main.tsx",
        },
        { type: FILE_FOLDER_NAME.file, name: "App.tsx" },
      ],
    },

    // ---------------------
    // public/
    // ---------------------
    {
      type: FILE_FOLDER_NAME.folder,
      isExpended: false,

      name: "public",
      child: [
        {
          type: FILE_FOLDER_NAME.file,
          name: "index.html",
        },
        {
          type: FILE_FOLDER_NAME.file,
          name: "favicon.ico",
        },
        {
          type: FILE_FOLDER_NAME.folder,
          isExpended: false,

          name: "assets",
          child: [
            {
              type: FILE_FOLDER_NAME.file,
              name: "logo.png",
            },
            {
              type: FILE_FOLDER_NAME.folder,
              isExpended: false,

              name: "images",
              child: [
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "hero.jpg",
                },
                {
                  type: FILE_FOLDER_NAME.file,
                  name: "banner.png",
                },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------
    // config/
    // ---------------------
    {
      type: FILE_FOLDER_NAME.folder,
      isExpended: false,

      name: "config",
      child: [
        {
          type: FILE_FOLDER_NAME.file,
          name: "vite.config.js",
        },
        {
          type: FILE_FOLDER_NAME.file,
          name: "tsconfig.json",
        },
        {
          type: FILE_FOLDER_NAME.folder,
          isExpended: false,

          name: "env",
          child: [
            {
              type: FILE_FOLDER_NAME.file,
              name: "dev.env",
            },
            {
              type: FILE_FOLDER_NAME.file,
              name: "prod.env",
            },
          ],
        },
      ],
    },

    // ---------------------
    // scripts/
    // ---------------------
    {
      type: FILE_FOLDER_NAME.folder,
      isExpended: false,

      name: "scripts",
      child: [
        {
          type: FILE_FOLDER_NAME.file,
          name: "build.js",
        },
        {
          type: FILE_FOLDER_NAME.file,
          name: "deploy.js",
        },
      ],
    },
  ],
};
