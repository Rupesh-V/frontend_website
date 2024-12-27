import React, { useState, useEffect } from 'react';
import BannerSection from '../../commonFields/bannerSection'; // Assuming you have the BannerSection component
import { useNavigate } from 'react-router-dom';

const WhoEditPage = ({ getPageName }) => {
  const navigate = useNavigate();

  // State to manage success and error messages
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handlers for error and success messages (could be triggered based on API responses)
  const handleError = (msg) => setErrorMessage(msg);
  const handleSuccess = (msg) => setSuccessMessage(msg);

  return (
    <section style={{margin: '60px 15px 0 260px',transition: '0.5s', backgroundColor: '#eaf0f7'}}>
        <div className="container-fluid">
        <div className="row">
            {/* Page Title */}
            <div className="col-md-3 pt-3 pb-3">
            {getPageName && getPageName.length > 0 ? (
                <h4 className="page-title">Edit {getPageName[0].name}</h4>
            ) : (
                <h4 className="page-title">Edit</h4>
            )}
            </div>

            {/* Error/Success Messages */}
            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-6 mb-0 pt-3 pb-3 text-center">
            {errorMessage && (
                <div className="error_msg col-red w-100" style={{ fontSize: '16px' }}>
                {errorMessage}
                </div>
            )}
            {successMessage && (
                <div className="success_msg col-green w-100" style={{ fontSize: '16px' }}>
                {successMessage}
                </div>
            )}
            </div>

            {/* Action Buttons */}
            <div className="col-md-3 pt-3 pb-3">
            <button type="submit" className="custom-submit-btn update-whoweare-update-btn float-right">
                UPDATE
            </button>
            <button type="button" className="custom-add-btn float-right mr-3" onClick={() => navigate('/about-us')}>
                Back
            </button>
            </div>
        </div>

        {/* Card Section */}
        <div className="card pt-4 pb-4 pr-4">
            <div className="card-body">
            <div className="row">
                {/* Banner Section */}
                <BannerSection getPageBanner={getPageName} />
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default WhoEditPage;
