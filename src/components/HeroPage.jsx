import React, { useState, useEffect, useRef } from 'react'

// Custom hook to detect mobile screen
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return isMobile
}

const slides = [
  {
    type: 'video',
    src: {
      desktop: './src/assets/video/vid1.mp4',
      mobile: './src/assets/video/res.mp4'
    },
    btn: 'Order Now',
  },
  {
    type: 'image',
    src: {
      desktop: './src/assets/images/1.jpeg',
      mobile: './src/assets/images/36ff4c17-69bb-453b-bc96-3b2819b9c2e3_Birthday-Box-Carousel-Ads_App.webp'
    },
    title: 'Celebrating a birthday?',
    subtitle: 'Make it sweeter with a special Birthday Box!'
  },
  {
    type: 'image',
    src: {
      desktop: './src/assets/images/2.jpeg',
      mobile: './src/assets/images/c691712d-1369-4042-9eb2-e1c78219a774_Secret-Menu_Carousel-Ads_App.webp'
    },
    title: 'Sweet Menu',
    subtitle: 'Handcrafted with love and the finest ingredients.'
  }
]

const HeroPage = () => {
  const [current, setCurrent] = useState(0)
  const [videoPaused, setVideoPaused] = useState(false)
  const videoRef = useRef(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 28000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (slides[current].type === 'video' && videoRef.current) {
      if (videoPaused) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }, [videoPaused, current])

  const goToSlide = (idx) => {
    setCurrent(idx)
    setVideoPaused(false)
  }

  return (
    <div className="relative w-full h-[80vh]  overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {slide.type === 'video' ? (
            <video
              ref={videoRef}
              src={isMobile ? slide.src.mobile : slide.src.desktop}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full  object-cover"
            />
          ) : (
            <img
              src={isMobile ? slide.src.mobile : slide.src.desktop}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 flex flex-col  md:justify-center items-center text-center">
            {slide.type !== 'video' && (
              <>
                <h1 className="text-4xl md:text-6xl font-bold font-[crumbl1] text-white md:mb-4 md:mt-0 mt-[120%] drop-shadow-lg">{slide.title}</h1>
                <p className="text-xl md:text-2xl text-white drop-shadow">{slide.subtitle}</p>
              </>
            )}
            {slide.type === 'video' && (
              <button
                className="absolute bottom-20 left-20 md:left-1/2 -translate-x-1/2 px-6 py-3 bg-black text-white rounded-full hover:bg-pink-600 transition"
                onClick={() => alert('Order Now clicked!')}
              >
                {slide.btn}
              </button>
            )}
            {slide.type === 'video' && (
              <button
                className="absolute bottom-20 md:right-10 right-1 -translate-x-5 md:-translate-x-1/2 px-4 py-2 bg-white text-black rounded-full shadow hover:bg-gray-200 transition"
                onClick={() => setVideoPaused((prev) => !prev)}
              >
                {videoPaused ? 'Play' : 'Pause'}
              </button>
            )}
          </div>
        </div>
      ))}
      {/* Slider navigation buttons */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full border-2 border-white ${current === idx ? 'bg-pink-600' : 'bg-white opacity-60'} transition`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroPage
