export const TASK_STATUS = {
    PENDING: "PENDING",
    COMPLETED: "COMPLETED",
} as const;

export type TaskStatusType = typeof TASK_STATUS[keyof typeof TASK_STATUS];