export const START_BTN_STATE = {
    "START": "START",
    "PAUSE": "PAUSE"
} as const;

export type StartBtnStateType = typeof START_BTN_STATE[keyof typeof START_BTN_STATE]