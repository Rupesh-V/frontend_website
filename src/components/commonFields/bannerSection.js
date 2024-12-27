import React, { useState, useEffect } from 'react';
import TextInput from './textInput';  
import FileInput from './fileUpload';  

const BannerSection = ({ getPageBanner }) => {
  // Initialize the state variables
  const [bannerHead, setBannerHead] = useState('');
  const [bannerSubHead, setBannerSubHead] = useState('');
  const [bannerImage, setBannerImage] = useState('');
  const [bannerImageAlt, setBannerImageAlt] = useState('');

  // Populate data if getPageBanner is provided
  useEffect(() => {
    if (getPageBanner && getPageBanner.length > 0) {
      setBannerHead(getPageBanner[0].banner_head);
      setBannerSubHead(getPageBanner[0].banner_sub_text);
      setBannerImage(getPageBanner[0].banner_img);
      setBannerImageAlt(getPageBanner[0].banner_img_alt);
    }
  }, [getPageBanner]);

  return (
    <div className='row'>
      <div className="col-md-12 text-center pb-3 mb-3 pr-0">
        <p className="page-heading pt-2 pb-2 my-auto" style={{ backgroundColor: '#47adad1f', fontSize: '16px', fontWeight: '500' }}>
          <b>Banner Section</b>
        </p>
      </div>

      {/* Conditional rendering based on getPageBanner */}
      <div className="col-12 col-md-12 mb-0">
        <TextInput
          type="text"
          className="banner_head"
          name="banner_head"
          label="Banner Main Head"
          mandatory="yes"
          value={bannerHead}
          onChange={(e) => setBannerHead(e.target.value)}
        />
      </div>

      <div className="col-12 col-md-12 mb-0">
        <TextInput
          type="text"
          className="banner_sub_head"
          name="banner_sub_head"
          label="Banner Sub-Head"
          mandatory="yes"
          value={bannerSubHead}
          onChange={(e) => setBannerSubHead(e.target.value)}
        />
      </div>

      <div className="col-12 col-md-6 mb-0">
        <FileInput
          type="file"
          className="banner_image"
          id="banner_image"
          name="banner_image"
          label="Banner Image"
          mandatory="yes"
          functionType="SUBBNRS"
          note="SUBBNRS"
          value={bannerImage}
          onChange={(e) => setBannerImage(e.target.files[0])}
        />
      </div>

      <div className="col-12 col-md-6 mb-0">
        <TextInput
          type="text"
          className="banner_image_alt"
          name="banner_image_alt"
          label="Image Alt"
          mandatory="yes"
          value={bannerImageAlt}
          onChange={(e) => setBannerImageAlt(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BannerSection;
