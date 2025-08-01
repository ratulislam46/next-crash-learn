export default async function getPostComments(id) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const posts = await data.json()
    return posts;
}