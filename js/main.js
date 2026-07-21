/* ═══════════════════════════════════════════════
   ADITYA AGENCY — interactions & bilingual engine
   ═══════════════════════════════════════════════ */
"use strict";

/* ─────────── i18n dictionary ─────────── */
const I18N = {
  en: {
    brand: "Aditya Agency",
    brand_sub: "Complete Agri Solution · Since 2010",
    nav_about: "About", nav_products: "Products", nav_brands: "Brands",
    nav_borewell: "Borewell", nav_team: "Team", nav_contact: "Contact", nav_call: "Call Now",
    hero_eyebrow: "Chhindwara, Madhya Pradesh · Est. 2010",
    hero_title: 'Water for every root.<br><span class="grad">Trust for every farmer.</span>',
    hero_lead: "Pumps, pipes, drip irrigation, electricals and borewell services — 20 trusted brands under one roof, serving the fields of Chhindwara for over 15 years.",
    hero_cta_wa: "WhatsApp Enquiry", hero_cta_products: "Explore Products",
    stat_years: "Years of service", stat_brands: "Trusted brands", stat_farmers: "Farmers served",
    hero_badge_t: "Aditya Agency", hero_badge_s: "Bohta · Chand Road",
    float_a_t: "Borewell 4½″–10″", float_a_s: "Hariom Borewell",
    float_b_t: "Drip & Sprinkler", float_b_s: "Save every drop",
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
    p1_t: "Pumps", p1_d: "Submersible, monoblock, openwell and self-priming pumps for farms, homes and plots.",
    p1_c1: "Submersible", p1_c2: "Monoblock", p1_c3: "Openwell", p1_c4: "Self-Priming",
    p2_t: "Pipes", p2_d: "PVC, HDPE, GI, casing and sprinkler pipes in every size a borewell or field demands.",
    p2_c4: "Casing", p2_c5: "Sprinkler",
    p3_t: "Drip & Mulching", p3_d: "Drip kits, laterals, mulching film and mini-sprinkler systems that save water and boost yield.",
    p3_c1: "Drip Kits", p3_c2: "Mulching Film", p3_c3: "Mini Sprinkler",
    p4_t: "Electrical", p4_d: "Starters, control panels, submersible cables and copper/aluminium wires for safe power.",
    p4_c1: "Starters", p4_c2: "Panels", p4_c3: "Wires & Cables",
    p5_t: "Fittings & Accessories", p5_d: "Valves, joints, foot valves, HDPE/PP fittings and every small part that keeps water flowing.",
    p5_c1: "Valves", p5_c2: "Foot Valves", p5_c3: "HDPE Fittings",
    p6_t: "Hariom Borewell", p6_d: "Our own boring rig — 4½″, 6½″, 8½″ and 10″ boring for fields, plots, homes and wells.",
    p6_cta: "See Borewell Service",
    enquire: "Enquire on WhatsApp",
    brand_kicker: "Authorised Dealerships",
    brand_title: 'Twenty brands.<br><span class="grad">One counter, zero duplicates.</span>',
    brand_sub2: "Every product is genuine, company-billed and covered by the manufacturer's warranty.",
    bw_kicker: "In-house Service",
    bw_title: 'Hariom Borewell —<br><span class="grad-light">we find your water.</span>',
    bw_p: "Fields, plots, homes, wells and gardens — our own rig drills where you need it, with casing and pump fitting handled by the same team you buy from.",
    bw_s1: "Homes & gardens", bw_s2: "Farms & plots", bw_s3: "High-yield wells", bw_s4: "Commercial boring",
    bw_call: "Call Aditya Singh · 91797 02812", bw_wa: "WhatsApp for Boring",
    team_kicker: "The Family Behind the Counter",
    team_title: 'Three Choudharys behind the counter,<br><span class="grad">one promise — your trust.</span>',
    t1_init: "K", t1_name: "Kartar Singh Choudhary", t1_role: "Founder",
    t1_d: "Started it all in 2010. Still the first word on product quality and the last word on a fair price.",
    t2_name: "Aditya Singh Choudhary", t2_role: "Proprietor",
    t2_d: "Runs the showroom and leads Hariom Borewell operations — your point of contact for everything.",
    t3_init: "D", t3_name: "Durgesh Singh Choudhary", t3_role: "Co-owner",
    t3_d: "Handles stock, supply and after-sales — makes sure what you ordered reaches your field on time.",
    gal_kicker: "From Our Shop",
    gal_title: 'Real shop, real stock,<br><span class="grad">real people.</span>',
    gal_c1: "Our showroom, Chand Road", gal_c2: "At the counter",
    gal_c3: "Full product range", gal_c4: "Authorised brand board",
    con_kicker: "Visit · Call · WhatsApp",
    con_title: 'Come see the stock yourself.<br><span class="grad">Chai is on us.</span>',
    con_addr_t: "Aditya Agency",
    con_addr: "Near Kundipura Police Station, Chand Road, Bohta, Dist. Chhindwara, MP – 480001",
    con_addr_link: "Open in Google Maps →",
    con_ph_t: "Call us", con_ph_s: "Mon–Sat, 11 AM – 8 PM",
    con_wa_t: "WhatsApp", con_wa_s: "Fastest reply — send your list",
    con_em_t: "Email", con_em_s: "For quotes & bulk orders",
    con_tm_t: "Timing", con_tm: "11:00 AM – 8:00 PM", con_tm_s: "Sunday Closed",
    con_gst_t: "GSTIN", con_gst_s: "Fully billed & compliant",
    form_t: "Send an enquiry",
    form_s: "Fill this in — it opens WhatsApp with your message ready to send.",
    form_name: "Your name", form_village: "Village / Town", form_need: "What do you need?",
    form_msg: "Message (optional)", form_btn: "Send via WhatsApp",
    opt_pump: "Pump (Submersible / Monoblock / etc.)",
    opt_pipe: "Pipes (PVC / HDPE / GI / Casing)",
    opt_drip: "Drip / Sprinkler / Mulching",
    opt_elec: "Electrical (Starter / Panel / Wire)",
    opt_fit: "Fittings & Accessories",
    opt_bore: "Borewell Drilling (Hariom Borewell)",
    opt_other: "Something else",
    foot_tag: "आपका भरोसा, हमारी पहचान।<br>Your trust, our identity.",
    foot_explore: "Explore", foot_contact: "Contact", foot_visit: "Visit", foot_map: "Google Maps →",
    foot_copy: "© 2026 Aditya Agency, Chhindwara. GSTIN 23AIPPC2490B1ZV",
    foot_made: "Serving farmers since 2010",
    
    // Borewell sizes additions
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
    bw_s4_casing: "API Grade Steel / Custom PVC",
    
    bw_meta_use: "Primary Use:",
    bw_meta_casing: "Casing Type:"
  },
  hi: {
    brand: "आदित्य एजेंसी",
    brand_sub: "संपूर्ण कृषि समाधान · 2010 से",
    nav_about: "हमारे बारे में", nav_products: "उत्पाद", nav_brands: "ब्रांड",
    nav_borewell: "बोरवेल", nav_team: "टीम", nav_contact: "संपर्क", nav_call: "कॉल करें",
    hero_eyebrow: "छिंदवाड़ा, मध्य प्रदेश · स्थापना 2010",
    hero_title: 'हर जड़ तक पानी।<br><span class="grad">हर किसान का भरोसा।</span>',
    hero_lead: "पम्प, पाइप, ड्रिप सिंचाई, इलेक्ट्रिकल और बोरवेल सेवा — 20 भरोसेमंद ब्रांड एक ही छत के नीचे, 15 वर्षों से छिंदवाड़ा के खेतों की सेवा में।",
    hero_cta_wa: "व्हाट्सएप पूछताछ", hero_cta_products: "उत्पाद देखें",
    stat_years: "वर्षों की सेवा", stat_brands: "भरोसेमंद ब्रांड", stat_farmers: "संतुष्ट किसान",
    hero_badge_t: "आदित्य एजेंसी", hero_badge_s: "बोहता · चाँद रोड",
    float_a_t: "बोरवेल 4½″–10″", float_a_s: "हरिओम बोरवेल",
    float_b_t: "ड्रिप और स्प्रिंकलर", float_b_s: "हर बूंद बचाएँ",
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
    p1_t: "पम्प्स", p1_d: "खेत, घर और प्लॉट के लिए सबमर्सिबल, मोनोब्लॉक, ओपनवेल और सेल्फ प्राइमिंग पम्प।",
    p1_c1: "सबमर्सिबल", p1_c2: "मोनोब्लॉक", p1_c3: "ओपनवेल", p1_c4: "सेल्फ प्राइमिंग",
    p2_t: "पाइप्स", p2_d: "हर साइज़ में PVC, HDPE, GI, केसिंग और स्प्रिंकलर पाइप — बोरवेल और खेत की हर ज़रूरत के लिए।",
    p2_c4: "केसिंग", p2_c5: "स्प्रिंकलर",
    p3_t: "ड्रिप व मल्चिंग", p3_d: "ड्रिप किट, लेटरल, मल्चिंग फिल्म और मिनी स्प्रिंकलर — पानी बचाएँ, पैदावार बढ़ाएँ।",
    p3_c1: "ड्रिप किट", p3_c2: "मल्चिंग फिल्म", p3_c3: "मिनी स्प्रिंकलर",
    p4_t: "इलेक्ट्रिकल", p4_d: "स्टार्टर, कंट्रोल पैनल, सबमर्सिबल केबल और कॉपर/एल्युमिनियम वायर — सुरक्षित बिजली के लिए।",
    p4_c1: "स्टार्टर", p4_c2: "पैनल", p4_c3: "वायर व केबल",
    p5_t: "फिटिंग व एक्सेसरीज़", p5_d: "वाल्व, जोड़, फुट वाल्व, HDPE/PP फिटिंग और वह हर छोटा पुर्ज़ा जो पानी का बहाव जारी रखे।",
    p5_c1: "वाल्व", p5_c2: "फुट वाल्व", p5_c3: "HDPE फिटिंग",
    p6_t: "हरिओम बोरवेल", p6_d: "हमारी अपनी बोरिंग मशीन — खेत, प्लॉट, मकान, कुएँ और बाड़ी के लिए 4½″, 6½″, 8½″ व 10″ बोर।",
    p6_cta: "बोरवेल सेवा देखें",
    enquire: "व्हाट्सएप पर पूछें",
    brand_kicker: "अधिकृत डीलरशिप",
    brand_title: 'बीस ब्रांड।<br><span class="grad">एक दुकान, नकल ज़ीरो।</span>',
    brand_sub2: "हर उत्पाद जेन्युइन है, कंपनी बिल के साथ और निर्माता की वारंटी में।",
    bw_kicker: "हमारी अपनी सेवा",
    bw_title: 'हरिओम बोरवेल —<br><span class="grad-light">हम खोजते हैं आपका पानी।</span>',
    bw_p: "खेत, प्लॉट, मकान, कुएँ और बाड़ी — हमारी अपनी मशीन वहीं बोर करती है जहाँ आपको चाहिए, केसिंग और पम्प फिटिंग उसी टीम से जिससे आप सामान खरीदते हैं।",
    bw_s1: "घर व बाड़ी", bw_s2: "खेत व प्लॉट", bw_s3: "उच्च दर कुएँ", bw_s4: "कमर्शियल बोरिंग",
    bw_call: "आदित्य सिंह को कॉल करें · 91797 02812", bw_wa: "बोरिंग के लिए व्हाट्सएप",
    team_kicker: "काउंटर के पीछे का परिवार",
    team_title: 'तीन चौधरी काउंटर के पीछे,<br><span class="grad">एक वादा — आपका भरोसा।</span>',
    t1_init: "क", t1_name: "करतार सिंह चौधरी", t1_role: "संस्थापक",
    t1_d: "2010 में शुरुआत की। आज भी क्वालिटी पर पहला और उचित दाम पर आख़िरी फैसला इन्हीं का।",
    t2_name: "आदित्य सिंह चौधरी", t2_role: "प्रोपराइटर",
    t2_d: "शोरूम चलाते हैं और हरिओम बोरवेल की कमान संभालते हैं — हर बात के लिए आपका संपर्क।",
    t3_init: "दु", t3_name: "दुर्गेश सिंह चौधरी", t3_role: "सह-मालिक",
    t3_d: "स्टॉक, सप्लाई और बिक्री के बाद की सेवा संभालते हैं — आपका सामान समय पर खेत तक पहुँचाना इन्हीं की ज़िम्मेदारी।",
    gal_kicker: "हमारी दुकान से",
    gal_title: 'असली दुकान, असली स्टॉक,<br><span class="grad">असली लोग।</span>',
    gal_c1: "हमारा शोरूम, चाँद रोड", gal_c2: "काउंटर पर",
    gal_c3: "पूरी प्रोडक्ट रेंज", gal_c4: "अधिकृत ब्रांड बोर्ड",
    con_kicker: "आइए · कॉल कीजिए · व्हाट्सएप कीजिए",
    con_title: 'स्टॉक ख़ुद देखकर आइए।<br><span class="grad">चाय हमारी तरफ़ से।</span>',
    con_addr_t: "आदित्य एजेंसी",
    con_addr: "कुंडीपुरा पुलिस थाना के पास, चाँद रोड, बोहता, जिला छिंदवाड़ा, म.प्र. – 480001",
    con_addr_link: "गूगल मैप्स में खोलें →",
    con_ph_t: "कॉल करें", con_ph_s: "सोम–शनि, सुबह 11 – रात 8",
    con_wa_t: "व्हाट्सएप", con_wa_s: "सबसे तेज़ जवाब — अपनी लिस्ट भेजें",
    con_em_t: "ईमेल", con_em_s: "रेट और थोक ऑर्डर के लिए",
    con_tm_t: "समय", con_tm: "सुबह 11:00 – रात 8:00", con_tm_s: "रविवार बंद",
    con_gst_t: "GSTIN", con_gst_s: "पूरा बिल, पूरा भरोसा",
    form_t: "पूछताछ भेजें",
    form_s: "यह फॉर्म भरें — व्हाट्सएप खुलेगा और आपका संदेश तैयार मिलेगा।",
    form_name: "आपका नाम", form_village: "गाँव / शहर", form_need: "आपको क्या चाहिए?",
    form_msg: "संदेश (वैकल्पिक)", form_btn: "व्हाट्सएप से भेजें",
    opt_pump: "पम्प (सबमर्सिबल / मोनोब्लॉक आदि)",
    opt_pipe: "पाइप (PVC / HDPE / GI / केसिंग)",
    opt_drip: "ड्रिप / स्प्रिंकलर / मल्चिंग",
    opt_elec: "इलेक्ट्रिकल (स्टार्टर / पैनल / वायर)",
    opt_fit: "फिटिंग व एक्सेसरीज़",
    opt_bore: "बोरवेल ड्रिलिंग (हरिओम बोरवेल)",
    opt_other: "कुछ और",
    foot_tag: "आपका भरोसा, हमारी पहचान।",
    foot_explore: "देखें", foot_contact: "संपर्क", foot_visit: "पता", foot_map: "गूगल मैप्स →",
    foot_copy: "© 2026 आदित्य एजेंसी, छिंदवाड़ा। GSTIN 23AIPPC2490B1ZV",
    foot_made: "2010 से किसानों की सेवा में",
    
    // Borewell sizes additions
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
    bw_s4_casing: "एपीआई ग्रेड स्टील / कस्टम पीवीसी",
    
    bw_meta_use: "मुख्य उपयोग:",
    bw_meta_casing: "केसिंग प्रकार:"
  }
};

const WA_NUMBER = "919926920588";

/* ─────────── language engine ─────────── */
const body = document.body;
const langBtns = document.querySelectorAll(".lang-opt");
let currentLang = "en";

/* ─────────── Borewell Sizing Interactive Logic ─────────── */
let selectedBorewellSize = "s1";

function updateBorewellDetails() {
  const dict = I18N[currentLang];
  const size = selectedBorewellSize; // "s1", "s2", "s3", "s4"
  
  const titleEl = document.getElementById("bwDetailTitle");
  const descEl = document.getElementById("bwDetailDesc");
  const useEl = document.getElementById("bwDetailUse");
  const casingEl = document.getElementById("bwDetailCasing");
  
  if (titleEl) titleEl.textContent = dict[`bw_${size}_title`] || "";
  if (descEl) descEl.textContent = dict[`bw_${size}_desc`] || "";
  if (useEl) useEl.textContent = dict[`bw_${size}_use`] || "";
  if (casingEl) casingEl.textContent = dict[`bw_${size}_casing`] || "";
  
  // Highlight active tab
  document.querySelectorAll(".bw-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.size === size);
  });
  
  // Update WhatsApp link message for borewell size
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
  
  // Trigger borewell details update to match the language
  updateBorewellDetails();
  
  langBtns.forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  try { localStorage.setItem("aa-lang", lang); } catch (e) {}
}

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(currentLang === "en" ? "hi" : "en");
});

try {
  const saved = localStorage.getItem("aa-lang");
  if (saved && saved !== "en") applyLang(saved);
} catch (e) {}

/* ─────────── nav scroll + mobile menu ─────────── */
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

/* ─────────── marquee: duplicate track for seamless loop ─────────── */
const track1 = document.getElementById("marqueeTrack1");
if (track1) track1.innerHTML += track1.innerHTML;
const track2 = document.getElementById("marqueeTrack2");
if (track2) track2.innerHTML += track2.innerHTML;

/* ─────────── reveal on scroll ─────────── */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
);
document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach(el => revealObserver.observe(el));

/* ─────────── animated counters ─────────── */
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const dur = 1600;
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
  { threshold: 0.6 }
);
document.querySelectorAll(".count").forEach(el => counterObserver.observe(el));

/* ─────────── product enquiry buttons ─────────── */
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

/* ─────────── enquiry form → WhatsApp ─────────── */
document.getElementById("enqForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("fName").value.trim();
  const village = document.getElementById("fVillage").value.trim();
  const needSel = document.getElementById("fNeed");
  const need = needSel.options[needSel.selectedIndex].text;
  const msg = document.getElementById("fMsg").value.trim();

  const lines =
    currentLang === "hi"
      ? [
          "नमस्ते आदित्य एजेंसी! 🙏",
          `नाम: ${name}`,
          village ? `गाँव/शहर: ${village}` : "",
          `ज़रूरत: ${need}`,
          msg ? `संदेश: ${msg}` : "",
          "कृपया कीमत और उपलब्धता बताएँ।"
        ]
      : [
          "Namaste Aditya Agency! 🙏",
          `Name: ${name}`,
          village ? `Village/Town: ${village}` : "",
          `Requirement: ${need}`,
          msg ? `Message: ${msg}` : "",
          "Please share price and availability."
        ];

  const text = lines.filter(Boolean).join("\n");
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});

/* ─────────── scroll progress ─────────── */
const scrollProgress = document.getElementById("scrollProgress");
if (scrollProgress) {
  window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + "%";
  }, { passive: true });
}

/* ─────────── gallery lightbox ─────────── */
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCaption = document.getElementById("lbCaption");
const lbClose = document.getElementById("lbClose");

if (lightbox) {
  document.querySelectorAll(".gal-item").forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const caption = item.querySelector("figcaption");
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCaption.textContent = caption ? caption.textContent : "";
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden"; // prevent background scroll
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  };

  lbClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) closeLightbox();
  });
}

/* ─────────── Borewell interactive tab click handlers ─────────── */
document.querySelectorAll(".bw-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    selectedBorewellSize = tab.dataset.size;
    updateBorewellDetails();
  });
});

// Run initial configurations
updateBorewellDetails();
