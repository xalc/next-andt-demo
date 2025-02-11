import { MDXRemote } from 'next-mdx-remote/rsc'
import { Suspense } from 'react'
import getMDXContent from '@/libs/mdxreader';
export default async function ServerMDX() {
    const content = await getMDXContent();
    return (

        <Suspense fallback={<p>Loading feed...</p>}>
            <MDXRemote source={content} />
        </Suspense>
    );
}
