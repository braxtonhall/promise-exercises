/**
 * This function you shouldn't need to use
 * @param low
 * @param high
 */
function random(low: number, high: number): number {
    return low + Math.floor(Math.random() * (high - low));
}

/**
 * This function you shouldn't need to use
 * @param ms
 */
function sleep(ms: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export {random, sleep};
