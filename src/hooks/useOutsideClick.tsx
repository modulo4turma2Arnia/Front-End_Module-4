import React from "react"

export const useOutsideClick = (ref: React.RefObject<HTMLElement>, callbackInside: () => void,
callbackOutside: () => void) => {
    const handleClickOutSide = (event: MouseEvent) => {
        if(ref.current && !ref.current.contains(event.target as Node)){
            callbackOutside()
        } else{
            callbackInside()
        }
    }
    React.useEffect(() => {
        document.addEventListener('mouseup', handleClickOutSide)
        return () => {
            document.removeEventListener('mouseup', handleClickOutSide)
        }
    }, [ref, callbackInside, callbackOutside])   
}
