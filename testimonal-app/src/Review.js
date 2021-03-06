import React, { useState, useEffect} from 'react';
import people from './data';
import { FaQuoteRight } from 'react-icons/fa';
import './Review.css';

const Review = () => {  
  const [index, setIndex] = useState(0);	
  const { name, job, image, text } = people[index];  

  useEffect(() => {
	const timer = setInterval(() => {
		(index === people.length - 1) ? setIndex(0) : setIndex(index + 1);		
    }, 10000);  
    return () => clearInterval(timer);
  });
       
  return (
	  <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
	  <p className='info'>{text}</p>    
	  <div className='review__progressbar'></div>	
    </article>
  );
};

export default Review;
