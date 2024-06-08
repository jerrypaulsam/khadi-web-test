"use client"

import Count from "../../common/count";
import Link from "next/link";

const NewsTicker = ({ isMalayalam }) => {
    return (
        <div className="the-news-ticker-container experience__area ">
            <div className="news-ticker-container">
                <div className="news-image dark__image">
                    <img src="\assets\img\pages\updates.jpg" alt="News Image" />
                </div>
                <div className="news-ticker ">
                    <div className="news-wrapper">
                        <div className="news-item"><Link href={`#`}>{isMalayalam ? "ബ്രേക്കിംഗ് ന്യൂസ് 1" : "Breaking news 1"}</Link></div>
                        <div className="news-item"><Link href={`#`}>{isMalayalam ? "ബ്രേക്കിംഗ് ന്യൂസ് 2" : "Breaking news 2"}</Link> </div>
                        <div className="news-item"><Link href={`#`}>{isMalayalam ? "ബ്രേക്കിംഗ് ന്യൂസ് 3" : "Breaking news 3"}</Link> </div>
                        <div className="news-item"><Link href={`#`}>{isMalayalam ? "ബ്രേക്കിംഗ് ന്യൂസ് 4" : "Breaking news 4"} </Link></div>
                        <div className="news-item"><Link href={`#`}>{isMalayalam ? "ബ്രേക്കിംഗ് ന്യൂസ് 5" : "Breaking news 5"}</Link> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsTicker;