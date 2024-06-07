'use client'
import ToggleButton from 'react-toggle-button';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageTab() {
    const [language, setLanguage] = useState('eng');
    const [isMalayalam, setIsMalayalam] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (typeof window === 'undefined') return; // Ensure client-side rendering

        const storedLanguage = localStorage.getItem('language');
        const pathSegments = pathname.split('/');
        const currentLocale = pathSegments[1] || storedLanguage || 'eng';

        setLanguage(currentLocale);
        setIsMalayalam(currentLocale === 'mal');
        localStorage.setItem('language', currentLocale);
    }, [pathname]);

    const handleLanguageChange = (lang) => {
        // if (pathname === '/') {
        //     // Base URL, no locale segment to add
        //     localStorage.setItem('language', lang);
        //     setLanguage(lang);
        //     setIsMalayalam(lang === 'mal');
        //     console.log("asd");

        // } else {
            const pathSegments = pathname.split('/');
            pathSegments[1] = lang; // Update the locale segment
            const newPath = pathSegments.join('/');

            localStorage.setItem('language', lang);
            setLanguage(lang);
            setIsMalayalam(lang === 'mal');

            router.replace(newPath);
        // }
    };

    const toggleLanguage = () => {
        const newLanguage = isMalayalam ? 'eng' : 'mal';
        handleLanguageChange(newLanguage);
    };

    return (
        <div className="ml-20">
            <ToggleButton
                value={isMalayalam}
                activeLabel={isMalayalam ? 'മല' : 'Eng'}
                inactiveLabel={isMalayalam ? 'മല' : 'Eng'}
                colors={{
                    activeThumb: {
                        base: '#F94C30',
                    },
                    inactiveThumb: {
                        base: '#F94C30',
                    },
                }}
                onToggle={toggleLanguage}
            />
        </div>
    );
}
