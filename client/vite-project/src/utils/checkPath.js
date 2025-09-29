export const checkPath = (current, exclude) => {
    if(!Array.isArray(exclude)) throw new Error("Exclude must be a valid array of path string.");
    if(typeof current !== "string" || !current.startsWith("/")) throw new Error("Current must be a valid path string starting with '/'");
    return !exclude.includes(current);
};
