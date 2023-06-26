// From the TypeScript discord, command !retsam19:includes
//
// The type of Array.prototype.includes assumes that you're
// using the string to check something about the array.
//
// If you're trying to do the reverse, a modified type signature is useful:
export function includes<S extends string>(haystack: readonly S[], needle: string): needle is S {
    const _haystack: readonly string[] = haystack;
    return _haystack.includes(needle)
}
