import Link from "next/link";
import { Suspense } from "react";

// import blogData from '@/app/Utils/blog/blogData';
const BlogPage = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, { cache: 'force-cache' });
    const blogsData = await res.json();
    // const {id, title} = blogsData;
    console.log(blogsData)

    return (
        <div>
            <h1 className='text-7xl'>Blog Page</h1>
            <div className="grid grid-cols-2 gap-6 py-10">

                <Suspense>
                    {
                        blogsData.slice(0, 20).map(({ id, title, body }) => (
                            <div key={id} className="rounded-lg shadow-xl p-4">
                                <h3 className="text-2xl text-black capitalize">{title}</h3>
                                <p>{body.slice(0, 50)}....</p>
                                <Link href={`/blogs/${id}`}>
                                    <button className="gradient-button">
                                        See More
                                    </button>
                                </Link>
                            </div>
                        ))}
                </Suspense>
            </div>
        </div>
    );
};

export default BlogPage;