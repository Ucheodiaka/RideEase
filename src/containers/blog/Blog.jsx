import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='rideease__blog section__padding' id='blog'>
      <div className='rideease__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className='rideease__blog-container'>
        {/* <div className='rideease__blog-container_groupA'></div> */}
        <div className='rideease__blog-container_groupB'>
          <Article
            imgUrl={blog01}
            date='Oct 30, 2023'
            text='Ride Ease is the future. Let us exlore how it is?'
          />
          <Article
            imgUrl={blog02}
            date='Oct 30, 2023'
            text='Ride Ease is in the news. But only for the right reason!'
          />
          <Article
            imgUrl={blog03}
            date='Oct 30, 2023'
            text='Ride Ease is here to stay! This is why you should choose us.'
          />
          <Article
            imgUrl={blog04}
            date='Oct 30, 2023'
            text='Ride Ease and carbon footprint.'
          />
          <Article
            imgUrl={blog05}
            date='Oct 30, 2023'
            text="Ride Ease is the customers' choice!"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
