export default async function getAllPosts() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
        next: {
            revalidate: 10
        }
    });
    const posts = await data.json();

    if (!data.ok) {
        throw new Error('There was an error fetching posts')
    }

    return posts;
}