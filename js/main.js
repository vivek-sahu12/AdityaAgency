/* ═══════════════════════════════════════════════
   ADITYA AGENCY — interactions & bilingual engine
   GPU-Accelerated, Stutter-Free, Lightbox & i18n
   ═══════════════════════════════════════════════ */
"use strict";

/* ─────────── i18n dictionary ─────────── */
const I18N = {
  en: {
    brand: "Aditya Agency",
    brand_sub: "Complete Agri Solution · Since 2010",
    nav_about: "About",
    nav_products: "Products",
    nav_brands: "Brands",
    nav_borewell: "Borewell",
    nav_leadership: "Leadership",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_call: "Call Now",
    hero_eyebrow: "Chhindwara, MP · Est. 2010",
    hero_title: 'आपका भरोसा, हमारी पहचान<br><span class="grad">Trust for every farmer.</span>',
    hero_lead: "Pumps, pipes, drip irrigation, electricals & borewell services — 20+ trusted brands under one roof.",
    hero_cta_wa: "WhatsApp Enquiry",
    hero_cta_products: "Explore Products",
    stat_years: "Years of service",
    stat_brands: "Trusted brands",
    stat_farmers: "Farmers served",
    hero_brands_title: "Authorised Partner Network & Dealer Portfolio",
    about_kicker: "Our Story",
    about_title: 'Rooted in Chhindwara.<br><span class="grad">Growing with its farmers.</span>',
    about_p1: "Founded in 2010 by Kartar Singh Choudhary, Aditya Agency began with a simple promise — bring honest advice and genuine equipment to the farmers of Chhindwara district. Fifteen years later, that promise runs through everything we do.",
    about_p2: "Today, from our showroom on Chand Road, Bohta, we supply complete agricultural water solutions: from the borewell that finds your water, to the pump that lifts it, to the pipes and drip lines that carry it to every row of your field.",
    about_pt1: "Authorised dealer — 100% genuine, billed products",
    about_pt2: "End-to-end: boring, pump, pipe, fitting & service",
    about_pt3: "Honest guidance — we recommend what your field needs, not what costs more",
    stamp: "SINCE 2010 · ADITYA AGENCY · CHHINDWARA · ",
    prod_kicker: "What We Deal In",
    prod_title: 'Everything your field needs,<br><span class="grad">from bore to last row.</span>',
    prod_sub: "Tap any category to send a ready-made WhatsApp enquiry — we'll reply with price and availability.",
    
    /* 15 Products Dictionary */
    p1_t: "Submersible Pumps", p1_d: "High-head V4, V6 & V8 borewell submersible pump sets for deep wells.",
    p2_t: "Monoblock Pumps", p2_d: "Heavy-duty surface monoblock pumps for canals, sumps and open farm tanks.",
    p3_t: "Openwell Pumps", p3_d: "Submersible openwell pumps designed for riverbeds, wells and water pits.",
    p4_t: "Self-Priming Pumps", p4_d: "Domestic & small farm suction pumps for automatic water lifting.",
    p5_t: "PVC Pipes", p5_d: "Supreme & Finolex rigid PVC pressure pipes for farm irrigation and plumbing.",
    p6_t: "HDPE Pipes", p6_d: "Flexible, high-density polyethylene coils and joined pipes for rugged terrain.",
    p7_t: "GI Pipes", p7_d: "Galvanized iron pipes for high-pressure borewells and heavy structural support.",
    p8_t: "Casing Pipes", p8_d: "Heavy-duty PVC casing and screen pipes to prevent borewell collapse.",
    p9_t: "Sprinkler Pipes", p9_d: "Quick-latch sprinkler pipe systems for even crop irrigation.",
    p10_t: "Rain Pipes", p10_d: "Micro-perforated rain irrigation pipes for vegetable & nursery beds.",
    p11_t: "Drip Irrigation", p11_d: "Complete drip kits, laterals, drippers & venturi injectors for water saving.",
    p12_t: "Mulching Film", p12_d: "UV-stabilized agricultural mulching sheets to prevent weeds & retain moisture.",
    p13_t: "Starters & Panels", p13_d: "L&T and RC Bentex automatic motor starters, digital panels & auto-switchers.",
    p14_t: "Wires & Cables", p14_d: "Submersible flat cables, copper motor winding wires & aluminium main lines.",
    p15_t: "Fittings & Valves", p15_d: "Foot valves, ball valves, HDPE compression fittings, clamps and solvent cement.",

    btn_view_more_prods: "View All Products (15)",
    btn_show_less_prods: "Show Less Products",
    btn_view_more_gal: "View More Photos",
    btn_show_less_gal: "Show Less Photos",

    enquire: "WhatsApp",
    brand_kicker: "Authorised Dealerships",
    brand_title: 'Twenty brands.<br><span class="grad">One counter, zero duplicates.</span>',
    brand_sub2: "Every product is genuine, company-billed and covered by the manufacturer's warranty.",
    bw_kicker: "In-house Service",
    bw_title: 'Hariom Borewell —<br><span class="grad-light">we find your water.</span>',
    bw_p: "Fields, plots, homes, wells and gardens — our own rig drills where you need it, with casing and pump fitting handled by the same team you buy from.",
    bw_call: "Call Aditya Singh · 91797 02812", bw_wa: "WhatsApp for Boring",
    leadership_kicker: "Leadership",
    leadership_title: 'Guiding Aditya Agency with<br><span class="grad">Integrity &amp; Experience.</span>',
    leadership_sub: "Three Choudharys leading from the front — built on trust, transparent pricing, and total customer commitment.",
    t1_name: "Kartar Singh Choudhary", t1_role: "Founder", t1_title_sub: "Founder & Visionary",
    t1_d: "Started it all in 2010. Still the first word on product quality and the last word on a fair price.",
    t2_name: "Aditya Singh Choudhary", t2_role: "Proprietor", t2_title_sub: "Proprietor & Borewell Lead",
    t2_d: "Runs the showroom and leads Hariom Borewell operations — your point of contact for everything.",
    t3_name: "Durgesh Singh Choudhary", t3_role: "Co-owner", t3_title_sub: "Co-owner & Inventory Lead",
    t3_d: "Handles stock, supply and after-sales — makes sure what you ordered reaches your field on time.",
    gal_kicker: "From Our Shop & Operations",
    gal_title: 'Real shop, real stock,<br><span class="grad">quality products in action.</span>',
    gal_sub: "Click any photo to open full screen. Use keyboard arrows or swipe on mobile.",
    gal_c1: "Our showroom, Chand Road", gal_c2: "Showroom Storefront & Stock",
    gal_c3: "Full agricultural product range", gal_c4: "Authorised brand portfolio board",
    gal_c5: "Hariom Borewell rig & service poster", gal_c6: "Official product range & contact card",
    gal_c7: "Showroom Interior Stock", gal_c8: "Borewell Drilling Equipment",
    gal_c9: "Agricultural Pipes Inventory",
    con_kicker: "Visit · Call · WhatsApp",
    con_title: 'Come see the stock yourself.<br><span class="grad">Chai is on us.</span>',
    con_sub: "Direct contact info and live store location in Bohta, Chand Road, Chhindwara.",
    con_addr_t: "Showroom Address",
    con_addr: "Near Kundipura Police Station, Chand Road, Bohta, Dist. Chhindwara, MP – 480001",
    con_ph_t: "Phone Numbers", con_ph_s: "Mon–Sat, 11 AM – 8 PM",
    con_em_t: "Email Address", con_em_s: "For quotes & bulk orders",
    con_tm_t: "Timing", con_tm: "11:00 AM – 8:00 PM", con_tm_s: "Sunday Closed",
    con_gst_t: "GSTIN", con_gst_s: "Fully billed & compliant",
    con_dir_btn: "Get Directions",
    foot_tag: "आपका भरोसा, हमारी पहचान।<br>Your trust, our identity.",
    foot_explore: "Quick Links", foot_prods_title: "Products", foot_contact: "Contact Us",
    foot_copy: "© 2026 Aditya Agency, Chhindwara. All rights reserved.",
    foot_made: "Serving farmers since 2010",
    bw_s1_title: "4½″ Borewell Drilling",
    bw_s1_desc: "Perfect for residential plots, small gardens, and narrow-diameter pipe systems. Economical and fast drilling.",
    bw_s1_use: "Residential & Gardens",
    bw_s1_casing: "Supreme Heavy-Duty PVC",
    bw_s2_title: "6½″ Borewell Drilling",
    bw_s2_desc: "The standard size for agricultural tubewells and orchard farms in Chhindwara. Optimized for high-discharge farm pumps.",
    bw_s2_use: "Agricultural Farms & Orchards",
    bw_s2_casing: "Heavy-Duty Casing Pipe",
    bw_s3_title: "8½″ Borewell Drilling",
    bw_s3_desc: "Ideal for high-capacity irrigation wells, large-scale horticulture, and multi-pump industrial water extraction.",
    bw_s3_use: "Commercial Farms & Estates",
    bw_s3_casing: "Double Casing / Mild Steel",
    bw_s4_title: "10″ Borewell Drilling",
    bw_s4_desc: "Municipal tubewells, heavy-duty industrial setups, deep community wells, and major construction projects.",
    bw_s4_use: "Industrial & Municipal Projects",
    bw_meta_use: "Primary Use:",
    bw_meta_casing: "Casing Type:"
  },
  hi: {
    brand: "आदित्य एजेंसी",
    brand_sub: "संपूर्ण कृषि समाधान · 2010 से",
    nav_about: "हमारे बारे में",
    nav_products: "उत्पाद",
    nav_brands: "ब्रांड",
    nav_borewell: "बोरवेल",
    nav_leadership: "नेतृत्व",
    nav_gallery: "गैलरी",
    nav_contact: "संपर्क",
    nav_call: "कॉल करें",
    hero_eyebrow: "छिंदवाड़ा, मध्य प्रदेश · स्थापना 2010",
    hero_title: 'आपका भरोसा, हमारी पहचान<br><span class="grad">हर किसान का भरोसा।</span>',
    hero_lead: "पम्प, पाइप, ड्रिप सिंचाई, इलेक्ट्रिकल और बोरवेल सेवा — 20 से अधिक भरोसेमंद ब्रांड एक ही छत के नीचे।",
    hero_cta_wa: "व्हाट्सएप पूछताछ",
    hero_cta_products: "उत्पाद देखें",
    stat_years: "वर्षों की सेवा",
    stat_brands: "भरोसेमंद ब्रांड",
    stat_farmers: "संतुष्ट किसान",
    hero_brands_title: "अधिकृत पार्टनर नेटवर्क एवं प्रमुख ब्रांड्स",
    about_kicker: "हमारी कहानी",
    about_title: 'छिंदवाड़ा में जड़ें।<br><span class="grad">किसानों के साथ बढ़ते हुए।</span>',
    about_p1: "2010 में करतार सिंह चौधरी द्वारा स्थापित, आदित्य एजेंसी की शुरुआत एक सादे वादे से हुई — छिंदवाड़ा जिले के किसानों तक ईमानदार सलाह और असली उपकरण पहुँचाना। पंद्रह वर्ष बाद भी यही वादा हमारे हर काम में ज़िंदा है।",
    about_p2: "आज चाँद रोड, बोहता स्थित हमारे शोरूम से हम संपूर्ण कृषि जल समाधान देते हैं — बोरवेल जो पानी खोजे, पम्प जो उसे ऊपर लाए, और पाइप व ड्रिप लाइन जो उसे खेत की हर क्यारी तक पहुँचाए।",
    about_pt1: "अधिकृत डीलर — 100% जेन्युइन, बिल सहित सामान",
    about_pt2: "शुरू से अंत तक: बोरिंग, पम्प, पाइप, फिटिंग व सर्विस",
    about_pt3: "सच्ची सलाह — हम वही बताते हैं जो आपके खेत को चाहिए, महंगा नहीं",
    stamp: "2010 से · आदित्य एजेंसी · छिंदवाड़ा · ",
    prod_kicker: "हम क्या बेचते हैं",
    prod_title: 'खेत की हर ज़रूरत,<br><span class="grad">बोर से आख़िरी क्यारी तक।</span>',
    prod_sub: "किसी भी श्रेणी पर टैप करें और तैयार व्हाट्सएप पूछताछ भेजें — हम कीमत और उपलब्धता के साथ जवाब देंगे।",
    
    /* 15 Products Hindi Dictionary */
    p1_t: "सबमर्सिबल पम्प", p1_d: "गहरे बोरवेल के लिए उच्च क्षमता वाले V4, V6 और V8 सबमर्सिबल पम्प।",
    p2_t: "मोनोब्लॉक पम्प", p2_d: "नहर, कुएँ और खेत के टैंकों के लिए हेवी-ड्यूटी सरफेस मोनोब्लॉक पम्प।",
    p3_t: "ओपनवेल पम्प", p3_d: "नदियों, बड़े कुओं और खदानों के लिए सबमर्सिबल ओपनवेल पम्प।",
    p4_t: "सेल्फ प्राइमिंग पम्प", p4_d: "घरेलू और छोटे खेतों में स्वतः पानी उठाने वाले पम्प।",
    p5_t: "PVC पाइप्स", p5_d: "सुप्रीम व फिनोलेक्स के टिकाऊ पीवीसी पाइप्स खेत की सिंचाई के लिए।",
    p6_t: "HDPE पाइप्स", p6_d: "ऊबड़-खाबड़ ज़मीन के लिए लचीले व मजबूत एचडीपीई पाइप रोल।",
    p7_t: "GI पाइप्स", p7_d: "उच्च दबाव वाले बोरवेल और संरचनात्मक मजबूती के लिए जीआई पाइप।",
    p8_t: "केसिंग पाइप्स", p8_d: "बोरवेल को धंसने से बचाने के लिए हेवी-ड्यूटी केसिंग पाइप।",
    p9_t: "स्प्रिंकलर पाइप्स", p9_d: "फसलों में समान सिंचाई के लिए क्विक-लैच स्प्रिंकलर पाइप।",
    p10_t: "रेन पाइप्स", p10_d: "सब्जियों व नर्सरी के लिए बारीक फुहार देने वाले रेन पाइप।",
    p11_t: "ड्रिप सिंचाई", p11_d: "पानी बचाने और पैदावार बढ़ाने के लिए संपूर्ण ड्रिप किट व लेटरल।",
    p12_t: "मल्चिंग फिल्म", p12_d: "खरपतवार रोकने और नमी बनाए रखने के लिए यूवी मल्चिंग शीट।",
    p13_t: "स्टार्टर व पैनल", p13_d: "एलएंडटी व आरसी बेंटेक्स के ऑटोमेटिक मोटर स्टार्टर व पैनल।",
    p14_t: "वायर व केबल्स", p14_d: "सबमर्सिबल फ्लैट केबल, कॉपर वाइंडिंग वायर और एल्युमिनियम लाइन।",
    p15_t: "फिटिंग व वाल्व", p15_d: "फुट वाल्व, बॉल वाल्व, एचडीपीई फिटिंग, क्लैंप और सॉल्यूशन।",

    btn_view_more_prods: "सभी 15 उत्पाद देखें",
    btn_show_less_prods: "कम उत्पाद देखें",
    btn_view_more_gal: "और फ़ोटो देखें",
    btn_show_less_gal: "कम फ़ोटो देखें",

    enquire: "व्हाट्सएप",
    brand_kicker: "अधिकृत डीलरशिप",
    brand_title: 'बीस ब्रांड।<br><span class="grad">एक दुकान, नकल ज़ीरो।</span>',
    brand_sub2: "हर उत्पाद जेन्युइन है, कंपनी बिल के साथ और निर्माता की वारंटी में।",
    bw_kicker: "हमारी अपनी सेवा",
    bw_title: 'हरिओम बोरवेल —<br><span class="grad-light">हम खोजते हैं आपका पानी।</span>',
    bw_p: "खेत, प्लॉट, मकान, कुएँ और बाड़ी — हमारी अपनी मशीन वहीं बोर करती है जहाँ आपको चाहिए, केसिंग और पम्प फिटिंग उसी टीम से जिससे आप सामान खरीदते हैं।",
    bw_call: "आदित्य सिंह को कॉल करें · 91797 02812", bw_wa: "बोरिंग के लिए व्हाट्सएप",
    leadership_kicker: "नेतृत्व",
    leadership_title: 'सच्चाई और अनुभव के साथ<br><span class="grad">आदित्य एजेंसी का नेतृत्व।</span>',
    leadership_sub: "तीन चौधरी आगे बढ़कर संभालते हैं कमान — भरोसा, पारदर्शी मूल्य और पूर्ण ग्राहक प्रतिबद्धता।",
    t1_name: "करतार सिंह चौधरी", t1_role: "संस्थापक", t1_title_sub: "संस्थापक एवं मार्गदर्शक",
    t1_d: "2010 में शुरुआत की। आज भी क्वालिटी पर पहला और उचित दाम पर आख़िरी फैसला इन्हीं का।",
    t2_name: "आदित्य सिंह चौधरी", t2_role: "प्रोपराइटर", t2_title_sub: "प्रोपराइटर एवं बोरवेल प्रमुख",
    t2_d: "शोरूम चलाते हैं और हरिओम बोरवेल की कमान संभालते हैं — हर बात के लिए आपका संपर्क।",
    t3_name: "दुर्गेश सिंह चौधरी", t3_role: "सह-मालिक", t3_title_sub: "सह-मालिक एवं स्टॉक प्रमुख",
    t3_d: "स्टॉक, सप्लाई और बिक्री के बाद की सेवा संभालते हैं — आपका सामान समय पर खेत तक पहुँचाना इन्हीं की ज़िम्मेदारी।",
    gal_kicker: "हमारी दुकान और कार्य",
    gal_title: 'असली दुकान, असली स्टॉक,<br><span class="grad">उत्कृष्ट गुणवत्ता का सामान।</span>',
    gal_sub: "फुल स्क्रीन में फोटो देखने के लिए क्लिक करें।",
    gal_c1: "हमारा शोरूम, चाँद रोड", gal_c2: "शोरूम मुख्य द्वार व स्टॉक",
    gal_c3: "संपूर्ण कृषि उत्पाद श्रृंखला", gal_c4: "अधिकृत ब्रांड पोर्टफोलियो बोर्ड",
    gal_c5: "हरिओम बोरवेल ड्रिलिंग पोस्टर", gal_c6: "आधिकारिक उत्पाद एवं संपर्क कार्ड",
    gal_c7: "शोरूम आंतरिक स्टॉक", gal_c8: "बोरवेल ड्रिलिंग उपकरण",
    gal_c9: "कृषि पाइप इन्वेंट्री",
    con_kicker: "आइए · कॉल कीजिए · व्हाट्सएप कीजिए",
    con_title: 'स्टॉक ख़ुद देखकर आइए।<br><span class="grad">चाय हमारी तरफ़ से।</span>',
    con_sub: "बोहता, चाँद रोड, छिंदवाड़ा में सीधा संपर्क और स्टोर लोकेशन।",
    con_addr_t: "शोरूम का पता",
    con_addr: "कुंडीपुरा पुलिस थाना के पास, चाँद रोड, बोहता, जिला छिंदवाड़ा, म.प्र. – 480001",
    con_ph_t: "फोन नंबर", con_ph_s: "सोम–शनि, सुबह 11 – रात 8",
    con_em_t: "ईमेल पता", con_em_s: "रेट और थोक ऑर्डर के लिए",
    con_tm_t: "समय", con_tm: "सुबह 11:00 – रात 8:00", con_tm_s: "रविवार बंद",
    con_gst_t: "GSTIN", con_gst_s: "पूरा बिल, पूरा भरोसा",
    con_dir_btn: "गूगल मैप्स में रास्ता देखें",
    foot_tag: "आपका भरोसा, हमारी पहचान।",
    foot_explore: "त्वरित लिंक", foot_prods_title: "उत्पाद", foot_contact: "संपर्क करें",
    foot_copy: "© 2026 आदित्य एजेंसी, छिंदवाड़ा। सर्वाधिकार सुरक्षित।",
    foot_made: "2010 से किसानों की सेवा में",
    bw_s1_title: "4½″ बोरवेल ड्रिलिंग",
    bw_s1_desc: "घरेलू भूखंडों, छोटे बगीचों और संकीर्ण-व्यास पाइप प्रणालियों के लिए बिल्कुल सही। किफायती और तेज़ ड्रिलिंग।",
    bw_s1_use: "घरेलू और छोटे बगीचे",
    bw_s1_casing: "सुप्रीम हेवी-ड्यूटी पीवीसी",
    bw_s2_title: "6½″ बोरवेल ड्रिलिंग",
    bw_s2_desc: "छिंदवाड़ा में कृषि ट्यूबवेल और बगीचों के लिए मानक आकार। उच्च-डिस्चार्ज कृषि पंपों के लिए अनुकूलित।",
    bw_s2_use: "कृषि फार्म और बागवानी",
    bw_s2_casing: "हेवी-ड्यूटी केसिंग पाइप",
    bw_s3_title: "8½″ बोरवेल ड्रिलिंग",
    bw_s3_desc: "उच्च क्षमता वाले सिंचाई कुओं, बड़े पैमाने पर बागवानी और मल्टी-पंप औद्योगिक पानी निकालने के लिए आदर्श।",
    bw_s3_use: "व्यावसायिक फार्म और संपदा",
    bw_s3_casing: "डबल केसिंग / माइल्ड स्टील",
    bw_s4_title: "10″ बोरवेल ड्रिलिंग",
    bw_s4_desc: "नगर पालिका ट्यूबवेल, भारी-भरकम औद्योगिक सेटअप, गहरे सामुदायिक कुएं और बड़ी निर्माण परियोजनाएं।",
    bw_s4_use: "औद्योगिक और सरकारी परियोजनाएं",
    bw_meta_use: "मुख्य उपयोग:",
    bw_meta_casing: "केसिंग प्रकार:"
  }
};

const WA_NUMBER = "919926920588";

/* ─────────── Instant Stutter-Free Language Engine ─────────── */
const body = document.body;
const langBtns = document.querySelectorAll(".lang-opt");
let currentLang = "en";

/* ─────────── Borewell Sizing Interactive Logic ─────────── */
let selectedBorewellSize = "s1";

function updateBorewellDetails() {
  const dict = I18N[currentLang];
  const size = selectedBorewellSize;

  const titleEl = document.getElementById("bwDetailTitle");
  const descEl = document.getElementById("bwDetailDesc");
  const useEl = document.getElementById("bwDetailUse");
  const casingEl = document.getElementById("bwDetailCasing");

  if (titleEl) titleEl.textContent = dict[`bw_${size}_title`] || "";
  if (descEl) descEl.textContent = dict[`bw_${size}_desc`] || "";
  if (useEl) useEl.textContent = dict[`bw_${size}_use`] || "";
  if (casingEl) casingEl.textContent = dict[`bw_${size}_casing`] || "";

  document.querySelectorAll(".bw-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.size === size);
  });

  const waBtn = document.getElementById("bwWaBtn");
  if (waBtn) {
    const sizeLabel = size === "s1" ? "4½″" : size === "s2" ? "6½″" : size === "s3" ? "8½″" : "10″";
    const msg = currentLang === "hi"
      ? `नमस्ते आदित्य एजेंसी! मैं हरिओम बोरवेल की ${sizeLabel} इंच ड्रिलिंग सेवा के बारे में पूछताछ करना चाहता हूँ।`
      : `Namaste Aditya Agency! I want to enquire about the Hariom Borewell ${sizeLabel} drilling service.`;
    waBtn.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  }
}

function applyLang(lang) {
  currentLang = lang;
  const dict = I18N[lang];
  document.documentElement.lang = lang === "hi" ? "hi" : "en";
  body.classList.toggle("lang-hi", lang === "hi");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  updateBorewellDetails();
  langBtns.forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  try { localStorage.setItem("aa-lang", lang); } catch (e) { }
}

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(currentLang === "en" ? "hi" : "en");
});

try {
  const saved = localStorage.getItem("aa-lang");
  if (saved && saved !== "en") applyLang(saved);
} catch (e) { }

/* ─────────── Nav Scroll & Mobile Drawer ─────────── */
const nav = document.getElementById("nav");
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");

function onScroll() {
  nav.classList.toggle("scrolled", window.scrollY > 30);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

hamburger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  hamburger.classList.toggle("open", open);
});
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  })
);

/* ─────────── Reveal on Scroll ─────────── */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
);
document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach(el => revealObserver.observe(el));

/* ─────────── Animated Counters (Single Observer Trigger) ─────────── */
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const dur = 1400;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString("en-IN");
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target);
        counterObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll(".count").forEach(el => counterObserver.observe(el));

/* ─────────── Product WhatsApp Enquiry Buttons ─────────── */
document.querySelectorAll(".prod-enq[data-prod]").forEach(btn => {
  btn.addEventListener("click", () => {
    const prod = btn.dataset.prod;
    const msg =
      currentLang === "hi"
        ? `नमस्ते आदित्य एजेंसी! मुझे ${prod} के बारे में जानकारी चाहिए। कृपया कीमत और उपलब्धता बताएँ।`
        : `Namaste Aditya Agency! I want to enquire about: ${prod}. Please share price and availability.`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  });
});

/* ─────────── Products & Gallery "View More" Toggle ─────────── */
const toggleProdsBtn = document.getElementById("toggleProdsBtn");
if (toggleProdsBtn) {
  let prodsExpanded = false;
  toggleProdsBtn.addEventListener("click", () => {
    prodsExpanded = !prodsExpanded;
    const hiddenCards = document.querySelectorAll(".prod-card-extra");
    hiddenCards.forEach(card => {
      card.classList.toggle("is-visible", prodsExpanded);
    });
    const labelKey = prodsExpanded ? "btn_show_less_prods" : "btn_view_more_prods";
    toggleProdsBtn.querySelector("span").setAttribute("data-i18n", labelKey);
    toggleProdsBtn.querySelector("span").textContent = I18N[currentLang][labelKey];
  });
}

const toggleGalBtn = document.getElementById("toggleGalBtn");
if (toggleGalBtn) {
  let galExpanded = false;
  toggleGalBtn.addEventListener("click", () => {
    galExpanded = !galExpanded;
    const hiddenItems = document.querySelectorAll(".gal-item-extra");
    hiddenItems.forEach(item => {
      item.classList.toggle("is-visible", galExpanded);
    });
    const labelKey = galExpanded ? "btn_show_less_gal" : "btn_view_more_gal";
    toggleGalBtn.querySelector("span").setAttribute("data-i18n", labelKey);
    toggleGalBtn.querySelector("span").textContent = I18N[currentLang][labelKey];
    
    // Refresh gallery items array for lightbox
    refreshGalleryItems();
  });
}

/* ─────────── Scroll Progress Bar ─────────── */
const scrollProgress = document.getElementById("scrollProgress");
if (scrollProgress) {
  window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + "%";
  }, { passive: true });
}

/* ─────────── Gallery Lightbox Modal & Navigation ─────────── */
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCaption = document.getElementById("lbCaption");
const lbCounter = document.getElementById("lbCounter");
const lbClose = document.getElementById("lbClose");
const lbPrev = document.getElementById("lbPrev");
const lbNext = document.getElementById("lbNext");
const lbOverlay = document.getElementById("lbOverlay");

let activeGalItems = [];
let currentGalIndex = 0;

function refreshGalleryItems() {
  activeGalItems = Array.from(document.querySelectorAll(".gal-item")).filter(el => {
    return window.getComputedStyle(el).display !== "none";
  });
}

function showGalleryImage(index) {
  refreshGalleryItems();
  if (!activeGalItems.length) return;
  if (index < 0) index = activeGalItems.length - 1;
  if (index >= activeGalItems.length) index = 0;
  currentGalIndex = index;

  const item = activeGalItems[index];
  const img = item.querySelector("img");
  const caption = item.querySelector("figcaption");

  lbImg.src = img.src;
  lbImg.alt = img.alt;
  if (lbCaption) lbCaption.textContent = caption ? caption.textContent : "";
  if (lbCounter) lbCounter.textContent = `${index + 1} / ${activeGalItems.length}`;
}

if (lightbox) {
  document.getElementById("galGrid").addEventListener("click", (e) => {
    const item = e.target.closest(".gal-item");
    if (!item) return;
    refreshGalleryItems();
    const idx = activeGalItems.indexOf(item);
    if (idx !== -1) {
      showGalleryImage(idx);
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbOverlay) lbOverlay.addEventListener("click", closeLightbox);
  if (lbPrev) lbPrev.addEventListener("click", () => showGalleryImage(currentGalIndex - 1));
  if (lbNext) lbNext.addEventListener("click", () => showGalleryImage(currentGalIndex + 1));

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showGalleryImage(currentGalIndex - 1);
    if (e.key === "ArrowRight") showGalleryImage(currentGalIndex + 1);
  });

  // Mobile Swipe Gesture Support
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 40) showGalleryImage(currentGalIndex + 1);
    if (touchEndX - touchStartX > 40) showGalleryImage(currentGalIndex - 1);
  }, { passive: true });
}

/* ─────────── Borewell Tab Handlers ─────────── */
document.querySelectorAll(".bw-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    selectedBorewellSize = tab.dataset.size;
    updateBorewellDetails();
  });
});

// Initial run
updateBorewellDetails();
refreshGalleryItems();
