import { useState, useEffect } from "react"

export default function useKeyPress(key) {
    const [keyPressed, setKeyPressed] = useState(false);

    useEffect(() => {
        window.addEventListener('keypress', (e) => {
            setKeyPressed(prev => !prev);
        });

        return () => {
            window.removeEventListener('keypress', (e) => {
                setKeyPressed(prev => !prev);
            })
        }

    }, [key])

    console.log(keyPressed)
    return keyPressed;
}