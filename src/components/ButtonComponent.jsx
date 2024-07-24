import React from "react"

const ButtonComponent = ({ width, handleClick, text }) => {

    return (
        <>
            <button type="submit" className={`group relative w-${width} flex justify-center py-2 px-4 my-1
            border border-transparent
            text-sm font-medium rounded-md text-white bg-gray-600
            hover:bg-gray-500 hover:outline hover:ring-2 hover:ring-offset-2 hover:ring-gray-500
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`} onClick={handleClick}>
                {text}
            </button>
        </>
    );

}

export default ButtonComponent;