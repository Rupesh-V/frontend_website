import React from 'react';

const FileInput = ({
  name = 'image',
  id = 'image',
  className = '',
  functionType,
  ext,
  type,
  value = '',
  label = 'Image',
  bannerImagePath = '',
  indusImagePath = '',
  serviceImagePath = '',
  productImagePath = '',
  resourceImagePath = '',
  csImagePath = '',
  webinarImagePath = '',
  aboutImagePath = '',
  leadershipImagePath = '',
  thumbnailImagePath = '',
  multiple = false,
  mandatory = 'yes',
  note
}) => {

  // Placeholder functions for missing event handlers
  const resourcesListingCards = (event) => {
    console.log('Handling resources listing cards file input', event);
    // Add logic for handling this file input
  };

  const homePageMainBanners = (event) => {
    console.log('Handling home page main banners file input', event);
    // Add logic for handling this file input
  };

  const subPageBanners = (event) => {
    console.log('Handling sub-page banners file input', event);
    // Add logic for handling this file input
  };

  const regulationSubImgs = (event) => {
    console.log('Handling regulation sub images file input', event);
    // Add logic for handling this file input
  };

  const readGifUrl = (event) => {
    console.log('Handling GIF input', event);
    // Add logic for handling GIF input
  };

  const readURL = (event) => {
    console.log('Handling default file input', event);
    // Add logic for handling default file input
  };

  // Helper function to get the correct file onchange handler
  const getOnChangeHandler = () => {
    switch (functionType) {
      case 'RSLIST':
        return resourcesListingCards;
      case 'HMBNRS':
        return homePageMainBanners;
      case 'SUBBNRS':
        return subPageBanners;
      case 'REGSUBIMG':
        return regulationSubImgs;
      case 'GIF':
        return readGifUrl;
      default:
        return readURL;
    }
  };

  // Helper function to get the correct preview image path
  const getPreviewImageSrc = () => {
    switch (type) {
      case 'Banner':
        return `${bannerImagePath}/${value}`;
      case 'Industry':
        return `${indusImagePath}/${value}`;
      case 'Service':
        return `${serviceImagePath}/${value}`;
      case 'Product':
        return `${productImagePath}/${value}`;
      case 'Resource':
        return `${resourceImagePath}/${value}`;
      case 'CS':
        return `${csImagePath}/${value}`;
      case 'WEBINAR':
        return `${webinarImagePath}/${value}`;
      case 'About':
        return `${aboutImagePath}/${value}`;
      case 'Leader':
        return `${leadershipImagePath}/${value}`;
      case 'thumbnail':
        return `${thumbnailImagePath}/${value}`;
      default:
        return '';
    }
  };

  // Helper function to render the note based on the 'note' prop
  const renderNote = () => {
    switch (note) {
      case 'RSLIST':
        return "NOTE: Please upload an image with dimensions 821 x 529 pixels and a file size not exceeding 150 KB.";
      case 'HMBNRS':
        return "NOTE: Please upload an image with dimensions 1920 x 875 pixels and a file size not exceeding 200 KB.";
      case 'SUBBNRS':
        return "NOTE: Please upload an image with dimensions 1920 x 689 pixels and a file size not exceeding 130 KB.";
      case 'resourcesDetailsCards':
        return "NOTE: Please upload an image with dimensions 821 x 329 pixels and a file size not exceeding 70 KB.";
      case 'resourcesDetailsInfographics':
        return "NOTE: Please upload an image with dimensions 1426 x 726 pixels and a file size not exceeding 150 KB.";
      case 'REGSUBIMG':
        return "NOTE: Please upload an image with dimensions 572 x 384 pixels and a file size not exceeding 120 KB.";
      default:
        return null;
    }
  };

  return (
    <div className={`input-group position-relative ${note ? 'mb-2' : ''}`}>
      {/* File input with dynamic onchange handler */}
      <input
        type="file"
        className={className}
        name={name}
        id={id}
        onChange={getOnChangeHandler()}
      />

      {/* Preview button */}
      {type && value && (
        <button
          type="button"
          className="border-0 position-absolute preview-image-btn preview-image"
          src={getPreviewImageSrc()}
        >
          <i className="fa fa-eye" aria-hidden="true"></i>
        </button>
      )}

      {/* Hidden input for value */}
      <input
        type="hidden"
        className={`${className}_hidden_image`}
        name={multiple ? `${className}_hidden_image[]` : `${className}_hidden_image`}
        value={value}
      />

      {/* Label */}
      <label>
        {label} <span className="text-danger">{mandatory === 'yes' && '*'}</span>
      </label>

      {/* Note */}
      {renderNote() && <span className="text-danger">{renderNote()}</span>}
    </div>
  );
};

export default FileInput;
