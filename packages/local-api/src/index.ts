export const serve = (post: number, filename: string, dir: string) => { 
    console.log(`Serving on port ${post}`);
    console.log(`Saving/fetching cells from ${filename}`);
    console.log(`That file is in dir ${dir}`);
}