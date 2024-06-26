import React from 'react';

interface BlogPostProps {
    title: string;
    date: string;
    author: string;
    content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, author, content }) => {
    return (
        <article className="font-body text-primary-900 max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-600">{date} by {author}</p>
        <div className="mt-4 text-gray-800">
            {content}
        </div>
    </article>
    );
};

export default BlogPost;