import React from 'react'
import Blog from '../Blog';

const BlogItem = ({blog}) => (
    <div className="blog_item">
        <div className="blog_item_img" style={{backgroundImage: `url(${blog.img})`}}/>
        <div className="blog_item_content">
            <h1>
                {blog.title}
            </h1>
            <h3>
               by {blog.author} 
            </h3>
            <p>
                {
                    blog.content[0].replace(/(([^\s]+\s\s*){50})(.*)/,"$1…")
                }
            </p>
            <span>
                {blog.date} {blog.time}
            </span>
        </div>
    </div>
)


export default BlogItem