
'use client'

import { Suspense, useState, useEffect } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc'
export default function ClientMDX() {
    const [content, setContent] = useState();
    useEffect(() => {
        fetch(`/api/mdx`)
            .then(res => res.text())
            .then(content => setContent(content))
    }, [])

    return (<Suspense fallback={<p>Loading feed...</p>}>
        <MDXRemote source={content} />
    </Suspense>
    );
}
