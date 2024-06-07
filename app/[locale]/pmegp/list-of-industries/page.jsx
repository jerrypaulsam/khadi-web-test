import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

import image1 from "@/public/assets/img/pages/PMEGP.jpg";

const ListIndustries = () => {

    return (
        <>
            <SEO pageTitle="Kerala Khadi - List of Industries" />
            <HeaderOne />
            <BreadCrumb title="List of Industries" innerTitle="PMEGP Scheme" />

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
                                    <h3>List of Industries</h3>
                                    <br />
                                    <table className="officals-table">
                                        <tr>
                                            <th>Category</th>
                                            <th>Details</th>
                                        </tr>
                                        <tr>
                                            <td>Agro Based</td>
                                            <td>
                                                <ul>
                                                    <li>Food Processing Industry</li>
                                                    <li>Bakery Products</li>
                                                    <li>Bedana/Raisin Industry/Seeds Processing</li>
                                                    <li>Cashew/Chironji processing (Dry Fruits)</li>
                                                    <li>Cattle feed</li>
                                                    <li>Charolie making</li>
                                                    <li>Coconut and Areca nut products Daliya making</li>
                                                    <li>Fruits and vegetable processing</li>
                                                    <li>Ghani Oil industry</li>
                                                    <li>Groundnut Decordicator (Seeds/Oil Purpose)</li>
                                                    <li>Indian sweets making</li>
                                                    <li>Khava & Chakka Unit</li>
                                                    <li>Manufacture of Mahendi</li>
                                                    <li>Manufacture of Cane-Gur and Khandsari/ Jaggery making</li>
                                                    <li>Manufacturing of Chips from Banana(raw)/Potato</li>
                                                    <li>Manufacturing of Food Industry</li>
                                                    <li>Manufacturing of Ice/Ice Candy</li>
                                                    <li>Masala Udyog</li>
                                                    <li>Milk products making units</li>
                                                    <li>Mini rice shelling unit/Rice Mill</li>
                                                    <li>Noodles Making</li>
                                                    <li>Paddy Unit (PCPI)</li>
                                                    <li>Palmgur making and other palm products industry</li>
                                                    <li>Papad Making</li>
                                                    <li>Pepsi Unit/ Cold/Soft Drinks</li>
                                                    <li>Poha Making Unit/Popcorn</li>
                                                    <li>Power Atta chakki/Flour Mill</li>
                                                    <li>Processing of Maize and Ragi</li>
                                                    <li>Raswanti- sugarcane Juice catering unit</li>
                                                    <li>Soda Mfg. products</li>
                                                    <li>Supari Making Unit</li>
                                                    <li>Threshing</li>
                                                    <li>Vermicelli (Shyarige) Machine</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Forest Based</td>
                                            <td>
                                                <ul>
                                                    <li>Ayurvedic Medicine Mfg. by forest produce/medicinal plant</li>
                                                    <li>Bamboo and Cane work</li>
                                                    <li>Ban Making Unit</li>
                                                    <li>Basket Making/Bag Making</li>
                                                    <li>Bee-keeping</li>
                                                    <li>Collection of forest plants and fruits for medicinal purpose</li>
                                                    <li>Kath Manufacturing</li>
                                                    <li>Khus tattis and broom making</li>
                                                    <li>Manufacture of Gums and Resins</li>
                                                    <li>Manufacture of Katha</li>
                                                    <li>Manufacture of Shellac</li>
                                                    <li>Manufacturing Pharmacetical products</li>
                                                    <li>Photo framing</li>
                                                    <li>Handmade paper & fiber Industry</li>
                                                    <li>Coir work</li>
                                                    <li>Fibre items</li>
                                                    <li>Handmade Paper/Thermocol</li>
                                                    <li>Leaf cup making</li>
                                                    <li>Manufacture of Jute products (under Fibre industry)</li>
                                                    <li>Manufacture of exercise book binding</li>
                                                    <li>Manufacture of paper cups</li>
                                                    <li>Mat Making</li>
                                                    <li>Pith work</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mineral Based</td>
                                            <td>
                                                <ul>
                                                    <li>Black Board/ Slate and Slate pencil/Chalk making</li>
                                                    <li>Blue Metal Jelly (excavation of stone quarries for crushing of blue metal jelly)</li>
                                                    <li>Brick Bhatta</li>
                                                    <li>Cement Blocking</li>
                                                    <li>Ceramic-Dental Teeth</li>
                                                    <li>Clay Grinding</li>
                                                    <li>Cottage Pottery Industry</li>
                                                    <li>Fuel briqueting</li>
                                                    <li>Gem cutting</li>
                                                    <li>Glassed decoration- cutting</li>
                                                    <li>Goldsmith(Jewellery works)</li>
                                                    <li>Idol Making</li>
                                                    <li>Jewellery out of gold</li>
                                                    <li>Utility articles made out of stone</li>
                                                    <li>Limestone Lime shell and other lime products Industry</li>
                                                    <li>Manufacture of Bangles (LAC)</li>
                                                    <li>Manufacture of Glass toys</li>
                                                    <li>Manufacture of Plaster of paris</li>
                                                    <li>Manufacture of gulal</li>
                                                    <li>Manufacture of paints</li>
                                                    <li>Mfg/Processing Marble sheets/Tiles(Simple/Mosaic etc..)</li>
                                                    <li>Mining activities & Trading small stone</li>
                                                    <li>Mud pot Mfg.</li>
                                                    <li>Polishing of Granite Stone Slabs/Granite Crushing</li>
                                                    <li>Silversmithy</li>
                                                    <li>Steam Coal Powder</li>
                                                    <li>Stone cutting</li>
                                                    <li>Utensil washing powder</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Polymer And Chemical Based</td>
                                            <td>
                                                <ul>
                                                    <li>Candle</li>
                                                    <li>Chappal Making/Shoes Making</li>
                                                    <li>Chemical Industry</li>
                                                    <li>Cottage Match Industry / Manufacture of Fire works and Agarbattis</li>
                                                    <li>Cottage soap industry</li>
                                                    <li>Detergents and washing powder making (non toxic)</li>
                                                    <li>Flaying</li>
                                                    <li>Leather works</li>
                                                    <li>Manufacture of Bindi</li>
                                                    <li>Manufacture of Essential oils</li>
                                                    <li>Manufacture of Rubber products (dipped latex) Rubber Sheets</li>
                                                    <li>Manufacture of Shampoos</li>
                                                    <li>Manufacture packing items of plastics</li>
                                                    <li>Manufactures of hair oil</li>
                                                    <li>Manufacturing of Poly Bags etc.</li>
                                                    <li>Manufacturing of PVC Shoes</li>
                                                    <li>Manufacturing of Resin & Tarpoline Oil</li>
                                                    <li>Menthol oil</li>
                                                    <li>Net Making</li>
                                                    <li>Nylon rope making</li>
                                                    <li>PVC insulated Wire & Cables</li>
                                                    <li>Perfumes Making</li>
                                                    <li>Products out of Rexin PVC</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Rural Engg. And Bio-Tech</td>
                                            <td>
                                                <ul>
                                                    <li>Automobile work</li>
                                                    <li>Blacksmithy</li>
                                                    <li>Carpentry</li>
                                                    <li>Carved wood and artistic furniture making</li>
                                                    <li>Computer Assembling</li>
                                                    <li>Engineering Works( Agrl implements)</li>
                                                    <li>Fabrication Work</li>
                                                    <li>Foundary Unit</li>
                                                    <li>Immitation Jewellery (Bangles) Making</li>
                                                    <li>Iron grill making</li>
                                                    <li>Iron work</li>
                                                    <li>Manufacture of musical instruments</li>
                                                    <li>Manufacture of Handmade utensils out of brass</li>
                                                    <li>Manufacture of Household aluminium utensils</li>
                                                    <li>Manufacture of Rural Transport vehicles such as hand carts</li>
                                                    <li>Manufacture of Various Material Handling Equipments</li>
                                                    <li>Manufacture of decorative bulbs</li>
                                                    <li>Manufacture of electronic clocks and alarm time pieces</li>
                                                    <li>Manufacture of handmade utensils out of Bell metal</li>
                                                    <li>Manufacture of handmade utensils out of copper</li>
                                                    <li>Manufacture of paper pins</li>
                                                    <li>Manufacturing of Engg. Instruments(Tube-lights</li>
                                                    <li>Manufacturing of Machinery Spare Parts/Bearing etc.</li>
                                                    <li>Manufacturing of Mixer Grinder and other House hold goods.</li>
                                                    <li>Motor winding</li>
                                                    <li>Production of Bumper Plant Protecter</li>
                                                    <li>Production of Radios</li>
                                                    <li>Production of cassette player whether or not fitted with Radio</li>
                                                    <li>Production of voltage stablizer</li>
                                                    <li>Rotary Furnace</li>
                                                    <li>Saw Mill</li>
                                                    <li>Solar and wind energy implements</li>
                                                    <li>Stove wicks</li>
                                                    <li>Threasur machine Unit</li>
                                                    <li>Tin smithy</li>
                                                    <li>Transformer/Elect.Motor Pump/Generators</li>
                                                    <li>Trunk & Peti Mfgs.</li>
                                                    <li>Umbrella assembling</li>
                                                    <li>Welding Work</li>
                                                    <li>Wire net making</li>
                                                    <li>Wood Work</li>
                                                    <li>Manufacturing of Plateform scales/ Dharamkanta</li>
                                                    <li>Manufacturing of Screw/Ball Bearing</li>
                                                    <li>Manufacturing of storage batteries</li>
                                                    <li>Manufature of Steel Grills</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Service And Textile</td>
                                            <td>
                                                <ul>
                                                    <li>Agriculture servicing for sprayers</li>
                                                    <li>Art board painting/Spray Painting</li>
                                                    <li>Auto Service Centre</li>
                                                    <li>Ban Making</li>
                                                    <li>Band troupe</li>
                                                    <li>Barber</li>
                                                    <li>Battery charging</li>
                                                    <li>Cable T.V. Network/ Computer Centre</li>
                                                    <li>Cotton Bed/pillows</li>
                                                    <li>Cycle repair shops</li>
                                                    <li>Dyeing & Raising(Flannel)</li>
                                                    <li>Electronics(TV)</li>
                                                    <li>Embroidery</li>
                                                    <li>Embroidery of Fabrics</li>
                                                    <li>HDPE Bag Stitching &Printing</li>
                                                    <li>Herbal Beauty Parlour/Ayurvedic Herbal Products</li>
                                                    <li>Hiring of sound system like loud speaker</li>
                                                    <li>Hosiery</li>
                                                    <li>Kamble Weaving</li>
                                                    <li>Laundry</li>
                                                    <li>Mandap Decoration</li>
                                                    <li>Manufacture of Lok Vastra cloth</li>
                                                    <li>Manufacture of Silk Sarees</li>
                                                    <li>Masonry</li>
                                                    <li>Mineral Water</li>
                                                    <li>Offset Printing & Binding</li>
                                                    <li>Painter/Mfg. of Paints.</li>
                                                    <li>Plumbing Polyvastra/Silk</li>
                                                    <li>Printing Press/Screen Printing</li>
                                                    <li>Repairs of diesel engines pump sets etc.</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="team__single-right-experience">
                                    <h3>Negative List of Activities:</h3>
                                    <br />
                                    <p>
                                        The following list of activities will not be permitted under PMEGP for setting up of micro enterprises/ projects /units:-
                                    </p>
                                    <br />
                                    <p>
                                        <li>Any industry/business connected with Meat(slaughtered),i.e. processing, canning and/or serving items made of it as food, production/manufacturing or sale of intoxicant items like Beedi/Pan/ Cigar/Cigarette etc., any Hotel or Dhaba or sales outlet serving liquor, preparation/producing tobacco as raw materials, tapping of toddy for sale.</li>
                                        <li>Any industry/business connected with cultivation of crops/ plantation like Tea, Coffee, Rubber etc. sericulture (Cocoon rearing), Horticulture, Floriculture, Animal Husbandry like Pisciculture, Piggery, Poultry, Harvester machines etc.</li>
                                        <li>Manufacturing of Polythene carry bags of less than 20 microns thickness and manufacture of carry bags or containers made of recycled plastic for storing, carrying, dispensing or packaging of food stuff and any other item which causes environmental problems.</li>
                                        <li>Industries such as processing of Pashmina Wool and such other products like hand spinning and hand weaving, taking advantage of Khadi Programme under the purview of Certification Rules and availing sales rebate.</li>
                                        <li>Rural Transport (Except Auto Rickshaw in Andaman & Nicobar Islands, House Boat, Shikara & Tourist Boats in J&K and Cycle Rickshaw).</li>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='all-footer'>
                <FooterOne />
            </div>
            <ScrollToTop />
        </>

    );
};

export default ListIndustries;