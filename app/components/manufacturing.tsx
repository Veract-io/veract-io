'use client';
import React, { useState, useEffect } from 'react';


import DashboardDetails from './dashboardPortfolio';

import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';

export default function Manufacturing(){
    const scrollToSection = (sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      const handleMenuClick = (sectionId:string) => {
        scrollToSection(sectionId);
      };
        
    return(
        <div>

            <div className="mobileCaseStudy">
            <div id="portfolioDetails" className='fontFamily'>
                    <div className='caseDetails_mobile'>
                        <div className='caseHeader_mobile'>                                
                                <div className='caseHeaderTitle_mobile flex flex-wrap pl-5'>Quality Documentation for Metal Foundry   </div>
                                <div className='caseHeaderIcon_mobile pt-5 pb-11 pl-5'>Grey iron and ductile iron foundry looking for an automated quality report generation for customer submission . </div>

                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>Parts submission require quality documents to be submitted regarding spectrometer reading ,sand properties,pouring properties,mould properties .</div>
                                <div className='flex flex-col pt-6'>
                                        <div className='challengePoints_mobile'></div>
                                        <div className='challengePoints_mobile'></div>
                                        <div className='challengePoints_mobile'></div>
                                </div>
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>One stop solution that consolidates all quality documents along with CAPA followup, machine maintenance and defect prediction.</div>
                                <div className='flex flex-col pt-6'>
                                        <div className='solutionPoints_mobile'></div>
                                        <div className='solutionPoints_mobile'></div>
                                        <div className='solutionPoints_mobile'></div>
                                </div>
                            </div>
                        </div>
                        <div className='BottomContainer_mobile pt-10'>
                            <div className='mainContainer'>
                                <div className='serviceContainer_mobile'>
                                    <div className='ServiceImage'><img src="/caseStudies/vehicle.png" className='w-16'/></div>
                                    <div className='serviceHeader_mobile pt-2'>Services</div>
                                    <div className='serviceText_mobile pt-2'>Software architecture consulting </div>
                                    <div className='serviceText_mobile pt-2'>Software development</div>
                                    <div className='serviceText_mobile pt-2'>Deployment</div>
                                </div>
                                <div className='platformContainer_mobile'>
                                    <div className='ServiceImage'><img src="/caseStudies/web.png" className='w-16'/></div>
                                    <div className='serviceHeader_mobile pt-2'>Platform</div>
                                    <div className='PlatformText_mobile pt-2'>Mobile</div>
                                    <div className='PlatformText_mobile pt-2'>and</div>
                                    <div className='PlatformText_mobile pt-2'>Web applications</div>
                                </div>
                            </div>
                        </div> 
                        <div className="pt-2.5 pl-5 pr-5 pb-10">
                            <div className="techstackContainer_mobile">
                                    <div className='techImageTitle_mobile pl-20 pr-20'>
                                        <div className='ServiceImage'><img src="/caseStudies/tech-service.png" className='w-16 pt-1'/></div>
                                        <div className='serviceHeader_mobile pt-2'>Techstack</div>
                                    </div>
                                <div className='techContent_mobile'>
                                    <div className="flex flex-row justify-around pt-6">
                                        <div className="flex flex-col md:gap-6">
                                            <div className='techText_mobile pb-3'>Bootstrap</div>
                                            <div className='techText_mobile pb-3'>Express.js</div>
                                            <div className='techText_mobile pb-3'>Jquery</div>
                                            <div className='techText_mobile pb-3'>MongoDB</div>
                                        </div>
                                        <div className="flex flex-col md:gap-6">
                                            <div className='techText_mobile pb-3'>Redis</div>
                                            <div className='techText_mobile pb-3'>Indexdb</div>
                                            <div className='techText_mobile pb-3'>Google API</div>
                                        </div>     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                </div>  
           </div>
        </div>
    )
}