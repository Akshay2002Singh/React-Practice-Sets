export const LIGHT_NAMES = {
    "RED": "RED",
    "YELLOW": "YELLOW",
    "GREEN": "GREEN"
} as const;

export type LightName = typeof LIGHT_NAMES[keyof typeof LIGHT_NAMES]

export const LIGHT_TIMING : Record<LightName,number> = {
    [LIGHT_NAMES.RED]: 2000,
    [LIGHT_NAMES.YELLOW]: 2000,
    [LIGHT_NAMES.GREEN]: 2000
};

export const LIGHT_ORDER:LightName[] = [LIGHT_NAMES.RED, LIGHT_NAMES.YELLOW, LIGHT_NAMES.GREEN];