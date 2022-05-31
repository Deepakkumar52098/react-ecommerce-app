import React, { useEffect, useState } from 'react'
import './slider.css'
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { sliderItems } from '../../data'


const Slider = () => {

    const [item, setItem] = useState({})

    const handleClick = (direction, id) => {
        const itemLength = sliderItems.length
        const currentItemPosition = sliderItems.findIndex(item => item.id === id)
        if (direction === 'left') {
            currentItemPosition > 0 ? setItem(sliderItems[currentItemPosition - 1]) : setItem(sliderItems[itemLength - 1])
        } else {
            currentItemPosition < itemLength - 1 ? setItem(sliderItems[currentItemPosition + 1]) : setItem(sliderItems[0])
        }
    }

    useEffect(() => {
        setItem(sliderItems[0])
    }, [])

    return (
        <div className='slider-container'>
            <div className="arrow arrow-left" onClick={() => handleClick("left", item.id)}>
                <MdArrowBack className='left-icon' size="1.3em" />
            </div>
            <div className="slider-wrapper" style={{ backgroundColor: `#${item.bg}` }}>
                <div className="slider-slide">
                    <div className="slider-imageContainer">
                        <img className='slider-image' src={item.img} alt="" />
                    </div>
                    <div className="slider-content">
                        <h1 className="slider-title">{item.title}</h1>
                        <p className="slider-description">{item.desc}</p>
                        <button className="slider-button">SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div className="arrow arrow-right" onClick={() => handleClick("right", item.id)}>
                <MdArrowForward className='right-icon' size="1.3em" />
            </div>
        </div>
    )
}

export default Slider