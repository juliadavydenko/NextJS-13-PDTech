const getPostsData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
};


export default async function ListOfPosts () {
    const posts = await getPostsData();
    return (
        <div>
            {posts.map((post: any) => {
                return <p>{post.title}</p>;
            })}
        </div>
    );
}