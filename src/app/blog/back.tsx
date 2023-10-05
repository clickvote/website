import * as React from 'react';

export default function Background() {
  return (
    <>
      <div className='absolute top-0 -z-50 h-[100%] w-[100%] bg-black'></div>
      <div>
        {/* First Gradient */}
        <div
          className='hidden md:block'
          style={{
            width: '100%',
            height: '100vw',
            background: 'radial-gradient(circle, #af46ff 0%, transparent 50%)',
            transform: 'scaleY(0.5)',
            position: 'absolute',
            left: '0',
            top: '-45vw',
            opacity: 0.7,
            zIndex: -10,
          }}
        />

        {/* First Gradient in Mobile View */}
        <div
          className='md:hidden'
          style={{
            width: '200%',
            height: '200vw',
            background: 'radial-gradient(circle, #af46ff 0%, transparent 50%)',
            transform: 'scaleY(0.5)',
            position: 'absolute',
            left: '-50vw',
            top: '-105vw',
            opacity: 0.7,
            zIndex: -10,
          }}
        />

        {/* Second Gradient in Embed Section */}
        <div
          className='hidden lg:block'
          style={{
            width: '120vw',
            height: '100vw',
            background: 'radial-gradient(circle, #af46ff 0%, #070707 50%)',
            position: 'absolute',
            left: '-60vw',
            top: '700px',
            transform: 'scaleY(0.8)',
            opacity: 0.4,
            rotate: '-147deg',
            zIndex: -10,
          }}
        />

        {/* Third Gradient in Feature Section */}
        <div
          className='hidden lg:block'
          style={{
            width: '100%',
            height: '100vw',
            background: 'radial-gradient(circle, #af46ff 0%, #070707 50%)',
            position: 'absolute',
            right: '-60%',
            top: '1600px',
            transform: 'scaleY(0.6)',
            opacity: 0.6,
            rotate: '-15deg',
            zIndex: -10,
          }}
        />
      </div>
    </>
  );
}
