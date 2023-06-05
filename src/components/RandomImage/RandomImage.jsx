import React, { useEffect, useState } from "react";
import './randomimage.css'


export const RandomImage = () => {
    const [images, setImages] = useState([])
    const [query, setQuery] = useState('')

    const loadImages = () => {
        fetch(`https://api.unsplash.com/photos/random?query=${query}&count=16`, {
            method: "GET",
            headers: {
                Authorization: `Client-ID 5-sYIFigG2GxEMMK3BBFDHo4pTGIxDnUApvnpBWaty8`,
            },
        }).then((r) => r.json())
            .then((res) => {
                console.log('res:', res)

                setImages(res)
            })
    }

    useEffect(loadImages, [])

    if (!images) {
        return <div>Images not found</div>
    }
    return (
        
        <div className="container">
            <h1>Найдем любую картинку</h1>
            <div>
                <input
                    type="text"
                    name=""
                    id=""
                    value={query}
                    placeholder="Что хочешь увидеть"
                    onChange={(e) => setQuery(e.target.value)}

                />
                <button onClick={loadImages}>Search</button>
            </div>
            < div>
                <div className="images-container">
                    {images.map((i, inx) => {
                        return (
                            <div key={inx}>
                                <img src={i.urls['small']} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RandomImage