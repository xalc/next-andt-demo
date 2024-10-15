import createMDX from '@next/mdx'
/** @type {import('next').NextConfig} */
const nextConfig = {};
const mdxConfig = {
    extension: /\.mdx?$/,
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
}
const withMDX = createMDX(mdxConfig)
export default withMDX(nextConfig);
