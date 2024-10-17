import { MDXRemote } from 'next-mdx-remote/rsc'
import { Suspense } from 'react'
import getMDXContent from '@/libs/mdxreader';
import Expandable1 from './expandable1';

const ServerComponent = ({ content }) => {
    return (<Suspense fallback={<p>Loading feed...</p>}>
        <MDXRemote source={content} />
    </Suspense>);
}
export default async function ServerMDX() {
    const content = await getMDXContent();
    return (
        <Expandable1 render={<ServerComponent content={content} />} />

        // <Expandable>
        //     <ServerComponent content={content} />
        // </Expandable>

    );
}
