import React, { useState, useEffect } from 'react';
import emily from '../../assets/emily.svg';
import alex from '../../assets/alex.svg';
import jonathan from '../../assets/jonathan.svg';
import mark from '../../assets/mark.svg';
import michelle from '../../assets/michelle.svg';
import samuel from '../../assets/samuel.svg';
import ProjectCard from '../../components/project-card';





const teamMemberDatas = [
    { image: emily, name: "Dr. Emily Wells ", skill: ' Chief Scientist', description: "Dr. Emily Wells is a distinguished epidemiologist renowned for her trailblazing work in virus detection. With a string of successful studies and innovations in her portfolio, she brings a wealth of experience to her role as ViraSafe's Chief Scientist. Emily spearheads the development and refinement of the AI algorithms that power ViraSafe's virus detection capabilities. Her deep understanding of epidemiological trends and virus behavior allows her to fine-tune the algorithms for accuracy" },
    { image: alex, name: "Alex Ramirez", skill: 'Data Architect', description: "Alex Ramirez is a brilliant data architect who excels in designing and managing complex data ecosystems. With an innate knack for organizing vast data streams, Alex ensures that ViraSafe's AI engine is fed a steady flow of diverse information. Alex's ingenious data pipelines seamlessly integrate medical records, travel data, and real-time symptom reports. His ability to structure this data allows ViraSafe's algorithms to glean insights and patterns that would otherwise go unnoticed" },
    { image: jonathan, name: "Jonathan Lee", skill: 'Cybersecurity Specialist', description: "Jonathan Lee is an unwavering cybersecurity expert with a critical role in safeguarding ViraSafe's sensitive data. With a formidable understanding of digital threats and an arsenal of protective measures, Jonathan ensures that ViraSafe's operations remain secure against potential breaches. His expertise extends to establishing robust access controls, implementing encryption protocols, and conducting regular security audits." },
    { image: mark, name: "Dr. Mark Thompson ", skill: 'Medical Advisor', description: "Dr. Mark Thompson is a respected medical doctor with a specialization in infectious diseases. With a career spanning decades, he has witnessed the evolution of numerous outbreaks and pandemics. His wealth of clinical experience lends critical insights to ViraSafe's development. As the platform's Medical Advisor, Dr. Thompson ensures that the algorithms align with real-world health scenarios and medical accuracy" },
    { image: michelle, name: "Dr. Michelle Carter", skill: ' Epidemiology Analyst', description: "Dr. Michelle Carter is an adept epidemiology analyst specializing in deciphering complex data landscapes. With a Ph.D. in epidemiology and years of experience, she possesses a unique skill set that allows her to extract meaningful insights from intricate datasets. Michelle's role in the ViraSafe team involves deciphering the data mosaic to provide health authorities with actionable insights" },
    { image: samuel, name: "Samuel Park", skill: 'Machine Learning Engineer', description: "Samuel Park is a machine learning virtuoso dedicated to perfecting ViraSafe's AI models. With a keen eye for patterns and a knack for innovation, Samuel plays a pivotal role in fine-tuning the machine learning algorithms that power the platform. Samuel's work centers on training ViraSafe's algorithms to recognize subtle trends and anomalies within vast datasets." },
]

const ProjectDetails = () => {
    const [selectedTab, setSelectedTab] = useState('overview');
    const [projects, setProjects] = useState([]);



    useEffect(() => {
        if (selectedTab === 'overview') {
            setProjects([<ProjectOverview1 />]);
        } else if (selectedTab === 'community') {
            setProjects([<Community />]);
        } else if (selectedTab === 'reward') {
            setProjects([<RewardIncentives />]);
        } else if (selectedTab === 'team') {
            setProjects([<TeamMembers />]);
        } else if (selectedTab === 'update') {
            setProjects([<Updates />]);
        } else if (selectedTab === 'security') {
            setProjects([<Security />]);
        } else if (selectedTab === 'contact') {
            setProjects([<ContactInfo />]);
        }
    }, [selectedTab]);


    return (
        <>
            <main className='bg-[#121113]'>
                <section className='w-[90%] md:w-[80%] mx-auto py-10'>
                    
                    <div class="flex flex-col md:flex-col justify-center px-10 pt-8 pr-10">
                        <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">
                            ViraSafe
                        </h1>

                    </div>
                    <div className='py-2 mb-3 border md:text-start text-center w-full md:flex md:justify-between'>
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedTab('overview');
                            }}
                            class={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200  inline-flex items-center leading-none ${selectedTab === 'overview' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
                                } tracking-wider`}
                        >
                            Project Overview
                        </a>
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedTab('team');
                            }}
                            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200 inline-flex items-center leading-none ${selectedTab === 'team' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
                                } tracking-wider`}
                        >
                            Team Members
                        </a>
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedTab('reward');
                            }}
                            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200 inline-flex items-center leading-none ${selectedTab === 'reward' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
                                } tracking-wider`}
                        >
                            Reward/Incentives
                        </a>
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedTab('contact');
                            }}
                            className={`sm:px-6 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200  inline-flex items-center leading-none ${selectedTab === 'contact' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
                                } tracking-wider`}
                        >
                            Contact Information
                        </a>
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedTab('community');
                            }}
                            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200 inline-flex items-center leading-none ${selectedTab === 'community' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
                                } tracking-wider`}
                        >
                            Community
                        </a>
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedTab('update');
                            }}
                            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200  inline-flex items-center leading-none ${selectedTab === 'update' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
                                } tracking-wider`}
                        >
                            Updates
                        </a>
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedTab('security');
                            }}
                            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200 inline-flex items-center leading-none ${selectedTab === 'security' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
                                } tracking-wider`}
                        >
                            Security
                        </a>
                    </div>

                    {projects.map((project, index) => (
                        <div key={index} class="w-full mt-2">
                            {project}
                        </div>
                    ))}
                   
                </section>

            </main>

        </>
    )
}

export default ProjectDetails

export const ProjectOverview1 = () => {
    return (
        <>
            <section className='md:flex md:justify-between md:py-2 h-full'>
                <div className='w-full  md:w-[45%] md:h-[30vh] h-3/4 '>
                    {/* <img
                        src={incentive}
                        className='object-cover mb-10 h-40% w-40% object-center'
                        quality={100}
                        alt='m1'
                    /> */}
                    <ProjectCard />
                </div>

                <div className='md:w-[50%] w-full  text-white md:mt-0 mt-5 rounded-lg border border-spacing-4'>
                    <div>

                        <p className='mb-3 mx-8 mr-8 mt-8'>
                            ViraSafe is a tech start-up that employs advanced AI algorithms to swiftly analyze diverse data sources,
                            such as medical records, travel patterns, and symptom reports. By identifying unusual patterns and
                            correlations, it detects potential virus outbreaks in their early stages. Upon detection, the software
                            generates comprehensive reports detailing the potential outbreaks, including geographical clusters and
                            demographic trends. These insights are swiftly shared with healthcare authorities, equipping them with
                            vital information to enact swift and precise interventions. This proactive approach fosters a collaborative
                            response, allowing stakeholders to address outbreaks swiftly and effectively. By providing valuable predictive
                            capabilities, ViraSafe empowers societies to prioritize public health and shape a resilient, protected future.
                        </p>


                        <div className='flex justify-center w-full'>
                            <button type="button" className="md:w-[80%] w-full px-8 py-2 font-semibold rounded-lg bg-blue-100 text-black my-2">Edit Information</button>
                        </div>

                    </div>
                </div>





            </section>
        </>
    )
};

export const Community = () => {
    return (
        <>
            <section className='community py-10 md:h-[80vh]'>
                <div className="flex justify-space-between">
                    <div className='card rounded-lg border-2 border-spacing-x-2 border-spacing-y-2 mx-3'>

                        <div className='pb-5'>
                        <div class="w-12 h-12 bg-blue-100 rounded-full mx-36 mt-3"></div>
                            <h3 className='text-white font-bold pb-2 mx-24'>Investor Networks</h3>
                            <p className='text-white mx-2'>
                                Engaging with investor networks tailored to technology startups and
                                health-related ventures can help investors discover opportunities
                                like ViraSafe and connectwith fellow investors.
                            </p>
                        </div>
                    </div>
                    <div className='card rounded-lg border-2 border-spacing-2 mx-4'>
                        <div className='pb-5'>
                        <div class="w-12 h-12 bg-blue-100 rounded-full mx-36 mt-3"></div>
                            <h3 className='text-white font-bold pb-2 mx-20'>Online Health Forums</h3>
                            <p className='text-white mx-2'>
                                Online health forums or social media groups allows investors to engage
                                directly with users and gain insights into how ViraSafe is perceived
                                and utilized in the real world.
                            </p>
                        </div>
                    </div>
                    <div className='card rounded-lg border-2 border-spacing-2'>
                        <div className='pb-5'>
                        <div class="w-12 h-12 bg-blue-100 rounded-full mx-36 mt-3"></div>
                            <h3 className='text-white font-bold pb-2 mx-20'>HealthTech Innovation </h3>
                            <p className='text-white mx-2'>
                                Health technology innovation provides a platform for investors to connect
                                with startups like ViraSafe, fostering discussions about cutting-edge
                                solutions in the healthcare sector.
                            </p>
                        </div>
                    </div>


                </div>
                <button type="button" className="md:w-[70%] w-full px-8 py-2 font-semibold rounded-lg bg-blue-100 text-black mt-10 mx-36">Add Communities</button>
            </section>

        </>
    )
};

export const RewardIncentives = () => {
    return (
        <>
            <section className='md:flex md:justify-between md:py-2 h-full mx-auto w-[95%] md:w-full md:h-screen'>
                <div className='w-full md:w-[40%] md:h-[80vh] h-full'>
                    
                    <ProjectCard />
                </div>
                <div className='md:w-[55%] w-full text-white'>
                    <h2 className='inter-font text-lg md:text-xl font-bold mb-4'>
                        As a tech start-up, ViraSafe can offer various rewards and incentives
                        to its investors
                    </h2>
                    <ul className=''>
                        <li className='mb-3 text-base list-disc'>
                            <span className='font-bold'>Early Outbreak Alerts:  </span>Users will receive timely alerts about potential viral outbreaks in their area, allowing them to take proactive measures to protect themselves and their loved ones.
                        </li>
                        <li className='mb-3 text-base list-disc'>
                            <span className='font-bold'>Preventive Actions </span>ViraSafe's insights empower users to adopt preventive actions to minimize the risk of exposure to viruses, ultimately contributing to a healthier community.
                        </li>
                        <li className='mb-3 text-base list-disc'>
                            <span className='font-bold'>Healthcare Resource Access</span>  Users can access valuable information about nearby healthcare resources, testing facilities, and medical guidance, enabling informed decisions for their well-being.
                        </li>
                        <li className='mb-3 text-base list-disc'>
                            <span className='font-bold'>Global Health Impact </span>Users play a role in global health protection by participating in early outbreak detection, potentially preventing larger-scale outbreaks and their associated consequences.
                        </li>
                        <li className='mb-3 text-base list-disc'>
                            <span className='font-bold'>Empowerment Through Data: </span>Users gain access to valuable data insights, enabling them to make informed choices about travel plans, public events, and other activities that may impact their health.
                        </li>
                    </ul>
                    <button type="button" className="md:w-[100%] w-full px-8 py-2 font-semibold rounded-lg bg-blue-100 text-black">Edit Information</button>
                </div>
            </section>
        </>
    )
};

export const Updates = () => {
    return (
        <>
            <section className='md:flex md:justify-between md:py-2 md:h-screen h-full justify-center'>

                <div className='md:w-[80%] w-full text-white justify-center mx-32'>
                    <h2 className='inter-font text-lg md:text-xl font-bold mb-4'>
                        Dear Investors,
                    </h2>
                    <p className='text-gray-300'>



                        We are excited to update you on the remarkable progress of ViraSafe in our mission to revolutionize virus detection and prevention. Our AI-driven software has successfully analyzed extensive datasets, identifying patterns that have the potential to predict viral outbreaks at an early stage.

                        We are pleased to report that our algorithms have demonstrated a high level of accuracy in detecting potential outbreaks in multiple regions. The insights generated by ViraSafe are being actively shared with health authorities, enabling them to take swift and targeted preventive measures to protect public health.Furthermore, we have established collaborations with prominent epidemiologists and medical experts to ensure the medical accuracy of our predictions. This multidisciplinary approach enhances the reliability and real-world impact of ViraSafe's insights

                        The enthusiastic response from public health institutions and communities underscores the urgency and relevance of our technology. As we continue refining our algorithms and expanding our data sources, we remain committed to delivering robust and actionable insights that contribute to a safer, healthier world.

                        We appreciate your ongoing support and trust in our vision. Together, we are shaping a future where early viral outbreak detection becomes a powerful tool in safeguarding global well-being.

                        Thank you for being a part of our journey..
                    </p>

                    <button type="button" className="md:w-[80%] w-full px-8 py-2 font-semibold rounded-lg bg-blue-100 text-black mx-28 mt-24">Add Update</button>
                </div>

            </section>
        </>
    )
};

export const Security = () => {
    return (
        <>
            <section className='md:flex md:justify-between md:py-2 h-full md:h-screen'>

                <div className='md:w-[90%] w-full text-white mx-32'>
                    <h2 className='inter-font text-lg md:text-xl font-bold mb-4'>
                        ViraSafe, the tech startup focused on AI-driven virus detection and prevention, has implemented a comprehensive set of security measures to protect its platform, user data, and the integrity of its services
                    </h2>
                    <ul className='mb-5 text-gray-300'>
                        <li className='mb-3 text-base list-disc'>
                            <span className='font-bold'>Data Encryption: </span>All user data and communication are encrypted using industry-standard encryption protocols, ensuring that sensitive information remains confidential.
                        </li>
                        <li className='mb-3 text-base list-disc'>
                            <span className='font-bold'>Access Controls: </span> Strict access controls are in place to limit access to authorized personnel only, preventing unauthorized individuals from tampering with the system.
                        </li>
                        <li className='mb-3 text-base list-disc'>
                            <span className='font-bold'>Regular Security Audits:  </span>ViraSafe conducts regular security audits and vulnerability assessments to identify and address potential weaknesses in its infrastructure and software.
                        </li>
                        <li className='mb-3 text-base list-disc'>
                            <span className='font-bold'>User Authentication </span> Multi-factor authentication (MFA) may be required for users accessing sensitive information or making critical decisions within the platform.
                        </li>
                        <li className='mb-3 text-base list-disc'>
                            <span className='font-bold'>Data Backups: </span>Regular data backups are performed to ensure that user data can be restored in case of data loss due to unforeseen events or cyberattacks.
                        </li>
                        <li className='mb-3 text-base list-disc'>
                            <span className='font-bold'>Firewalls and Intrusion Detection Systems: </span> Firewalls and intrusion detection systems are implemented to monitor network traffic and block any suspicious or unauthorized access attempts.
                        </li>
                    </ul>
                    <button type="button" className="md:w-[80%] w-full px-8 py-2 font-semibold rounded-lg bg-blue-100 text-black mt-24 mx-10">Edit or Add Security Measures</button>
                </div>

            </section>
        </>
    )
};


export const TeamMembers = () => {
    return (
        <>
            {/* <section className='w-[90%] md:w-[80%] mx-auto py-10'> */}
            <div className='content-details py-10 flex justify-between flex-wrap'>

                {teamMemberDatas.map((teamMemberData, index) => (
                    <div key={index} className='content-card w-full md:w-[50%] mb-5 h-full rounded-t-lg'>
                        <div className='w-85% md:h-[80] h-full border-collapse mx-3'>
                            <img src={teamMemberData.image} alt="teamImage" className='object-cover h-full w-full object-center' />
                        </div>
                        <div className='w-full h-1/2 pb-5 p-2 shadow-md '>
                            <h3 className='font-bold text-white text-lg'>Name: {teamMemberData.name}</h3>
                            <h3 className='font-bold text-white text-lg'>Skill or Role: {teamMemberData.skill}</h3>
                            <p className='font-bold text-white text-lg'>Brief Description: <br />
                                <p className='font-normal text-base text-justify'>{teamMemberData.description}</p>
                            </p>

                        </div>

                    </div>
                ))}

                      </div>

            
        </>
    )
};

export const ContactInfo = () => {
    return (
        <>
            <section className='contactus py-5 md:h-[80vh] md:flex md:justify-between'>
                <div className='w-full md:w-[40%] md:h-[80vh] h-full'>
                   
                    <ProjectCard/>
                </div>

                <div className='md:w-1/2'>
                    <form action="" className="space-y-4">
                        <div className="space-y-4">

                            <div className="space-y-1">
                                <label htmlFor="email" className="block text-sm font-bold text-white">Email Address</label>
                                <input type="email" name="email" placeholder="Enter Email Address" className=" w-full p-2 border rounded-lg bg-blue-100 focus:outline-none pl-4 " />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="name" className="block text-sm font-bold text-white">Name</label>
                                <input type="text" name="text" placeholder="Enter Full Name" className="w-full p-2 border rounded-lg bg-blue-100 focus:outline-none pl-4" />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="message" className="block text-sm font-bold text-white">Message</label>
                                <textarea type="text" name="message" rows={5} cols={10} placeholder="Enter the details of your information here" className="w-full bg-blue-100 p-2 border rounded-lg focus:outline-none pl-4 resize-none " />
                            </div>

                            <div className='pt-2'>
                                <button type="button" className="md:w-[100%] w-full px-8 py-2 font-semibold rounded-lg bg-blue-100 text-black">Send message</button>
                            </div>

                        </div>
                    </form>
                    <div className='md:w-full pr-8 mb-5 text-gray-200'>
                        <h2 className='text-lg md:text-xl font-bold text-white mb-2'>Contact Information</h2>



                        <p className='flex w-full items-center mb-5'><span className='mr-1'>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z" fill="#FB923C"></path></g></svg>
                        </span> <span className='text-lg'> +5548 8909 1571</span></p>

                        <p className='flex w-full items-center mb-5'><span className='mr-1'>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Communication / Mail"> <path id="Vector" d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                        </span> <span className='text-lg'> ViraSafe@gmail.com</span></p>

                        <p className='flex w-full items-center mb-5'><span className='mr-1'>
                            <svg fill="#FB923C" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path> </g></svg>
                        </span> <span className='text-lg'> 67 Street Chi Avenue, United States</span>
                        </p>

                        <div className="flex items-center space-x-4 sm:mt-0">
                            <a
                                href="/"
                                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                </svg>
                            </a>
                            <a
                                href="/"
                                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                    <circle cx="15" cy="15" r="4" />
                                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                </svg>
                            </a>
                            <a
                                href="/"
                                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                </svg>
                            </a>
                            <a
                                href="/"
                                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                                    <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
};
