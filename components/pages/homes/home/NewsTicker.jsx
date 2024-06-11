"use client"

import Marquee from "react-fast-marquee";
import Count from "../../common/count";
import Link from "next/link";

const NewsTicker = ({ isMalayalam }) => {
    return (
        <div className="the-news-ticker-container experience__area ">
            {/* <div className="news-ticker-container"> */}
            {/* <div className="news-image dark__image">
                    <img src="\assets\img\pages\updates.jpg" alt="News Image" />
                </div> */}
            {/* <div className="news-ticker "> */}
            {/* <div className="news-wrapper ">
                        <div className="news-item"><Link href={`#`}>{isMalayalam ? "പൊതുമരാമത്ത് വകുപ്പിൻ്റെ അല്ലെങ്കിൽ മറ്റ് സർക്കാരിൻ്റെ രജിസ്റ്റർ ചെയ്ത കരാറുകാരിൽ നിന്ന് സീൽ ചെയ്ത ക്വട്ടേഷനുകൾ ക്ഷണിക്കുന്നു. മലപ്പുറം ഖാദി ഉൽപ്പാദന യൂണിറ്റിൻ്റെ പരിപാലനത്തിനുള്ള വകുപ്പ്" : "Sealed quotations are invited from registered contractors of public work department or other Govt. department for the maintainance work of Khadi production unit Malapuram"}</Link></div>
                        <div className="news-item"><Link href={`#`}>{isMalayalam ? "എൻ്റെ ഗ്രാമം പദ്ധതിയുടെ പുതുക്കിയ മാര്‍ഗരേഖ" : "Updated Guidelines for Ente Gramam Scheme"}</Link> </div>
                        <div className="news-item"><Link href={`#`}>{isMalayalam ? "ബ്രേക്കിംഗ് ന്യൂസ് 3" : "Breaking news 3"}</Link> </div>
                        <div className="news-item"><Link href={`#`}>{isMalayalam ? "ബ്രേക്കിംഗ് ന്യൂസ് 4" : "Breaking news 4"} </Link></div>
                        <div className="news-item"><Link href={`#`}>{isMalayalam ? "ബ്രേക്കിംഗ് ന്യൂസ് 5" : "Breaking news 5"}</Link> </div>
                    </div> */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                <Marquee
                    style={{ backgroundColor: "#ccc", borderRadius: "8px" }}
                    pauseOnHover={true}
                    // loop={false}
                    speed={20}

                >
                    &nbsp;&nbsp;<p style={{ color: "white" }}>⦾</p>&nbsp;
                    <a href="#download-app" style={{ color: "#000" }}>{isMalayalam ? "പൊതുമരാമത്ത് വകുപ്പിൻ്റെ അല്ലെങ്കിൽ മറ്റ് സർക്കാരിൻ്റെ രജിസ്റ്റർ ചെയ്ത കരാറുകാരിൽ നിന്ന് സീൽ ചെയ്ത ക്വട്ടേഷനുകൾ ക്ഷണിക്കുന്നു. മലപ്പുറം ഖാദി ഉൽപ്പാദന യൂണിറ്റിൻ്റെ പരിപാലനത്തിനുള്ള വകുപ്പ്" : "Sealed quotations are invited from registered contractors of public work department or other Govt. department for the maintainance work of Khadi production unit Malapuram"}</a>


                </Marquee>

                <Marquee
                    style={{ backgroundColor: "#ccc", borderRadius: "8px" }}
                    pauseOnHover={true}
                    // loop={false}
                    speed={20}


                >
                    &nbsp;&nbsp;<p style={{ color: "white" }}>⦾</p>&nbsp;
                    <a href="#download-app" style={{ color: "#000" }}>{isMalayalam ? "എൻ്റെ ഗ്രാമം പദ്ധതിയുടെ പുതുക്കിയ മാര്‍ഗരേഖ" : "Updated Guidelines for Ente Gramam Scheme"}</a>


                </Marquee>
            </div>

            {/* </div> */}

            {/* </div> */}
        </div>
    );
};

export default NewsTicker;