export default async function getAllPosts() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const posts = await data.json()
    return posts;
}