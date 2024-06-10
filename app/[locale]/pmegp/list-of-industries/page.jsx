"use client"

import { useEffect, useState } from 'react';

import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/pages/PMEGP.jpg";

const ListIndustries = () => {
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
            <SEO pageTitle={isMalayalam ? "കേരള ഖാദി - വ്യവസായങ്ങളുടെ പട്ടിക" : "Kerala Khadi - List of Industries"} />
            <HeaderOne isMalayalam={isMalayalam} />
            <BreadCrumb title={isMalayalam ? " വ്യവസായങ്ങളുടെ പട്ടിക" :"List of Industries"} innerTitle={isMalayalam ? "പി.എം.ഇ.ജി.പി സ്കീം" : "PMEGP Scheme"} />

            <div className="team__single section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 lg-mb-30">
                            <div className="team__single-left">
                                <div className="team__single-left-thumb dark__image">
                                    <img src={image1.src} alt="PMEGP Scheme" />

                                </div>

                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="team__single-right">
                                <div className="team__single-right-experience">
                                    <h3>{isMalayalam ? " വ്യവസായങ്ങളുടെ പട്ടിക" :"List of Industries"}</h3>
                                    <br />
                                    <table className="officals-table">
                                        <tr>
                                            <th>{isMalayalam ? "വിഭാഗം" : "Category"}</th>
                                            <th>{isMalayalam ? "വിശദാംശങ്ങള്‍" : "Details"}</th>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "വ്യവസായം അധിഷ്ഠിതം" : "Agro Based"}</td>
                                            <td>
                                                <ul>
                                                    <li>{isMalayalam ? "ഭക്ഷണം പിഴച്ചുതയ്ക്കൽ ഉദ്യോഗം" : "Food Processing Industry"}</li>
                                                    <li>{isMalayalam ? "ബേക്കറി ഉത്പന്നങ്ങള്‍" : "Bakery Products"}</li>
                                                    <li>{isMalayalam ? "ബേഡാന / രേസിന്‍ ഉത്പന്നങ്ങള്‍ / സീഡ്‌സ്‌ പ്രോസസ്സിങ്ങ്" : "Bedana/Raisin Industry/Seeds Processing"}</li>
                                                    <li>{isMalayalam ? "കാഷു / ചിറാഞ്ചി പ്രൊസസ്സിങ്ങ് (ഡ്രൈ ഫ്രൂട്ട്‌സ്)" : "Cashew/Chironji processing (Dry Fruits)"}</li>
                                                    <li>{isMalayalam ? "മാടക്കുടി" : "Cattle feed"}</li>
                                                    <li>{isMalayalam ? "ചാരോളി ഉത്പാദനം" : "Charolie making"}</li>
                                                    <li>{isMalayalam ? "തേങ്ങാ മറ്റു അരേക്ക ഉത്പന്നങ്ങള്‍ ദളിയ ഉത്പാദനം" : "Coconut and Areca nut products Daliya making"}</li>
                                                    <li>{isMalayalam ? "ഫലങ്ങളും പച്ചക്കറികളും പിഴച്ചുതയ്ക്കൽ" : "Fruits and vegetable processing"}</li>
                                                    <li>{isMalayalam ? "ഘാനി ഒയില്‍ ഉത്പാദനം" : "Ghani Oil industry"}</li>
                                                    <li>{isMalayalam ? "ഗ്രൗണ്ട്‌നറ്റ് ഡികോര്‍ഡിക്കറ്റര്‍ (സീഡുകള്‍ / ഒയില്‍ ഉദ്ദേശ്യത്തിന്‍)" : "Groundnut Decordicator (Seeds/Oil Purpose)"}</li>
                                                    <li>{isMalayalam ? "ഇന്ത്യന്‍ സ്വീറ്റ്സ് ഉത്പാദനം" : "Indian sweets making"}</li>
                                                    <li>{isMalayalam ? "ഖാവ ചക്ക യൂണിറ്റ്" : "Khava & Chakka Unit"}</li>
                                                    <li>{isMalayalam ? "മഹേന്ദി ഉത്പാദനം" : "Manufacture of Mahendi"}</li>
                                                    <li>{isMalayalam ? "കട്ട മറ്റു ചരക്ക്‌ / ഖന്നഡാരി / ജഗ്ഗരി ഉത്പാദനം" : "Manufacture of Cane-Gur and Khandsari/ Jaggery making"}</li>
                                                    <li>{isMalayalam ? "ബനാന (റോ / പൊടാറ്റോ) ഉത്പാദനം" : "Manufacturing of Chips from Banana(raw)/Potato"}</li>
                                                    <li>{isMalayalam ? "ഭക്ഷണ ഉത്പാദന സംസ്ഥാനം" : "Manufacturing of Food Industry"}</li>
                                                    <li>{isMalayalam ? "ഐസ് / ഐസ് കാണ്ടി" : "Manufacturing of Ice/Ice Candy"}</li>
                                                    <li>{isMalayalam ? "മസാല ഉദ്യോഗം" : "Masala Udyog"}</li>
                                                    <li>{isMalayalam ? "പാല്‍ ഉത്പാദനം യൂണിറ്റുകള്‍" : "Milk products making units"}</li>
                                                    <li>{isMalayalam ? "മിനി റൈസ് ഷെല്ലിംഗ് യൂണിറ്റ് / റൈസ് മില്‍" : "Mini rice shelling unit/Rice Mill"}</li>
                                                    <li>{isMalayalam ? "നൂഡിൽസ് ഉത്പാദനം" : "Noodles Making"}</li>
                                                    <li>{isMalayalam ? "പാഡ്ഡി യൂണിറ്റ് (പിസിപിഐ)" : "Paddy Unit (PCPI)"}</li>
                                                    <li>{isMalayalam ? "പാമ്ഗുര്‍ തയ്യാറാക്കുകയും മറ്റു പാമ്പ് ഉത്പന്നങ്ങള്‍ ഉത്പാദനം" : "Palmgur making and other palm products industry"}</li>
                                                    <li>{isMalayalam ? "പപ്പട് ഉത്പാദനം" : "Papad Making"}</li>
                                                    <li>{isMalayalam ? "പെപ്സി യൂണിറ്റ് / തീനികുട്ട് / സോഫ്റ്റ് ഡ്രിങ്കുകള്‍" : "Pepsi Unit/ Cold/Soft Drinks"}</li>
                                                    <li>{isMalayalam ? "പോഹ ഉത്പാദനം യൂണിറ്റ് / പോപ്കോണ്‍" : "Poha Making Unit/Popcorn"}</li>
                                                    <li>{isMalayalam ? "പവേര്‍ അട്ട ചക്കി / പ്ലൂര്‍ മില്‍" : "Power Atta chakki/Flour Mill"}</li>
                                                    <li>{isMalayalam ? "മേസ്‌സ് പ്രോസസ്സിങ്ങ്" : "Processing of Maize and Ragi"}</li>
                                                    <li>{isMalayalam ? "രസ്‌വന്തി-സുഗർകെയ്‌ർ ജൂസ് കെറ്ററിംഗ് യൂണിറ്റ്" : "Raswanti- sugarcane Juice catering unit"}</li>
                                                    <li>{isMalayalam ? "സോഡ തയ്യാറാക്കൽ ഉത്പാദനം" : "Soda Mfg. products"}</li>
                                                    <li>{isMalayalam ? "സുപ്പാരി തയ്യാറാക്കൽ യൂണിറ്റ്" : "Supari Making Unit"}</li>
                                                    <li>{isMalayalam ? "തോട്ട വിളക്കുകൾ" : "Threshing"}</li>
                                                    <li>{isMalayalam ? "വെർമിസെല്ലി (ശ്യാരിഗ്) യന്ത്രം" : "Vermicelli (Shyarige) Machine"}</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "വനം അധിഷ്ടിതം" : "Forest Based"}</td>
                                            <td>
                                                <ul>
                                                    <li>{isMalayalam ? "ആയുര്‍വേദ മത്സ്യം നിര്‍മ്മിച്ച വൈദ്യുത ഉത്പാദനം / ഔഷധ സസ്യങ്ങള്‍" : "Ayurvedic Medicine Mfg. by forest produce/medicinal plant"}</li>
                                                    <li>{isMalayalam ? "ബാംബൂ ആന്റ്‌ കേന്‍ വര്‍ക്ക്" : "Bamboo and Cane work"}</li>
                                                    <li>{isMalayalam ? "ബാന്‍ മെക്കിംഗ് യൂണിറ്റ്" : "Ban Making Unit"}</li>
                                                    <li>{isMalayalam ? "ബാസ്‌കറ്റ് മെക്കിംഗ് / ബാഗ് മെക്കിംഗ്" : "Basket Making/Bag Making"}</li>
                                                    <li>{isMalayalam ? "മലം തൈക്കുകൾ" : "Bee-keeping"}</li>
                                                    <li>{isMalayalam ? "ആയുര്‍വേദ ഉദ്യോഗങ്ങളിലെ വനപ്രൊഡ്യൂസ് ആയി താഴ്ച്ച" : "Collection of forest plants and fruits for medicinal purpose"}</li>
                                                    <li>{isMalayalam ? "കത്‌ തയ്യാറാക്കിയിരിക്കുന്നു" : "Kath Manufacturing"}</li>
                                                    <li>{isMalayalam ? "ഖുസ് തട്ടീസ് ആന്റ്‌ ബ്രൂം മെക്കിംഗ്" : "Khus tattis and broom making"}</li>
                                                    <li>{isMalayalam ? "ഗംഗളങ്ങളും റെസിനുകളും ഉത്പാദിക്കൽ" : "Manufacture of Gums and Resins"}</li>
                                                    <li>{isMalayalam ? "കാഠ്ത ഉത്പാദനം" : "Manufacture of Katha"}</li>
                                                    <li>{isMalayalam ? "ഷെലാക് ഉത്പാദനം" : "Manufacture of Shellac"}</li>
                                                    <li>{isMalayalam ? "ഫാര്‍മസ്യൂട്ടിക്കൽ ഉത്പാദനം" : "Manufacturing Pharmacetical products"}</li>
                                                    <li>{isMalayalam ? "ഫോട്ടോ ഫ്രേമിംഗ്" : "Photo framing"}</li>
                                                    <li>{isMalayalam ? "ഹാന്ഡ്‌മെയ്ഡ് പേപ്പർ & ഫൈബർ ഉദ്യോഗം" : "Handmade paper & fiber Industry"}</li>
                                                    <li>{isMalayalam ? "കൊയര്‍ വര്‍ക്ക്" : "Coir work"}</li>
                                                    <li>{isMalayalam ? "ഫൈബർ ഐറ്റംസ്" : "Fibre items"}</li>
                                                    <li>{isMalayalam ? "ഹാന്ഡ്‌മെയ്ഡ് പേപ്പർ / തെര്മോക്കോള്‍" : "Handmade Paper/Thermocol"}</li>
                                                    <li>{isMalayalam ? "എട്ടുവിധ ഉത്പാദനം" : "Leaf cup making"}</li>
                                                    <li>{isMalayalam ? "ജൂട്ട് ഉത്പാദനം (ഫൈബര്‍ ഉദ്യോഗം ക്കിട്ടാതെ)" : "Manufacture of Jute products (under Fibre industry)"}</li>
                                                    <li>{isMalayalam ? "എക്സൈസ് ബുക്ക് ബൈന്റിങ് ഉത്പാദനം" : "Manufacture of exercise book binding"}</li>
                                                    <li>{isMalayalam ? "പേപ്പർ കപ്പ്‌സ് ഉത്പാദനം" : "Manufacture of paper cups"}</li>
                                                    <li>{isMalayalam ? "മാട്ട് മെക്കിംഗ്" : "Mat Making"}</li>
                                                    <li>{isMalayalam ? "പിത്ത് വര്‍ക്ക്" : "Pith work"}</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "ഖനിജ അധിഷ്ടിതം" : "Mineral Based"}</td>
                                            <td>
                                                <ul>
                                                    <li>{isMalayalam ? "ബ്ലാക്ക് ബോര്‍ഡ് / സ്ലേറ്റ്‌ ആന്റ്‌ സ്ലേറ്റ്‌ പെൻസിൽ / ചാക്ക് ഉത്പാദനം" : "Black Board/ Slate and Slate pencil/Chalk making"}</li>
                                                    <li>{isMalayalam ? "ബ്ലൂ മെറ്റൽ ജെലി (ബ്ലൂ മെറ്റൽ ജെലി സമുദ്രകടാര നീക്കം കൊണ്ടുള്ള ചിത്രങ്ങളും)" : "Blue Metal Jelly (excavation of stone quarries for crushing of blue metal jelly)"}</li>
                                                    <li>{isMalayalam ? "ബ്രിക്ക് ബട്ട" : "Brick Bhatta"}</li>
                                                    <li>{isMalayalam ? "സീമന്റ് ബ്ലോക്കിങ്" : "Cement Blocking"}</li>
                                                    <li>{isMalayalam ? "സെറാമിക്-ഡെന്റൽ ടീത്ത്" : "Ceramic-Dental Teeth"}</li>
                                                    <li>{isMalayalam ? "ക്ലേ ഗ്രാനൈന്‍ഗ്" : "Clay Grinding"}</li>
                                                    <li>{isMalayalam ? "കോട്ടേജ് പോട്ടറി ഉദ്യോഗം" : "Cottage Pottery Industry"}</li>
                                                    <li>{isMalayalam ? "ഫ്യൂള്‍ ബ്രിക്കെറ്റിംഗ്" : "Fuel briqueting"}</li>
                                                    <li>{isMalayalam ? "ജം കട്ടിംഗ്" : "Gem cutting"}</li>
                                                    <li>{isMalayalam ? "ഗ്ലാസ് ഡെക്കറേഷന്‍- കട്ടുപ്പാട്" : "Glassed decoration- cutting"}</li>
                                                    <li>{isMalayalam ? "ഗോല്‍ഡ്‌സ്മിത്തി (ജ്വെല്ലറി വർക്സ്)" : "Goldsmith(Jewellery works)"}</li>
                                                    <li>{isMalayalam ? "മൂര്‍ത്തി ഉത്പാദനം" : "Idol Making"}</li>
                                                    <li>{isMalayalam ? "ജ്വെല്ലറി ഔട്ട് ഓഫ് ഗോൾഡ്" : "Jewellery out of gold"}</li>
                                                    <li>{isMalayalam ? "കല്യാണപ്പന്ത് തയ്യാറാക്കൽ ഉത്പാദനം" : "Utility articles made out of stone"}</li>
                                                    <li>{isMalayalam ? "ലൈം‌സ്റ്റോണ്‍, ലൈം‌ഷെല്‍ ആന്റ്‌ മറ്റു ലൈം‌ പ്രൊഡക്റ്റ്സ് ഉദ്യോഗം" : "Limestone Lime shell and other lime products Industry"}</li>
                                                    <li>{isMalayalam ? "ബംഗിള്‍സ് തയ്യാറാക്കൽ (ലാക്ക്‌)" : "Manufacture of Bangles (LAC)"}</li>
                                                    <li>{isMalayalam ? "ഗ്ലാസ് വാതികള്‍ ഉത്പാദനം" : "Manufacture of Glass toys"}</li>
                                                    <li>{isMalayalam ? "പ്ലാസ്‌റ്റര്‍ ഓഫ്‌ പാരിസ് ഉത്പാദനം" : "Manufacture of Plaster of paris"}</li>
                                                    <li>{isMalayalam ? "ഗുലാൽ ഉത്പാദനം" : "Manufacture of gulal"}</li>
                                                    <li>{isMalayalam ? "പൊലിഷ് തയ്യാറാക്കൽ" : "Manufacture of paints"}</li>
                                                    <li>{isMalayalam ? "മാർബിള്‍ ശീറ്റുകൾ / ടൈല്‍സ് (സിമ്പിള്‍ / മോസേക്‌ എന്നിവ)" : "Mfg/Processing Marble sheets/Tiles(Simple/Mosaic etc..)"}</li>
                                                    <li>{isMalayalam ? "മൈനിംഗ് ആക്റ്റിവിറ്റീസ് & ട്രേഡിങ് സ്മാള്‍ സ്റ്റോണ്‍" : "Mining activities & Trading small stone"}</li>
                                                    <li>{isMalayalam ? "മട് പോട്ട് ഉത്പാദനം" : "Mud pot Mfg."}</li>
                                                    <li>{isMalayalam ? "ഗ്രാനൈറ്റ്‌ സ്റ്റോണ്‍ സ്ലാബ്‌സ്‌ / ഗ്രാനൈറ്റ്‌ ക്രഷിംഗ്" : "Polishing of Granite Stone Slabs/Granite Crushing"}</li>
                                                    <li>{isMalayalam ? "സിൽവറ്‌സ്മിത്തി" : "Silversmithy"}</li>
                                                    <li>{isMalayalam ? "സ്റ്റീം കോൾ പൗഡര്‍" : "Steam Coal Powder"}</li>
                                                    <li>{isMalayalam ? "സ്റ്റോണ്‍ കട്ടിംഗ്" : "Stone cutting"}</li>
                                                    <li>{isMalayalam ? "ഉടൻസിൽ വാഷ്‌ഇംഗ് പൗഡര്‍" : "Utensil washing powder"}</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "പോളിമർ ആൻഡ് കെമിക്കൽ അധിഷ്ടിതം" : "Polymer And Chemical Based"}</td>
                                            <td>
                                                <ul>
                                                    <li>{isMalayalam ? "മണ്ണ് ചികിത്സകള്‍" : "Candle"}</li>
                                                    <li>{isMalayalam ? "ചപ്പല്‍ ഉത്പാദനം / ഷൂസ് ഉത്പാദനം" : "Chappal Making/Shoes Making"}</li>
                                                    <li>{isMalayalam ? "കെമിക്കൽ ഉദ്യോഗം" : "Chemical Industry"}</li>
                                                    <li>{isMalayalam ? "കോട്ടേജ് മാച്ച് ഉദ്യോഗം / ഫയര്‍ വര്‍ക്സ് ആന്റ് അഗാര്‍ബട്ടീസ് ഉത്പാദനം" : "Cottage Match Industry / Manufacture of Fire works and Agarbattis"}</li>
                                                    <li>{isMalayalam ? "കോട്ടേജ് സോപ്പ് ഉദ്യോഗം" : "Cottage soap industry"}</li>
                                                    <li>{isMalayalam ? "ഡിറ്റര്‍ജന്റ്സ് ആന്റ്‌ വാഷിംഗ് പൗഡര്‍ ഉത്പാദനം (അജ്ഞാതമായത്)" : "Detergents and washing powder making (non toxic)"}</li>
                                                    <li>{isMalayalam ? "ഫ്ലേയിംഗ്" : "Flaying"}</li>
                                                    <li>{isMalayalam ? "തുകൽ വേല" : "Leather works"}</li>
                                                    <li>{isMalayalam ? "ബിണ്ടി ഉത്പാദനം" : "Manufacture of Bindi"}</li>
                                                    <li>{isMalayalam ? "എസ്സെന്‍ഷ്യല്‍ ഓയിലുകളുടെ ഉത്പാദനം" : "Manufacture of Essential oils"}</li>
                                                    <li>{isMalayalam ? "റബ്ബര്‍ ഉത്പാദങ്ങളും (ഡിപ്‌ഡ് ലാറ്റെക്സ്‌) റബ്ബര്‍ ഷീറ്റുകളും" : "Manufacture of Rubber products (dipped latex) Rubber Sheets"}</li>
                                                    <li>{isMalayalam ? "ഷാമ്പൂ ഉത്പാദനം" : "Manufacture of Shampoos"}</li>
                                                    <li>{isMalayalam ? "പ്ലാസ്റ്റിക് പാക്കിംഗ് ഐറ്റംസ് ഉത്പാദനം" : "Manufacture packing items of plastics"}</li>
                                                    <li>{isMalayalam ? "ഹെയർ ഓയിലുകളുടെ ഉത്പാദനം" : "Manufactures of hair oil"}</li>
                                                    <li>{isMalayalam ? "പോളി ബാഗ്സ് എന്നിവ ഉത്പാദനം" : "Manufacturing of Poly Bags etc."}</li>
                                                    <li>{isMalayalam ? "പിവിസി ഷൂസ് ഉത്പാദനം" : "Manufacturing of PVC Shoes"}</li>
                                                    <li>{isMalayalam ? "റെസിൻ & താർപ്പൊലിൻ ഓയിൽ ഉത്പാദനം" : "Manufacturing of Resin & Tarpoline Oil"}</li>
                                                    <li>{isMalayalam ? "മെന്തോൾ ഓയിൽ" : "Menthol oil"}</li>
                                                    <li>{isMalayalam ? "നെറ്റ് ഉത്പാദനം" : "Net Making"}</li>
                                                    <li>{isMalayalam ? "നൈലോൺ റോപ്പ് ഉത്പാദനം" : "Nylon rope making"}</li>
                                                    <li>{isMalayalam ? "പിവിസി ഇൻസ്യുലേറ്റഡ് വയർ & കേബിൾസ്" : "PVC insulated Wire & Cables"}</li>
                                                    <li>{isMalayalam ? "പെര്ഫ്യൂംസ് ഉത്പാദനം" : "Perfumes Making"}</li>
                                                    <li>{isMalayalam ? "റെക്സിൻ PVC എന്നിവയുടെ ഉത്പാദനം" : "Products out of Rexin PVC"}</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "രൂരൽ എന്‍ജി. ആന്റ് ബയോ-ടെക്ക്" : "Rural Engg. And Bio-Tech"}</td>
                                            <td>
                                                <ul>
                                                    <li>{isMalayalam ? "ഓട്ടോമൊബൈല്‍ പ്രവൃത്തി" : "Automobile work"}</li>
                                                    <li>{isMalayalam ? "ബ്ലാക്ക് സ്മിത്തി" : "Blacksmithy"}</li>
                                                    <li>{isMalayalam ? "കാര്‍പ്പെന്‍ട്രി" : "Carpentry"}</li>
                                                    <li>{isMalayalam ? "കാര്‍വ്ഡ് വുഡ് ആന്റ് ആര്‍ട്ടിസ്റ്റിക് ഫര്‍നിച്ചര്‍ ഉത്പാദനം" : "Carved wood and artistic furniture making"}</li>
                                                    <li>{isMalayalam ? "കംപ്യൂട്ടർ അസെംബ്ലിംഗ്" : "Computer Assembling"}</li>
                                                    <li>{isMalayalam ? "എഞ്ചിനീയറിംഗ് വർക്സ് (അഗ്രി. ഇമ്പ്ലിമെന്റ്സ്)" : "Engineering Works( Agrl implements)"}</li>
                                                    <li>{isMalayalam ? "ഫാബ്രികേഷൻ വർക്ക്" : "Fabrication Work"}</li>
                                                    <li>{isMalayalam ? "ഫൗണ്ടറി യൂണിറ്റ്" : "Foundary Unit"}</li>
                                                    <li>{isMalayalam ? "ഇമിറ്റേഷന്‍ ജ്വെല്ലറി (ബാങ്കിള്‍സ്) ഉത്പാദനം" : "Immitation Jewellery (Bangles) Making"}</li>
                                                    <li>{isMalayalam ? "ഐരൺ ഗ്രില്‍ ഉത്പാദനം" : "Iron grill making"}</li>
                                                    <li>{isMalayalam ? "ഐരൺ വർക്ക്" : "Iron work"}</li>
                                                    <li>{isMalayalam ? "സംഗീതാലയത്തിന്റെ ഉപകരണങ്ങളുടെ ഉത്പാദനം" : "Manufacture of musical instruments"}</li>
                                                    <li>{isMalayalam ? "താളം മെട്ടല്‍ ഉത്പാദനം" : "Manufacture of Handmade utensils out of brass"}</li>
                                                    <li>{isMalayalam ? "ഹൗസ് ഹോള്‍ഡ് ആലുമിനിയം ഉത്പാദനം" : "Manufacture of Household aluminium utensils"}</li>
                                                    <li>{isMalayalam ? "റൂറൽ ട്രാൻസ്പോര്‍ട്ട് വാഹനങ്ങളുടെ ഉത്പാദനം പോടികളും സീത്ലുകളും" : "Manufacture of Rural Transport vehicles such as hand carts"}</li>
                                                    <li>{isMalayalam ? "വിവിധ ഉപകരണങ്ങളുടെ ഉത്പാദനം" : "Manufacture of Various Material Handling Equipments"}</li>
                                                    <li>{isMalayalam ? "ഡെക്കറേറ്റീവ് ബൾബുകളുടെ ഉത്പാദനം" : "Manufacture of decorative bulbs"}</li>
                                                    <li>{isMalayalam ? "എലക്ട്രോണിക് ക്ലോക്കുകളും അലാര്‍ം ടൈം പീസുകളും" : "Manufacture of electronic clocks and alarm time pieces"}</li>
                                                    <li>{isMalayalam ? "ഹാന്ഡ്മേഡ് ഉത്പാദനം കംബിൽ മെട്ടൽ ഉപകരണങ്ങള്‍ എന്നിവ" : "Manufacture of handmade utensils out of Bell metal"}</li>
                                                    <li>{isMalayalam ? "ഹാന്ഡ്മേഡ് ഉത്പാദനം കംബിൽ ഉപകരണങ്ങള്‍" : "Manufacture of handmade utensils out of copper"}</li>
                                                    <li>{isMalayalam ? "പേപ്പർ പിൻ ഉത്പാദനം" : "Manufacture of paper pins"}</li>
                                                    <li>{isMalayalam ? "എന്‍ജി. ഇൻസ്ട്രുമെന്റ്സ് (ട്യൂബ്-ലൈറ്റുകള്‍)" : "Manufacturing of Engg. Instruments(Tube-lights"}</li>
                                                    <li>{isMalayalam ? "എഞ്ചിനുകള്‍ അടങ്ങിയ മെഷിനറി സ്പെയര്‍ പാര്‍ട്ടുകളും / ബീരിംഗ്സ് എന്നിവ" : "Manufacturing of Machinery Spare Parts/Bearing etc."}</li>
                                                    <li>{isMalayalam ? "മിക്സർ ഗ്രിണ്ടര്‍ അന്റ് മറ്റ് ഹൗസ് ഹോള്ള്‍ഡ് ഗുഡ്സ് ഉത്പാദനം." : "Manufacturing of Mixer Grinder and other House hold goods."}</li>
                                                    <li>{isMalayalam ? "മോട്ടർ വൈണ്ടിംഗ്" : "Motor winding"}</li>
                                                    <li>{isMalayalam ? "പ്രോഡക്ഷൻ ഓഫ് ബംപ്പര്‍ പ്ലാന്റ് പ്രൊട്ടെക്റ്റര്‍" : "Production of Bumper Plant Protecter"}</li>
                                                    <li>{isMalayalam ? "റേഡിയോസ് പ്രൊഡക്ഷൻ" : "Production of Radios"}</li>
                                                    <li>{isMalayalam ? "കാസറ്റ് പ്ലെയററിന്റെ പ്രൊഡക്ഷൻ ചെയ്യുന്നു അല്ലെങ്കിൽ രേഡിയോ ചേര്‍ത്തിരിക്കുന്നു" : "Production of cassette player whether or not fitted with Radio"}</li>
                                                    <li>{isMalayalam ? "വോള്‍ട്ടേജ് സ്റ്റാബലൈസര്‍ ഉത്പാദനം" : "Production of voltage stablizer"}</li>
                                                    <li>{isMalayalam ? "റോട്ടറി ഫേറ്റ്" : "Rotary Furnace"}</li>
                                                    <li>{isMalayalam ? "സോ മില്‍" : "Saw Mill"}</li>
                                                    <li>{isMalayalam ? "സോളാര്‍ ആന്റ് വിന്ട് എനർജി ഇമ്പ്ലിമെന്റ്സ്" : "Solar and wind energy implements"}</li>
                                                    <li>{isMalayalam ? "സ്റ്റോവ് വിക്സ്" : "Stove wicks"}</li>
                                                    <li>{isMalayalam ? "ത്രെസര്‍ മെഷീന്‍ യൂണിറ്റ്" : "Threasur machine Unit"}</li>
                                                    <li>{isMalayalam ? "ടിന്‍ സ്മിത്തി" : "Tin smithy"}</li>
                                                    <li>{isMalayalam ? "ട്രാന്‍സ്‌ഫോര്‍മര്‍ / ഇലക്ട്രോ. മോട്ടോര്‍ പംപ് / ജനറേറ്ററുകള്‍" : "Transformer/Elect.Motor Pump/Generators"}</li>
                                                    <li>{isMalayalam ? "ട്രങ്ക് ആന്റ് പേട്ടി മെഗ്സ്." : "Trunk & Peti Mfgs."}</li>
                                                    <li>{isMalayalam ? "ഉംബ്രെള്ള അസംബ്ലിങ്ങ്" : "Umbrella assembling"}</li>
                                                    <li>{isMalayalam ? "വെല്‍ഡിംഗ് വർക്ക്" : "Welding Work"}</li>
                                                    <li>{isMalayalam ? "താരം നെറ്റ് ഉത്പാദനം" : "Wire net making"}</li>
                                                    <li>{isMalayalam ? "വുഡ് വർക്ക്" : "Wood Work"}</li>
                                                    <li>{isMalayalam ? "പ്ലാറ്റ്ഫോം സ്‌കെയിലുകളും / ധരംകണ്ട" : "Manufacturing of Plateform scales/ Dharamkanta"}</li>
                                                    <li>{isMalayalam ? "സ്ക്രു / ബോള്‍ ബെയറിംഗ് ഉത്പാദനം" : "Manufacturing of Screw/Ball Bearing"}</li>
                                                    <li>{isMalayalam ? "സ്റ്റോറേജ് ബാറ്ററികളുടെ ഉത്പാദനം" : "Manufacturing of storage batteries"}</li>
                                                    <li>{isMalayalam ? "മാനുഫാക്ചര്‍ ഓഫ് സ്റ്റീല്‍ ഗ്രില്ല്സ്" : "Manufature of Steel Grills"}</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{isMalayalam ? "സേവനം ആന്റ് ടെക്സ്റ്റൈൽ" : "Service And Textile"}</td>
                                            <td>
                                                <ul>
                                                    <li>{isMalayalam ? "സ്പ്രെയ്യേഴ്‌സ് കൊടുക്കൽ സേവനം" : "Agriculture servicing for sprayers"}</li>
                                                    <li>{isMalayalam ? "ആർട്ട് ബോർഡ് പെയിന്റിംഗ് / സ്പ്രേ പെയിന്റിംഗ്" : "Art board painting/Spray Painting"}</li>
                                                    <li>{isMalayalam ? "ഓട്ടോ സേവനം സെന്റർ" : "Auto Service Centre"}</li>
                                                    <li>{isMalayalam ? "ബാണ്‌ മെയ്ക്കിംഗ്" : "Ban Making"}</li>
                                                    <li>{isMalayalam ? "ബാന്റ് ട്രൂപ്പ്" : "Band troupe"}</li>
                                                    <li>{isMalayalam ? "ബാർബർ" : "Barber"}</li>
                                                    <li>{isMalayalam ? "ബാറ്ററി ചാർജിംഗ്" : "Battery charging"}</li>
                                                    <li>{isMalayalam ? "കേബിൾ ടി.വി. നെറ്റ്‌വർക്ക് / കമ്പ്യൂട്ടർ സെന്റർ" : "Cable T.V. Network/ Computer Centre"}</li>
                                                    <li>{isMalayalam ? "കോട്ടൺ ബെഡ് / പില്ലോസ്" : "Cotton Bed/pillows"}</li>
                                                    <li>{isMalayalam ? "സൈക്കിൾ പരിഷ്കരണം" : "Cycle repair shops"}</li>
                                                    <li>{isMalayalam ? "ഡയിംഗ് & റേസിംഗ് (ഫ്ലാനൽ)" : "Dyeing & Raising(Flannel)"}</li>
                                                    <li>{isMalayalam ? "എലക്ട്രോണിക്‌സ് (ടി.വി)" : "Electronics(TV)"}</li>
                                                    <li>{isMalayalam ? "എമ്ബ്രോയ്ഡറി" : "Embroidery"}</li>
                                                    <li>{isMalayalam ? "ഫാബ്രിക്സിന്റെ എംബ്രോയ്ഡറി" : "Embroidery of Fabrics"}</li>
                                                    <li>{isMalayalam ? "എച്ഡിപിഇ ബാഗ് സ്റ്റിച്ചിംഗ് & പ്രിന്റിംഗ്" : "HDPE Bag Stitching &Printing"}</li>
                                                    <li>{isMalayalam ? "ഹെർബൽ ബ്യൂട്ടി പാർലർ / ആയുര്‍വേദ ഹെർബല്‍ പ്രൊഡക്റ്റ്സ്" : "Herbal Beauty Parlour/Ayurvedic Herbal Products"}</li>
                                                    <li>{isMalayalam ? "ലൗഡ്‌സ്പീക്കര്‍ പോടികളെക്കൊണ്ട് ശബ്ദ സിസ്റ്റം നിര്‍വഹണം" : "Hiring of sound system like loud speaker"}</li>
                                                    <li>{isMalayalam ? "ഹോസ്സറി" : "Hosiery"}</li>
                                                    <li>{isMalayalam ? "കാമ്പിൽ വെവിംഗ്" : "Kamble Weaving"}</li>
                                                    <li>{isMalayalam ? "ലോണ്ട്രി" : "Laundry"}</li>
                                                    <li>{isMalayalam ? "മണ്ടപ് ഡെക്കറേഷൻ" : "Mandap Decoration"}</li>
                                                    <li>{isMalayalam ? "ലോക് വസ്ത്ര ക്ലോത്ത് ഉത്പാദനം" : "Manufacture of Lok Vastra cloth"}</li>
                                                    <li>{isMalayalam ? "സില്‍ക് സാരിയുകളുടെ ഉത്പാദനം" : "Manufacture of Silk Sarees"}</li>
                                                    <li>{isMalayalam ? "മാസണി" : "Masonry"}</li>
                                                    <li>{isMalayalam ? "മിനറൽ വാട്ടർ" : "Mineral Water"}</li>
                                                    <li>{isMalayalam ? "ഓഫ്‌സെറ്റ് പ്രിന്റിംഗ് & ബൈന്റിംഗ്" : "Offset Printing & Binding"}</li>
                                                    <li>{isMalayalam ? "പെയിന്ററും / മാനുഫാക്ചറര്‍ ഓഫ് പെയിന്റ്സ്" : "Painter/Mfg. of Paints."}</li>
                                                    <li>{isMalayalam ? "പ്ലംബിങ് പോളിവാസ്ത്ര / സിൽക്" : "Plumbing Polyvastra/Silk"}</li>
                                                    <li>{isMalayalam ? "പ്രിന്റിംഗ് പ്രസ് / സ്‌ക്രീന്‍ പ്രിന്റിംഗ്" : "Printing Press/Screen Printing"}</li>
                                                    <li>{isMalayalam ? "ഡീസല്‍ എഞ്ചിനുകളുടെ പരിഷ്കരണം പമ്പ് സെറ്റുകളും മറ്റും" : "Repairs of diesel engines pump sets etc."}</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </table>

                                </div>
                                <div className="team__single-right-experience">
                                    <h3>{isMalayalam ? "പ്രവർത്തനങ്ങളുടെ നെഗറ്റീവ് പട്ടിക: " : "Negative List of Activities:"}</h3>
                                    <br />
                                    <p>
                                        {isMalayalam ? "മൈക്രോ എന്ററ്‌പ്രൈസുകള്‍ / പ്രൊജക്റ്റുകള്‍ / യൂണിറ്റുകള്‍ സ്ഥാപിക്കാന്‍ PMEGP കഴിയുന്ന ഉദ്യമങ്ങളുടെ കീഴിലുള്ള പ്രവൃത്തികളുടെ പട്ടിക:" : "The following list of activities will not be permitted under PMEGP for setting up of micro enterprises/ projects /units:"}
                                    </p>
                                    <br />
                                    <p>
                                        <li>{isMalayalam ? "ഏതെങ്കിലും മാംസം (കൊഴുപ്പായിരിക്കുന്നവയെ) ബന്ധപ്പെട്ട ഏതെങ്കിലും കൂട്ടിയായിരിക്കുന്ന ഉത്പാദനം, കാന്‍നിംഗ് എന്നിവയുടെ ഉത്പാദനം, അതിന്റെ ഭക്ഷ്യസാമഗ്രികളായ ഇടങ്ങൾ ഉപയോഗിച്ച് നല്ലതാണ് എന്ന് ചെയ്യുന്ന ഉത്പാദനം / തയ്യാറാക്കൽ അല്ലെങ്കിൽ വ്യാപാരം കൂടുതല്‍ വസിക്കുകയും കഴിയും ഇങ്ങനെ സേവ് ചെയ്യുന്നത്, ബീഡി / പാൻ / സിഗാര്‍ / സിഗരറ്റ് മുതലായ അമൃതസാമഗ്രികളുടെ ഉത്പാദനം / നിര്‍മാണം അല്ലെങ്കിൽ വ്യാപാരം, വീടുകളും ദാബാകൾക്കും മദ്യം വില്പനയ്ക്കുള്ള വില്‍പന പ്രദേശങ്ങളും, ടോബാക്കോ സ്രോതസ്സുകളായ രക്താസ്‌വാദ്യ തയ്യാറെഴുതുന്ന ഉത്പന്നങ്ങളില്‍ തയ്യാറെഴുതുന്ന നിലവിലെ മാത്രം, തോട്ടികളിലെ കാഴ്ചപ്പാട് അല്ലെങ്കിൽ വില്പനം കൂടാത്തതും ഇതിനു നല്ലതല്ല. കാരണം, മദ്യപിരിയാന്‍ ഇടങ്ങൾ സേവിച്ച് പ്രമുഖ വിലാസങ്ങളിലേക്ക് പരിമിതമാക്കാന്‍ അനുവദിക്കരുത്." : "Any industry/business connected with Meat(slaughtered),i.e. processing, canning and/or serving items made of it as food, production/manufacturing or sale of intoxicant items like Beedi/Pan/ Cigar/Cigarette etc., any Hotel or Dhaba or sales outlet serving liquor, preparation/producing tobacco as raw materials, tapping of toddy for sale."}</li>
                                        <li>{isMalayalam ? "കുടുംബം വ്യവസായത്തെ പോലെ സാധുവായ സ്ഥാപനങ്ങളോട് ബന്ധപ്പെട്ട ഏതെങ്കിലും വ്യവസായം / വ്യവസ്ഥാപനം തുടങ്ങുന്നതും അല്ലെങ്കിൽ പ്രൊജക്റ്റ് / യൂണിറ്റുകള്‍: ടീ, കോഫി, റബ്ബർ തുടങ്ങിയവ, സിറിക്യുൽചരെ പ്രതികളുടെ വളരെ വ്യവസ്ഥാപനം, ഹോർട്ടികള്‍ചര്‍, ഫ്ലോറികള്‍ചര്‍, പിസ്സിക്കള്‍ചര്‍, പിഗ്ഗറി, പോള്ട്രി, ഹാര്‍വസ്റ്റര്‍ മെഷീനുകള്‍ തുടങ്ങിയവ." : "Any industry/business connected with cultivation of crops/ plantation like Tea, Coffee, Rubber etc. sericulture (Cocoon rearing), Horticulture, Floriculture, Animal Husbandry like Pisciculture, Piggery, Poultry, Harvester machines etc."}</li>
                                        <li>{isMalayalam ? "20 മൈക്രോണുകളിലുള്ള പോളിത്തീന്‍ ക്യാരി ബാഗുകളുടെ ഉത്പാദനം അല്ലെങ്കിൽ തയ്യാറെഴുതിയ ഉപയോഗത്തിനായി പുനർചെയ്യപ്പെട്ട പ്ലാസ്റ്റിക് മാത്രം തീക്ഷണ വസ്ത്രം അല്ലെങ്കിൽ അതില്‍ നിര്‍വ്വഹിക്കാനായി ഉപയോഗിക്കുന്ന എല്ലാ ഉപകരണങ്ങളും." : "Manufacturing of Polythene carry bags of less than 20 microns thickness and manufacture of carry bags or containers made of recycled plastic for storing, carrying, dispensing or packaging of food stuff and any other item which causes environmental problems."}</li>
                                        <li>{isMalayalam ? "ഖാദി പ്രോഗ്രാം ഉപയോഗിച്ച് പശ്മീന ഉണ്ണി മത്സ്യന്നര തയ്യാറെഴുതിയ ഉത്പാദനങ്ങളെ ഇതിനു കീഴില്‍ കൊണ്ട് പ്രൊജക്റ്റുകള്‍ ഉപയോഗിക്കാന്‍ അനുവദിക്കുന്നില്ല." : "Industries such as processing of Pashmina Wool and such other products like hand spinning and hand weaving, taking advantage of Khadi Programme under the purview of Certification Rules and availing sales rebate."}</li>
                                        <li>{isMalayalam ? "റളി ട്രാൻസ്‌പോര്‍ട്ട് (അതില്‍ ആന്‍ഡമാന്‍ ആന്‍ഡ് നിക്കോബാര്‍ ദ്വീപുകളില്‍ ഓട്ടോ റിക്ഷ, ജെയിക്കേ ഉത്പാദനം, ശിക്കര മറ്റും ടൂറിസ്റ്റ് ബോട്ടുകള്‍) വിനിയോഗിച്ച് അല്ലെങ്കിൽ സ്യാക്കിൽ റിക്ക്ഷ, പടക്കമായി ഉയരിത്തീര്‍ത്തലിനു ഉപയോഗിക്കുന്നതോടെ കുടിയേറ്റം അനുവദിക്കപ്പെടാന്‍ അനുവദിക്കപ്പെട്ടിട്ടില്ല." : "Rural Transport (Except Auto Rickshaw in Andaman & Nicobar Islands, House Boat, Shikara & Tourist Boats in J&K and Cycle Rickshaw)."}</li>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='all-footer'>
                <FooterOne isMalayalam={isMalayalam} />
            </div>
            <ScrollToTop />
        </>

    );
};

export default ListIndustries;