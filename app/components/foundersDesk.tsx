'use client';
import '../styles/styles.css';
import React from 'react';
import { useEffect, useState } from 'react';


export default function FoundersDesk() {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight * 0.5; // Adjust this value as needed
      setIsVisible(scrollTop > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
        <div  >
            <div className="  foundersPage fontFamily mt-12 ">
                <div className={`scroll-animationY ${isVisible ? 'visiblesectionName' : ''}`}>
                <div className="flex items-center justify-center whitespace-nowrap">
                    <hr className='separator'></hr>
                    <div className=" section-title whitespace-nowrap mobilePaddingHeader"><span className="section-title-highlight pr-2">Founder's</span>desk</div>
                    <hr className='separator'></hr>
                </div>
                </div>
                <div className=" mt-12 mb-6 flex foundersAlignment  md:gap-12 ">
                <div className={`scroll-animationY ${isVisible ? 'visibleFounderProfile' : ''}`}>
                    <div className="left-column">
                   
                      <div className="founderProfileWidth"><img src="founderProfileCircle.png" className='founderProfileChange' /></div>
                   
                    <div className='founderDetails whitespace-nowrap pt-2'><label className='title'>PREETHY SRIKANTHAN, <span className='title highlight'>Founder</span></label> </div>
                    </div>
                    </div>     
                    <div className="right-column flex flex-col md:gap-4 foundersContent">
                    <div className={`scroll-animationY ${isVisible ? 'visibleFounderContent' : ''}`}>
                        <div><label className=" firstPara" >After my stints with leading software companies, Veract was created out of my love for engineering and using technology to drive efficiency. We hire and develop people who share our passion for engineering.</label></div>
                        <div className="secondPara">At Veract you will directly work with passionate engineers who are keen to employ their superpowers to solve your challenges.</div>
                        <div className="thirdPara">I look forward to working with you and showcase our technical problem solving and software skills.</div>
                    </div>
                    </div>
                   
                </div>
                <div id="Services" className='mb-16'></div>
            </div>

        </div>
    );
}