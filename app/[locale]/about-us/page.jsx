"use client"

import AboutUs from "@/components/pages/about";
import { useEffect, useState } from 'react';

const About = () => {
    const [isMalayalam, setIsMalayalam] = useState(false);

    useEffect(() => {
        let language = localStorage.getItem("language");
        if ((language === null && language === undefined) || language === "eng") {
            setIsMalayalam(false)
        } else {
            setIsMalayalam(true)
        }

    }, [isMalayalam]); 

    return (
        <>
            <AboutUs isMalayalam={isMalayalam} />
        </>
    );
};

export default About;