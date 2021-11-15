export function chunk<T>(arr: T[], pieces: number): T[][] {
    console.log(arr, pieces);
    if (arr.length == 0) return [];
    if (pieces < arr.length) throw new RangeError("pieces >= arr.length not allowed");

    return Array(pieces).fill(0)
        .map((_, i) => arr.slice(i * pieces, i * pieces + pieces))  // : [[a, b], [c, d], [], []]
        .filter(a => a.length !== 0);                               // : [[a, b], [c, d]]
}
