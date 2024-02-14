const createMediaQuery = (bp: number) => `@media (min-width: ${bp}px)`;

export const sm = createMediaQuery(640);
export const md = createMediaQuery(768);
export const lg = createMediaQuery(1024);
export const xl = createMediaQuery(1280);
export const xl2 = createMediaQuery(1536);
