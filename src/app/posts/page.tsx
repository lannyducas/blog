import React from 'react';
import Header from '@/components/Header';
import BlogPostComponent from '@/components/BlogPost';

interface BlogPost {

    title: string;
    date: string;
    author: string;
    content: string;
}

const BlogPosts: React.FC = () => {
    const posts: BlogPost[] = [
        { title: 'First Post', date: '', author: '', content: 'This is the content of the first blog post.' },
        { title: 'Second Post', date: '', author: '', content: 'This is the content of the second blog post.' },
        { title: 'Third Post', date: '', author: '', content: 'This is the content of the third blog post.' },
    ];

    return (
        <div>
            <Header />
            <h1 className="text-primary-900 text-3xl text-center font-display">Blog Posts</h1>
            {posts.map((post, index) => (
            //    <BlogPostComponent key={index} title={post.title} date={post.date} author={post.author} content={post.content}/>
            <BlogPostComponent key={index} title={post.title} date={post.date} author={post.author} content={post.content}/>
            ))}
        </div>
    );
};

export default BlogPosts;