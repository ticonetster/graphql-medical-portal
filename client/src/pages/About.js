import React from 'react';
// import './style.css';
import about1 from '../assets/images/about/about1.jpg'
import about2 from '../assets/images/about/about2.jpg'
import about3 from '../assets/images/about/about3.jpg'
import about4 from '../assets/images/about/about4.jpg'
import about5 from '../assets/images/about/about5.jpg'
// import about6 from '../assets/images/about/about6.jpg'

export const About = () => {
    return (
        <div className="about">
            <br />
            <h2>Excellent Care That’s Here for Good</h2>
            <br />
            <h3>MedPort is a trusted leader for quality health care</h3>
            <br />
            <section >
                <div className='about1'>
                    <div>
                        <strong>
                            Each day at MedPort, we put the vision of our founders into action, dedicating ourselves to quality, 
                            safe, cost-efficient, socially responsible health care for everyone we serve. We keep that vision at 
                            the forefront as we care for patients, engage in clinical research and ultimately improve community health.
                        </strong>
                        <br />
                        <strong>
                            With MedPort, you get an ally. A friend. A partner who believes in the healthiest version of you. And we do
                            everything within our power to get you there and keep you there.
                        </strong>
                        <br />
                        <strong>
                            We do all of this in a supportive, collaborative and caring environment. We do this to make a positive,
                            measurable difference in the health of our patients and nationwide. We do this to ensure you and your family
                            have access to the best possible care when and where you need it — at every stage in your life. We do this
                            because it is a calling, our mission and our promise to you. We’re here for you. We’re here for good.
                        </strong>
                    </div>
                    <img src={about1} alt='about1_image'></img>
                </div>
                <div data-context-name="text">
                    <h3>
                        Here for you
                    </h3>
                    <p><br /></p>
                    <strong>
                        We’re a $3.1 billion not-for-profit health care organization whose legacy spans decades for one shining
                        reason — excellence. It’s a high bar we’ve set for the entire organization — 15,000 employees, 3,000
                        affiliated physicians and more than 2,000 volunteers strong.
                    </strong>
                    <p><br /></p>
                    <strong>
                        It’s been this way since we started. It’s who we are today. It’s where we’ll keep going as we face the
                        challenges of tomorrow.
                    </strong>
                </div>
                <div>
                    <img src={about2} alt='about2_image'></img>
                </div>
                <div data-context-name="text">
                    <h3>
                        Here to inspire
                    </h3>
                    <p><br /></p>
                    <strong>
                        Our founders were the visionaries of their time who inspire us today. We’re also inspired by our exceptional
                        physicians, nurses and staff on the front lines of health care every day. Most of all, we’re inspired by our
                        patients who show tremendous courage on their journeys back to health.
                    </strong>
                </div>
                <div>
                    <img src={about3} alt='about3_image'></img>
                </div>
                <div data-context-name="text">
                    <h3>
                        Here to give back
                    </h3>
                    <p><br /></p>
                    <strong>
                        As a not-for-profit organization, it’s our mission to care for everyone who comes through our doors — including
                        devoting significant resources to those who are vulnerable or underserved. It’s this unwavering commitment to
                        our community that defines us.
                    </strong>
                </div>
                <div>
                    <img src={about4} alt='about4_image'></img>
                </div>
                <div data-context-name="text">
                    <h3>
                        Here to serve
                    </h3>
                    <p><br /></p>
                    <strong>
                        In addition to our drive for excellence, we believe that diversity and inclusivity make us strong and help us
                        all work smarter for a healthy San Diego. That’s just one of the reasons we’re ranked in the Top 100 Places to
                        Work in the nation — and a place where thousands of volunteers serve.
                    </strong>
                </div>
                <div>
                    <img src={about5} alt='about5_image'></img>
                </div>
                <div data-context-name="text">
                    <h3>
                        Here to connect
                    </h3>
                    <p><br /></p>
                    <strong>
                        From the customer engagement center for physician referrals to billing and medical records, interpreters,
                        human resources, media and more, we’re here for you. Browse our contact list to find the department or
                        business unit you’d like to reach.
                    </strong>
                </div>
            </section>
        </div>
    )
}

export default About;
