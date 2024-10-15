import getMDXContent from "@/libs/mdxreader";
export async function GET(request) {
    const data = await getMDXContent();
    return new Response(data, {
        headers: { 'Content-Type': 'text/plain' }
    })
}