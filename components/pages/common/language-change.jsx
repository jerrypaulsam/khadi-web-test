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

        let storedLanguage = localStorage.getItem('language');
        if (!storedLanguage) {
            storedLanguage = 'eng'; // Set default language to 'eng'
            localStorage.setItem('language', storedLanguage);
        }

        const pathSegments = pathname.split('/');
        const currentLocale = pathSegments[1] || storedLanguage;

        setLanguage(currentLocale);
        setIsMalayalam(currentLocale === 'mal');
    }, [pathname]);

    const handleLanguageChange = (lang) => {
        const pathSegments = pathname.split('/');
        pathSegments[1] = lang === 'en' ? 'en' : 'mal'; // Update the locale segment
        const newPath = pathSegments.join('/');

        localStorage.setItem('language', lang === 'en' ? 'eng' : 'mal');
        setLanguage(lang === 'en' ? 'eng' : 'mal');
        setIsMalayalam(lang === 'mal');

        router.replace(newPath);
    };

    const toggleLanguage = () => {
        const newLanguage = isMalayalam ? 'en' : 'mal';
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
