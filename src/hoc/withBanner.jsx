
import React from 'react';
import BannerWithTitle from '../components/BannerWithTitle';

const withBanner = (WrappedComponent, desktopImage, mobileImage, title) => {
  return (props) => (
    <>
      <BannerWithTitle desktopImage={desktopImage} mobileImage={mobileImage} title={title} />
      <WrappedComponent {...props} />
    </>
  );
};

export default withBanner;
