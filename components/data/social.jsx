import Link from 'next/link';
import React from 'react';

const Social = () => {
    return (
        <>
            <ul>
                <li><Link href="https://www.facebook.com/profile.php?id=100076191225750" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="https://x.com/keralakhadi" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link></li>
                <li><Link href="https://www.instagram.com/khadikerala" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                <li><Link href="https://www.youtube.com/@KeralaKhadi" target="_blank"><i className="fab fa-youtube"></i></Link></li>
            </ul>            
        </>
    );
};

export default Social;