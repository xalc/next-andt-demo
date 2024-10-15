import path from 'path';
import { promises as fs } from 'fs';
const getMDXContent = async () => {
    const absPath = path.resolve(process.cwd(), 'src/resource', 'page.mdx');
    console.log(`absolute mdx file path ${absPath}`);
    let mdxContent = '';
    try {
        mdxContent = await fs.readFile(absPath, 'utf-8');
    } catch (err) {
        console.error(`${err}`);
    }
    return mdxContent;
}

export default getMDXContent;