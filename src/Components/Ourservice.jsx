import React from 'react'

const Ourservice = () => {
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
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li>
              <a className="nav-link" href="#faq">FAQ</a>
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


            <div className=''>
                <h2 className='text-center my-5'>Our Services</h2>
                <div className='container'>
                    <div className='row'>
                        {/* Personal Banking */}
                        <div className='col-md-4'>
                            <div className='card mb-4'>
                                <div className='card-body' style={{ backgroundImage: 'linear-gradient(to right, #f8f9fa, #2281e0ff)' }}>
                                    <h5 className='card-title'>Personal Banking</h5>
                                    <p className='card-text'>Manage your personal finances with ease.
                                        <ul>
                                            <li>Checking and savings accounts</li>
                                            <li>Personal loans and mortgages</li>
                                            <li>Financial planning and advice</li>
                                            <li>Insurance products</li>
                                            <li>Credit and debit cards</li>
                                            <li>Online and mobile banking</li>
                                            <li>Financial literacy resources</li>
                                            <li>Customer support and assistance</li>
                                            <li>Wealth management services</li>
                                            <li>Investment advisory services</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Business Solutions */}
                        <div className='col-md-4'>
                            <div className='card mb-4'>
                                <div className='card-body' style={{ backgroundImage: 'linear-gradient(to right, #f8f9fa, #2281e0ff)' }}>
                                    <h5 className='card-title'>Business Solutions</h5>
                                    <p className='card-text'>Tailored solutions for your business needs.
                                        <ul>
                                            <li>Business accounts and loans</li>
                                            <li>Merchant services</li>
                                            <li>Cash management solutions</li>
                                            <li>Payroll services</li>
                                            <li>Business credit cards</li>
                                            <li>Commercial real estate financing</li>
                                            <li>Business advisory services</li>
                                            <li>Risk management solutions</li>
                                            <li>Employee benefits and retirement plans</li>
                                            <li>Business insurance options</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Investment Services */}
                        <div className='col-md-4'>
                            <div className='card mb-4'>
                                <div className='card-body' style={{ backgroundImage: 'linear-gradient(to right, #f8f9fa, #2281e0ff)' }}>
                                    <h5 className='card-title'>Investment Services</h5>
                                    <p className='card-text'>Grow your wealth with our investment options.
                                        <ul>
                                            <li>Stocks, bonds, and mutual funds</li>
                                            <li>Retirement planning</li>
                                            <li>Wealth management services</li>
                                            <li>Investment advisory services</li>
                                            <li>Portfolio management</li>
                                            <li>Financial market analysis</li>
                                            <li>Risk assessment and mitigation</li>
                                            <li>Tax planning and optimization</li>
                                            <li>Estate planning</li>
                                            <li>Trust services</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Digital Banking */}
                        <div className='col-md-4'>
                            <div className='card mb-4'>
                                <div className='card-body' style={{ backgroundImage: 'linear-gradient(to right, #e0eafc, #cfdef3)' }}>
                                    <h5 className='card-title'>Digital Banking</h5>
                                    <p className='card-text'>Bank anywhere, anytime with our digital solutions.
                                        <ul>
                                            <li>Mobile and online banking</li>
                                            <li>Instant fund transfers</li>
                                            <li>Bill payments and e-statements</li>
                                            <li>24/7 customer support</li>
                                            <li>Secure transactions</li>
                                            <li>Personal finance management tools</li>
                                            <li>Budgeting and savings features</li>
                                            <li>Account alerts and notifications</li>
                                            <li>Virtual banking assistants</li>
                                            <li>Seamless user experience</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Insurance Services */}
                        <div className='col-md-4'>
                            <div className='card mb-4'>
                                <div className='card-body' style={{ backgroundImage: 'linear-gradient(to right, #f8ffae, #43c6ac)' }}>
                                    <h5 className='card-title'>Insurance Services</h5>
                                    <p className='card-text'>Protect what matters most to you.
                                        <ul>
                                            <li>Life and health insurance</li>
                                            <li>Property and casualty insurance</li>
                                            <li>Travel insurance</li>
                                            <li>Auto insurance</li>
                                            <li>Liability insurance</li>
                                            <li>Homeowners insurance</li>
                                            <li>Business insurance</li>
                                            <li>Specialty insurance products</li>
                                            <li>Risk assessment and mitigation</li>
                                            <li>Tax planning and optimization insurance</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Student Banking */}
                        <div className='col-md-4'>
                            <div className='card mb-4'>
                                <div className='card-body' style={{ backgroundImage: 'linear-gradient(to right, #f7971e, #ffd200)' }}>
                                    <h5 className='card-title'>Student Banking</h5>
                                    <p className='card-text'>Specialized services for students.
                                        <ul>
                                            <li>Student accounts</li>
                                            <li>Education loans</li>
                                            <li>Scholarship guidance</li>
                                            <li>Financial literacy programs</li>
                                            <li>Internship and job placement assistance</li>
                                            <li>Budgeting tools for students</li>
                                            <li>Student discounts and offers</li>
                                            <li>Financial planning resources</li>
                                            <li>Tax planning and optimization resources</li>
                                            <li>Student loan repayment assistance</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card mb-4'>
                                <div className='card-body' style={{ backgroundImage: 'linear-gradient(to right, #a1c4fd, #c2e9fb)' }}>
                                    <h5 className='card-title'>International Banking</h5>
                                    <p className='card-text'>Banking services for global citizens.
                                        <ul>
                                            <li>Foreign currency accounts</li>
                                            <li>International wire transfers</li>
                                            <li>Global investment options</li>
                                            <li>Cross-border payment solutions</li>
                                            <li>International debit and credit cards</li>
                                            <li>Expatriate banking services</li>
                                            <li>Foreign exchange advisory</li>
                                            <li>International student accounts</li>
                                            <li>Global remittance services</li>
                                            <li>Multi-currency investment portfolios</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card mb-4'>
                                <div className='card-body' style={{ backgroundImage: 'linear-gradient(to right, #fceabb, #f8b500)' }}>
                                    <h5 className='card-title'>SME Banking</h5>
                                    <p className='card-text'>Empowering small and medium enterprises.
                                        <ul>
                                            <li>SME loans and credit</li>
                                            <li>Business advisory services</li>
                                            <li>Startup support</li>
                                            <li>Working capital solutions</li>
                                            <li>Trade finance services</li>
                                            <li>Invoice discounting</li>
                                            <li>Business insurance for SMEs</li>
                                            <li>Market entry advisory</li>
                                            <li>Digital business banking tools</li>
                                            <li>Networking and mentorship programs</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card mb-4'>
                                <div className='card-body' style={{ backgroundImage: 'linear-gradient(to right, #d4fc79, #96e6a1)' }}>
                                    <h5 className='card-title'>Agricultural Finance</h5>
                                    <p className='card-text'>Supporting the agricultural sector.
                                        <ul>
                                            <li>Farm loans and credits</li>
                                            <li>Agri-insurance</li>
                                            <li>Equipment financing</li>
                                            <li>Crop insurance</li>
                                            <li>Agri-business advisory</li>
                                            <li>Supply chain financing</li>
                                            <li>Warehouse receipt financing</li>
                                            <li>Agri-tech solutions</li>
                                            <li>Export finance for agriculture</li>
                                            <li>Farmer training and education</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourservice