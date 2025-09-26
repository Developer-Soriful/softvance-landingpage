import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AppWrapper = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 800, // animation duration in ms
            easing: "ease-in-out", // easing function
            once: true, // animate only once
            mirror: false, // animate elements while scrolling up
        });
    }, []);

    return <>{children}</>; // simply render wrapped content
};

export default AppWrapper;
