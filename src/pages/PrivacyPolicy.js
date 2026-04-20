import React from 'react'
import { privacyPolicyData } from '../data'
import transition from '../transition';

const PrivacyPolicy = () => {
    const {title, sub, details} = privacyPolicyData;
  return (
    <>
        <section className='flex flex-col pt-48 pb-20 mx-6 gap-y-5 lg:mx-52'>
            <h1 className='font-baskerville text-4xl text-dark justify-start'>{title}</h1>
            <p className='font-garamond text-xl text-justify text-dark'>{sub}</p>
            <h2 className='text-dark font-baskerville text-3xl text-start'>General Data Protection Regulation (GDPR)</h2>
            <p className='font-garamond text-dark text-xl leading-relaxed text-justify'>
                We are a Data Controller of your information. 
                Restoran Dubrovnik legal basis for collecting and using the personal information described in this 
                Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:
            </p>  
            <ul className='list-inside list-disc font-garamond text-dark text-xl'>
                    <li>Restoran Dubrovnik needs to perform a contract with you</li>
                    <li>You have given Restoran Dubrovnik permission to do so</li>
                    <li>Processing your personal information is in Restoran Dubrovnik legitimate interests</li>
                    <li>Restoran Dubrovnik needs to comply with the law</li>
            </ul>
            <p className='font-garamond text-dark text-xl'>
                Restoran Dubrovnik will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. 
                We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies. If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us. 
                In certain circumstances, you have the following data protection rights:
            </p>
            <ul className='list-inside list-disc font-garamond text-dark text-xl'>
                <li>The right to access, update or to delete the information we have on you.</li>
                <li>The right of rectification.</li>
                <li>The right to object.</li>
                <li>The right of restriction.</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
            </ul>
            {details.map((item, index) => {
                const {subtitle, text } = item;
                return (
                    <div key={index} className='flex flex-col gap-y-3 leading-relaxed'>
                        <h2 className='text-dark font-baskerville text-3xl text-start'>{subtitle}</h2>
                        <p className='text-dark font-garamond text-xl text-justify'>{text}</p>
                </div>) 
            })}
        </section>
    </>
  )
}

export default transition(PrivacyPolicy); 
