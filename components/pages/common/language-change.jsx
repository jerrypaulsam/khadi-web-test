import ToggleButton from 'react-toggle-button'
import { useEffect, useState } from 'react';

export default function LanguageTab() {
    let [language, setLanguage] = useState(null);

    const [isMalayalam, setIsMalayalam] = useState(false);

    const toggleMalayalam = () => {
        setIsMalayalam(true);
        localStorage.setItem("language", "mal");
        // const currentUrl = window.location.href;
        // const newUrl = currentUrl.replace('/en/', '/mal/');
        // console.log(newUrl);
        handleLanguageChange("mal");
    };
    const toggleEnglish = () => {
        setIsMalayalam(false);
        localStorage.setItem("language", "eng");
        // const currentUrl = window.location.href;
        // const newUrl = currentUrl.replace('/mal/', '/en/');
        // console.log(newUrl);
        handleLanguageChange("en");
    };

    useEffect(() => {
        if (localStorage !== null || localStorage !== undefined) {
            if (window.location.pathname.match("en")) {
                setIsMalayalam(false);
                localStorage.setItem("language", "eng");
    
            } else if (window.location.pathname.match("mal")) {
                setIsMalayalam(true);
                localStorage.setItem("language", "mal");
            }
    
        }
        
        try {
            language = localStorage.getItem("language");
            if (language === null || language === "eng") {
                language = "eng"
                setIsMalayalam(false);
                localStorage.setItem("language", "eng");
            } else {
                setIsMalayalam(true);
                localStorage.setItem("language", "mal");
            }
        } catch(e) {
            setIsMalayalam(false);
            localStorage.setItem("language", "eng");
        }

    }, []);

    const handleLanguageChange = (language) => {
        // Set the language in your application
        setLanguage(language);
        let newUrl;
        // Create the new URL
        const oldUrl = window.location.pathname;
        if (language === "mal") {
            newUrl = oldUrl.replace('/mal/', `/${language}/`);
        } else {
            newUrl = oldUrl.replace('/en/', `/${language}/`);
        }
        
      
        // Replace the old URL with the new URL and reload
        window.location.replace(newUrl);
      };


    return (
        <div className="ml-20">
            <ToggleButton
                value={isMalayalam}
                activeLabel={isMalayalam ? "മല" : "Eng"}
                inactiveLabel={isMalayalam ? "മല" : "Eng"}
                colors={{
                    activeThumb: {
                      base: '#F94C30',
                    },
                    inactiveThumb: {
                      base: '#F94C30',
                    },
                  }}
                onToggle={(value) => {
                    if (isMalayalam) {
                        // value = true;
                        toggleEnglish();
                    } else {
                        // value = false;
                        toggleMalayalam();
                    }
                }} 
            />
        </div>
    );
}
