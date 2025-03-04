import React, { useEffect, useState } from 'react';

const Debug = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSrc, setImageSrc] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Set the image source using Vite's base URL
    const src = import.meta.env.BASE_URL + 'profile_picture.jpg';
    setImageSrc(src);
    
    // Try to preload the image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = src;

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const basePathWithoutTrailingSlash = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

  return (
    <div className="fixed bottom-0 left-0 bg-black bg-opacity-75 text-white p-4 z-50 max-w-full overflow-auto">
      <h3 className="text-lg font-bold">Debug Info</h3>
      <p>Window Width: {windowWidth}px</p>
      <p>Is Mobile (by Tailwind): {windowWidth < 768 ? 'Yes' : 'No'}</p>
      <p>BASE_URL: {import.meta.env.BASE_URL}</p>
      <p>Image Path: {imageSrc}</p>
      <p>Image Loaded: {imageLoaded ? 'Yes' : 'No'}</p>
      <p>Image Error: {imageError ? 'Yes' : 'No'}</p>
      
      <div className="mt-2">
        <h4 className="font-bold">Test Images:</h4>
        <div className="grid grid-cols-3 gap-2 mt-1">
          <div>
            <p className="text-xs">BASE_URL + profile_picture.jpg</p>
            <img 
              src={import.meta.env.BASE_URL + 'profile_picture.jpg'} 
              alt="Test 1" 
              className="w-16 h-16 object-cover border"
              onError={(e) => {
                e.currentTarget.style.border = '2px solid red';
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div>
            <p className="text-xs">/profile_picture.jpg</p>
            <img 
              src="/profile_picture.jpg" 
              alt="Test 2" 
              className="w-16 h-16 object-cover border"
              onError={(e) => {
                e.currentTarget.style.border = '2px solid red';
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div>
            <p className="text-xs">/PortFolio/profile_picture.jpg</p>
            <img 
              src="/PortFolio/profile_picture.jpg" 
              alt="Test 3" 
              className="w-16 h-16 object-cover border"
              onError={(e) => {
                e.currentTarget.style.border = '2px solid red';
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debug;