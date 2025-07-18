import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    feedback:
      'Gain seamless access to a wide range of tenders and bidding opportunities, all in one place. AssureBid empowers businesses with intelligent procurement tools that streamline the tendering process, helping you win more bids and grow your business.',
  },
  {
    feedback:
      'Gain seamless access to a wide range of tenders and bidding opportunities, all in one place. AssureBid empowers businesses with intelligent procurement tools that streamline the tendering process, helping you win more bids and grow your business.',
  },
  {
    feedback:
      'Gain seamless access to a wide range of tenders and bidding opportunities, all in one place. AssureBid empowers businesses with intelligent procurement tools that streamline the tendering process, helping you win more bids and grow your business.',
  },
  {
    feedback:
      'Gain seamless access to a wide range of tenders and bidding opportunities, all in one place. AssureBid empowers businesses with intelligent procurement tools that streamline the tendering process, helping you win more bids and grow your business.',
  },
];

const AuthSide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, rgba(199, 199, 199, 0.2) 0%, rgba(206, 206, 206, 0.4) 46%, rgba(206, 206, 206, 0) 100%)',
      }}
    >
      <img
        src="/images/Assured-BID-Logo.svg"
        alt=""
        className="px-[30px] py-[20px] md:px-[50px] lg:px-[50px]"
      />
      <section className="section-paddings">
        <div className="grow-1">
          <h1 className="text-[24px] font-semibold text-[#2A2E34] max-w-[400px] pb-[10px]">
            Simplify Tendering & Procurement with Ease.{' '}
          </h1>
        </div>

        <div className="max-w-[580px] items-center justify-center overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="w-full flex-shrink-0" key={index}>
                <div className="rounded-xl">
                  <p className="text-p-secondary text-[14px] font-medium leading-[21px]">
                    {testimonial.feedback}
                  </p>

                  {/* Dot Group */}
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`transition-all ${
                            currentIndex === index
                              ? 'h-2 w-7 bg-p-primary'
                              : 'h-2 w-2 bg-gray-300'
                          } rounded-full`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex gap-4 md:hidden">
          <button
            className="prev rounded-lg bg-[#cce0bc] p-4"
            onClick={prevSlide}
          >
            <ArrowLeft color="#66A039" size={32} />
          </button>
          <button
            className="next rounded-lg bg-[#cce0bc] p-4"
            onClick={nextSlide}
          >
            <ArrowRight color="#66A039" size={32} />
          </button>
        </div>
      </section>
      <div className=''>
        <img src="/images/AuthImg.svg" alt="" className='pl-[50px] w-[100%]'/>
      </div>
    </div>
  );
};

export default AuthSide;
