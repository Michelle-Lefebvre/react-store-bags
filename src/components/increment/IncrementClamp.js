export const clamp = (min, max) => (v) => v <= min ? max : v >= max ? max : v;
