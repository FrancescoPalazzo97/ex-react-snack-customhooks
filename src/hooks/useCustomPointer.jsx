import { useState, useEffect } from "react";

export default function useCustomPointer(pointer) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {

        function updateMousePosition(e) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener('mousemove', updateMousePosition)

        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <div style={{
            position: 'absolute',
            left: mousePosition.x,
            top: mousePosition.y,
            pointerEvents: 'none',
        }}>
            {pointer}
        </div>
    );
}