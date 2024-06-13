"use client";

import Marquee from "react-fast-marquee";
import Count from "../../common/count";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewsTicker = ({ isMalayalam }) => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const accessToken = '92464c05f949ae555b6b11da26e315ba'; // Replace with your access token
        const userId = 'khadikerala'; // Replace with your Instagram user ID
        const fetchInstagramPhotos = async () => {
            try {
                const response = await fetch(`https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,caption,permalink&access_token=${accessToken}`);
                console.log(response.status);
                const data = await response.json();
                setPhotos(data.data);
            } catch (error) {
                console.error('Error fetching Instagram photos:', error);
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };

        fetchInstagramPhotos();
    }, [photos, loading]);

    return (
        <div className="news-ticker-container experience__area" style={{ display: 'flex' }}>
            <div className="news-ticker-left-side">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                    <Marquee
                        style={{ backgroundColor: "#ccc", borderRadius: "8px", marginBottom: '10px' }}
                        pauseOnHover={true}
                        speed={15}
                    >
                        &nbsp;&nbsp;<p style={{ color: "white" }}>⦾</p>&nbsp;
                        <a href="#download-app" style={{ color: "#000" }}>
                            {isMalayalam ? "പൊതുമരാമത്ത് വകുപ്പിൻ്റെ അല്ലെങ്കിൽ മറ്റ് സർക്കാരിൻ്റെ രജിസ്റ്റർ ചെയ്ത കരാറുകാരിൽ നിന്ന് സീൽ ചെയ്ത ക്വട്ടേഷനുകൾ ക്ഷണിക്കുന്നു. മലപ്പുറം ഖാദി ഉൽപ്പാദന യൂണിറ്റിൻ്റെ പരിപാലനത്തിനുള്ള വകുപ്പ്" : "Sealed quotations are invited from registered contractors of public work department or other Govt. department for the maintenance work of Khadi production unit Malapuram"}
                        </a>
                    </Marquee>

                    <Marquee
                        style={{ backgroundColor: "#ccc", borderRadius: "8px" }}
                        pauseOnHover={true}
                        speed={20}
                    >
                        &nbsp;&nbsp;<p style={{ color: "white" }}>⦾</p>&nbsp;
                        <a href="#download-app" style={{ color: "#000" }}>
                            {isMalayalam ? "എൻ്റെ ഗ്രാമം പദ്ധതിയുടെ പുതുക്കിയ മാര്‍ഗരേഖ" : "Updated Guidelines for Ente Gramam Scheme"}
                        </a>
                    </Marquee>
                </div>
            </div>

            <div className="news-ticker-right-side" >
                <h6>Instagram Photos</h6>
                {photos.length === 0 ? <p style={{textAlign: "center", fontSize: "14px"}} >No photos found</p> : <p></p>}
                {loading ? (
                    <div className="instagram-loader-container">
                        <div className="instagram-loader"></div>
                    </div>
                ) : (
                    <div id="instafeed">
                        {photos.length === 0 ? (
                            <p style={{textAlign: "right"}} ></p>
                        ) : (
                            photos.map(photo => (
                                <a key={photo.id} href={photo.permalink} target="_blank" rel="noopener noreferrer">
                                    <img src={photo.media_url} alt={photo.caption} />
                                </a>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsTicker;
