import React from 'react'

const Faq = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold text-primary" href="#">PrivoBank💎</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="http://localhost:3001/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3001/shits">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3001/about">about</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3001/Contact">Contact</a>
                            </li>
                            <li>
                                <a className="nav-link" href="http://localhost:3001/faq">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#faq">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-primary ms-3">Login</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-primary ms-3">SignUp</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container my-5">
                <h2 className="fw-bold text-center mb-4 text-primary">Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq1">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                How do I open an account with PrivoBank?
                            </button>
                        </h2>
                        <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">You can open an account online through our website or visit any of our branches with a valid ID and proof of address.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                What documents do I need to open an account?
                            </button>
                        </h2>
                        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">You will need a valid government-issued ID, proof of address, and a recent passport photograph.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                How can I reset my online banking password?
                            </button>
                        </h2>
                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">Click on "Forgot Password" on the login page and follow the instructions to reset your password securely.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                How do I contact customer support?
                            </button>
                        </h2>
                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">You can reach us via email at privilegeoyegbile@gmail.com, phone at +234 708 4689 043, or through our contact form on the website.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq5">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                Where are your branches located?
                            </button>
                        </h2>
                        <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="faq5" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">Our main branch is in Ogbomoso, Oyo State, Nigeria. Visit our website for a full list of locations.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq6">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                How do I apply for a loan?
                            </button>
                        </h2>
                        <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="faq6" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">You can apply for a loan online or at any branch. Required documents include proof of income, valid ID, and completed application form.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq7">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                Is my money safe with PrivoBank?
                            </button>
                        </h2>
                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="faq7" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">Yes, we use advanced security measures and are regulated by the Central Bank of Nigeria to ensure your funds are safe.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq8">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                Can I use PrivoBank services outside Nigeria?
                            </button>
                        </h2>
                        <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="faq8" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">Yes, our digital banking services are accessible worldwide. Some services may be limited based on your location.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq9">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                How do I update my personal information?
                            </button>
                        </h2>
                        <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="faq9" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">Log in to your online banking account and go to the profile section, or visit a branch with your ID to update your information.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq10">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                What should I do if I suspect fraud on my account?
                            </button>
                        </h2>
                        <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="faq10" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">Contact us immediately via phone or email. We will assist you in securing your account and investigating the issue.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq