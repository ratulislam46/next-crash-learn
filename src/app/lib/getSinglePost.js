export default async function getSignlePost(id) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const posts = await data.json()
    return posts;
}