import React from "react"

const SplashPhoto = () => {
        return(
            <div>
                <img className="nyc-photo" src={window.nyc} />
                <h1 className="photo-text">Find the perfect table for any occasion!</h1>
            </div>
        )
    }

export default SplashPhoto;