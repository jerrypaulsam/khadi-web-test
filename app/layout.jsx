"use client"
import { useEffect } from 'react';
import "./globals.css";
import SwitchTab from '@/components/pages/common/dark-light';
import logo2 from "@/public/assets/img/logo-5.jpeg";
import Head from 'next/head';
import Script from 'next/script';


export default function RootLayout({ children }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    const title = "Kerala Khadi & Village Industries Board"
    const description = "Explore the rich heritage and sustainable craftsmanship of Khadi products with the Kerala Khadi Board. Promoting eco-friendly and hand-spun textiles, we support rural artisans and preserve traditional weaving techniques. Discover our range of high-quality Khadi fabrics and garments today." 
    const page_url = "https://www.keralakhadi.gov.in"

    return (
        <html lang="en">
            <Head>
                <link rel='icon' type='image/ico' href='favicon.ico' />
                <title>{title}</title>
                <meta name="title" content={title} />
                <link rel="canonical" href={page_url} />
                <meta name="description" content= {description} />
                <meta name="keywords" content="Kerala Khadi Board, Village Industries in Kerala, Khadi products Kerala, Handloom textiles Kerala, Sustainable fashion Kerala, Eco-friendly clothing Kerala, Handwoven fabrics Kerala, Traditional weaving Kerala, Rural artisans Kerala, Khadi cotton Kerala, Kerala Khadi garments, Khadi handloom Kerala, Organic Khadi Kerala, Khadi silk Kerala, Kerala Village Industries, Khadi crafts Kerala, Kerala hand-spun textiles, Khadi heritage Kerala, Khadi fabric Kerala, Natural dyes Khadi Kerala, shopdibz" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta key="og:type" property="og:type" content={"website"} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={page_url} />
                <meta key="og:title" property="og:title" content={title} />
                <meta
                    key="og:description"
                    property="og:description"
                    content={description}
                />
                <meta
                    key="og:url"
                    property="og:url"
                    content={page_url}
                />
                <meta key="og:image" property="og:image" content={logo2} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:site" content="keralakhadi" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={logo2} />

                {/* <Script src="https://cdn.jsdelivr.net/npm/instafeed.js@2.0.0/dist/instafeed.min.js" /> */}

            </Head>
            
            <body>
                <SwitchTab />
                {children}
            </body>
        </html>
    );
}