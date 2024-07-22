import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then((response) => response.json())
        .then((blogs) => setBlogs(blogs))
    }, [])

    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 mt-12">
                {
                    blogs.map((blog, idx) => (
                      <Blog key={idx} blog={blog}></Blog>  
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;