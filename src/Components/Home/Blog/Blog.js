import React from 'react';
import security from '../../../images/security.jpg';
import clean from '../../../images/clean.jpg';
import speed from '../../../images/speed.jpg';
import './Blog.css'
import BlogInfo from './BlogInfo';


const blogData = [
    {
        title: 'Find The Best Book Online',
        description: 'TWith the help of Internet, you can find out the bet book for you...',
        author: 'Marie Jerry',
        img: security,
        date: '23 March 2021',
        search: 'computer-security-tips'
    },
    {
        title: 'Online Vs Offline Reading',
        description: 'There’s nothing quite like reading online through the pandemic situation...',
        author: 'Samuel Tyler',
        img: clean,
        date: '23 Jan 2020',
        search: 'computer-security-tips'
    },
    {
        title: 'How to Speed Up Your Reading',
        description: 'First reading is important as important as learning the lessons from the book...',
        author: 'Albert Philip',
        img: speed,
        date: '14 April 2021',
        search: 'computer-security-tips'
    },
]

const Blog = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="fw-bold">ARTICLES AND BLOGS</h2>
                    <h5 className='text-secondary'>Check out the latest publications by our team.</h5>
                </div>
                <div className="card-deck mt-5 d-flex justify-content-center">
                    {
                        blogData.map(blog => <BlogInfo blog={blog} key={blog.title} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;