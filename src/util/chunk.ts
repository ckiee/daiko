export function chunk<T>(arr: T[], pieces: number): T[][] {
    if (arr.length == 0) return [];
    if (arr.length < pieces) throw new RangeError(`array isn't long enough (${arr.length}) to chunk (${pieces})`);

    return Array(pieces).fill(0)
        .map((_, i) => arr.slice(i * pieces, i * pieces + pieces))  // : [[a, b], [c, d], [], []]
        .filter(a => a.length !== 0);                               // : [[a, b], [c, d]]
}
