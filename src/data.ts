import { ServiceDetail, Project } from './types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'drilling',
    title: 'Water Well Drilling Services',
    description: 'Professional exploration and deep well drilling services for industrial, agricultural, and domestic water supply.',
    longDescription: 'NGC Industrial Pump Trading & Services is a trusted leader in deep-well groundwater exploration. We utilize high-capacity rotary and percussion drilling rigs capable of penetrating diverse geological strata to reach clean, high-yield aquifers. Our experienced drilling engineers, geologists, and technicians handle the complete process—from permit filing and geological surveys to drilling, casing, sanitary sealing, and yield testing.',
    bullets: [
      'Rotary & percussion deep well drilling (up to 1,500 feet depth)',
      'Groundwater surveying, geological mapping & site selection',
      'High durability steel and uPVC casing installation.',
      'Air-surging, well development, and well casing rehabilitation',
      'Comprehensive step-drawdown pumping tests and yield analysis',
      'Sanitary grout sealing to prevent surface water contamination'
    ],
    specs: [
      { label: 'Diameter Range', value: '4" to 24" nominal borehole size' },
      { label: 'Depth Capacity', value: 'Up to 1,500 feet (450 meters)' },
      { label: 'Rig Formats', value: 'Rotary rigs - crawler type & air hammer rigs' },
      { label: 'Geologies Covered', value: 'Clay, sand, limestone, granite, basalt' }
    ],
    image: '/images/drilling_samira_enhanced_1782796160829.jpg',
    images: [
      '/images/drilling_1.jpg',
      '/images/drilling_2.jpg',
      '/images/drilling_3.jpg',
      '/images/drilling_4.jpg',
      '/images/drilling_5.jpg',
      '/images/drilling_6.jpg'
    ],

  },
  {
    id: 'supply',
    title: 'Electro-Mechanical Supply',
    description: 'Top-tier industrial pump trading, high-efficiency motors, smart control panels, and fluid accessories.',
    longDescription: 'We supply, customize, and deliver premium electro-mechanical hardware for fluid handling systems. Partnering with major global manufacturers, we supply high-performance submersible pumps, end-suction centrifugal pumps, booster packages, and electrical controls. Every mechanical asset is configured to match precise flow and head demands, optimizing energy efficiency and ensuring long-term motor protection.',
    bullets: [
      'Heavy-duty submersible deep well pumps and motors (1 HP to 150 HP+)',
      'Centrifugal end-suction, multi-stage, and horizontal split-case pumps',
      'Custom-built electrical control panels (VFD, soft-starters, star-delta)',
      'Smart pump protectors (over/under voltage, dry-run, phase failure)',
      'Premium fluid accessories: valves, expansion tanks, and manifold pipelines',
      'Calibrated digital and mechanical flowmeters, gauges, and level sensors',
      'Repair of any Pump and Motor',

    ],
    specs: [
      { label: 'Motor Rating', value: '1 HP to 200 HP, Single/Three-phase' },
      { label: 'Power Classes', value: '230V, 460V, 380V (50Hz / 60Hz)' },
      { label: 'Core Partnerships', value: 'Franklin Electric, Grundfos, NGC Custom series' },
      { label: 'Material Builds', value: 'Cast iron, Stainless Steel 304/316, Bronze' }
    ],
    image: '/images/pump_supply_thumb_1782701786616.jpg',
    images: [
      '/images/electroM/1111.png',
      '/images/electroM/1111a.png',
      '/images/electroM/1111b.png',
      '/images/electroM/1111c.png',
      '/images/electroM/1111d.png',
      '/images/electroM/1111e.jpg',
      '/images/electroM/1111f.png',
      '/images/electroM/1111g.png',
      '/images/electroM/1111h.png',
      '/images/electroM/1111i.jpg'
    ],
  },
  {
    id: 'maintenance',
    title: 'Water Services & Maintenance',
    description: 'Comprehensive electro-mechanical troubleshooting, pump retrieval & repair, and well rehabilitation.',
    longDescription: 'Downtime in water supply can halt entire production lines or residential blocks. Our rapid-response field engineering team is equipped with specialized crane trucks, downhole diagnostic cameras, and calibrated testing instruments. We offer emergency pump replacements, custom control panel rewiring, deep well cleaning, and preventative maintenance contracts to guarantee trouble-free operations.',
    bullets: [
      'Heavy-duty pump retrieval and installation with service crane trucks',
      'Downhole CCTV well inspection and scanning (up to 1,000 feet depth)',
      'Submersible motor troubleshooting, megger testing, and rewinding',
      'Control panel automation tuning, VFD calibration, and repair',
      'Well rehabilitation (acidizing, high-pressure washing, and desand)',
      'Water reservoir disinfection and pipe fitting modifications'
    ],
    specs: [
      { label: 'Response Target', value: 'Under 24 hours for emergency shutdowns' },
      { label: 'Diagnostic Depth', value: 'Full color video scanning down to 1,000 ft' },
      { label: 'Field Assets', value: 'Boom truck cranes, mobile testing generators' },
      { label: 'Preventive Care', value: 'Bi-annual & annual custom service contracts' }
    ],
    image: '/images/water_service_thumb_1782701798458.jpg',
     images: [
      '/images/wsm/ws1.png',
      '/images/wsm/ws2.png',
      '/images/wsm/ws3.png',
      '/images/wsm/ws4.png',
      '/images/wsm/ws5.png',
      '/images/wsm/ws6.png',
      '/images/wsm/ws7.png',
      '/images/wsm/ws8.jpg',
      '/images/wsm/ws9.png'
    ],
  },
  {
    id: 'camera-logging',
    title: 'Downhole Camera Logging',
    description: 'High-definition dual-camera downhole color scanning and recording to inspect casings, screens, and formations.',
    longDescription: 'Our downhole camera logging service uses advanced 360° camera CCTV systems with high-intensity LEDs. This allows real-time inspection of deep water wells up to 1,000 feet depth to identify casing fractures, scale buildup, slotted pipe blockages, sand infiltration points, and general well integrity.',
    bullets: [
      'High-definition 360° views',
      'Continuous depth-encoded video recording with high-intensity LED lighting',
      'Accurate identification of casing collapse, fractures, or corrosion points',
      'Pinpointing silt, sand infiltration, or bacterial scale accumulation',
      'Comprehensive inspection report with digital video files for client records',
      'Post-rehabilitation inspection to verify successful cleaning/acidizing'
    ],
    specs: [
      { label: 'Max Logging Depth', value: '1,000 feet (300 meters)' },
      { label: 'Camera Resolution', value: '1080p HD Color with Dual-View' },
      { label: 'Lighting System', value: 'Adjustable high-intensity LED arrays' },
      { label: 'Output Format', value: 'USB Digital MP4 & Formal Inspection PDF' }
    ],
    image: '/images/water_service_thumb_1782701798458.jpg',
    images: [
        '/images/cameraL/1c.png',
      '/images/cameraL/2c.png',
      '/images/cameraL/3c.png',
      '/images/cameraL/4c.png',
      '/images/cameraL/5c.png',
      '/images/cameraL/6c.png'
    ],
  },
  {
    id: 'pump-house',
    title: 'Construction of Pump House',
    description: 'Civil works and structural concrete housing to protect booster systems, VFD controllers, and mechanical pumps.',
    longDescription: 'Protecting your mechanical investment is vital. We provide complete structural engineering and construction of heavy-duty concrete pump houses. Our civil works include reinforced concrete foundations, durable masonry walls, steel-framed roofing, weather-proof sealing, electrical ventilation systems, and secure locking to safeguard high-value VFD panels and booster systems from environmental elements.',
    bullets: [
      'Reinforced concrete foundations with precision pump mounting anchor bolts',
      'Weather-resistant masonry walls with high-durability plaster finishes',
      'Heavy-gauge metal roof frames and double-insulated roofing sheets',
      'Integrated active ventilation, louvered windows, and exhaust blowers',
      'NEMA-compliant electrical conduit pathways and grounding rods',
      'Secure steel doors with heavy industrial locksets and external lighting'
    ],
    specs: [
      { label: 'Structural Class', value: 'Reinforced concrete & structural steel framework' },
      { label: 'Foundation Style', value: 'Monolithic slab with vibration-damping pads' },
      { label: 'Electrical Class', value: 'NEMA-rated circuit boxes & conduit networks' },
      { label: 'Roofing Material', value: 'Pre-painted rib-type galvanized metal sheets' }
    ],
    image: '/images/drilling_service_thumb_1782701770893.jpg',
    images: [
        '/images/pumpH/ph1.png',
      '/images/pumpH/ph2.png',
      '/images/pumpH/ph3.png',
      '/images/pumpH/ph4.png',
      '/images/pumpH/ph5.png',
      '/images/pumpH/ph6.png'
    ],
  },
  {
    id: 'frame-fabrication',
    title: 'Frame & Skid Fabrication',
    description: 'Custom structural steel framing, manifold skids, pump brackets, and heavy-duty mechanical mounting bases.',
    longDescription: 'NGC designs and fabricates industrial-grade structural frames, baseplates, and booster pump skids. Using premium-certified carbon steel or high-resistance Stainless Steel (304/316), our skilled welders craft highly stable bases that reduce system vibration, handle heavy mechanical stress, and resist chemical/saline corrosion in demanding environments.',
    bullets: [
      'Custom baseplates and skids for single, duplex, and triplex pump setups',
      'Precision structural welding conforming to AWS D1.1 standards',
      'Corrosion-resistant epoxy priming and protective poly-coat finishes',
      'Vibration-isolation mounting mounts and shock-absorbing rubber pads',
      'Custom structural supports for pipelines, overhead cranes, and tanks',
      'On-site custom modifications and structural alignment checks'
    ],
    specs: [
      { label: 'Metal Materials', value: 'ASTM A36 Carbon Steel, SS304, SS316' },
      { label: 'Welding Standards', value: 'AWS D1.1 structural certification' },
      { label: 'Surface Finish', value: 'Sandblasted, epoxy-primed & polyurethane coated' },
      { label: 'Load Capacity', value: 'Custom engineered up to 15 tons dynamic load' }
    ],
    image: '/images/pump_supply_thumb_1782701786616.jpg',
     images: [
        '/images/frameF/fb1.png',
      '/images/frameF/fb2.png',
      '/images/frameF/fb3.png',
      '/images/frameF/fb4.png',
      '/images/frameF/fb5.png',
      '/images/frameF/fb6.png',
      '/images/frameF/fb7.png',
      '/images/frameF/fb8.png',
      '/images/frameF/fb9.png'
    ],
  },
  {
    id: 'pipe-laying',
    title: 'Pipe Laying & Transmission Lines',
    description: 'High-integrity piping installation, transmission pipeline layouts, flange connections, and manifold setups.',
    longDescription: 'Efficient water distribution requires robust pipelines. We specialize in the layout, trenching, welding, and alignment of heavy-duty water transmission pipelines. Whether deploying high-density polyethylene (HDPE), durable Schedule 40 carbon steel, or high-purity Stainless Steel pipes, we ensure leak-free flange connections, municipal-grade trenching, and certified hydrostatic pressure testing.',
    bullets: [
      'Trench excavation, bedding, backfilling, and compaction works',
      'Certified butt-fusion welding for high-density HDPE piping',
      'Threaded, flanged, and grooved pipe connections for fast serviceability',
      'Hydrostatic pressure testing at 1.5x design pressure to verify integrity',
      'Installation of air-release valves, gate valves, and pressure-reducing nodes',
      'Manifold assembly and manifold pipe sizing for high-flow pump stations'
    ],
    specs: [
      { label: 'Pipe Materials', value: 'HDPE (PE100), Carbon Steel, Stainless Steel, PVC' },
      { label: 'Diameter Range', value: '2" to 16" transmission pipe sizes' },
      { label: 'Pressure Ratings', value: 'SDR 11, SDR 17, Schedule 40, Schedule 80' },
      { label: 'Testing Standard', value: 'ASTM/AWWA hydrostatic pressure protocols' }
    ],
    image: '/images/drilling_service_thumb_1782701770893.jpg',
    images: [
        '/images/pipeL/pipe1.png',
      '/images/pipeL/pipe2.png',
      '/images/pipeL/pipe3.png',
      '/images/pipeL/pipe4.png',
      '/images/pipeL/pipe5.png'
    ],
  },
  {
    id: 'geo-resistivity',
    title: 'Geo-Resistivity Survey',
    description: 'Scientific ground earth resistivity scanning and hydrogeological mapping to locate productive water aquifers.',
    longDescription: 'Ensure drilling success with geo-resistivity. Before any heavy rig is deployed, our licensed geologists and field technicians perform a vertical electrical sounding (VES) survey. By passing electric currents through the ground, we map subsurface electrical resistivity to accurately identify water-bearing sand/gravel aquifers, estimate water tables, and prevent dry-hole drill sites.',
    bullets: [
      'Vertical Electrical Sounding (VES) ground survey protocols',
      'Accurate mapping of geologic layers (clay, sand, bedrock, gravel)',
      'Precise depth estimation of the fresh-water water-bearing aquifer zones',
      'Prevention of drilling into dry zones or brackish saltwater layers',
      'Comprehensive report signed and sealed by a registered Geologist',
      'Site selection recommendations optimized for high-yield well output'
    ],
    specs: [
      { label: 'Methodology', value: 'Schlumberger & Wenner array configuration' },
      { label: 'Scanning Depth', value: 'Up to 1,200 feet (360 meters)' },
      { label: 'Personnel', value: 'Conducted by licensed geologists & field technicians' },
      { label: 'Final Output', value: 'Resistivity profile charts & Geological report' }
    ],
    image: '/images/water_service_thumb_1782701798458.jpg',
    images: [
        '/images/geoR/geo1.jpg',
      '/images/geoR/geo2.jpg',
      '/images/geoR/geo3.jpg',
      '/images/geoR/geo4.jpg'
    ],
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Deep Well Drilling, Electro-Mechanical Supply & Construction of Pump house and Filtration',
    category: ['supply', 'drilling'],
    description: 'Successfully Completed 10 Deep Well Drilling Projects Across Central Luzon, Supply of materials and Construction of Pump House & Filtration',
    location: 'Central Luzon',
    client: 'Maynilad',
    completionDate: '2022-2024',
    image: '/images/portfolio_drilling_1_1782804747436.jpg',
    images: [
      '/images/portfolio_images/site1.jpg',
      '/images/portfolio_images/site2.jpg',
      '/images/portfolio_images/site3.jpg',
      '/images/portfolio_images/site4.jpg',
      '/images/portfolio_images/site5.jpg',
      '/images/portfolio_images/site6.jpg',
      '/images/portfolio_images/site7.jpg',
      '/images/portfolio_images/site8.jpg'
    ],
    highlights: [
      'Penetrated hard formation with rotary rig',
      'Simultanious drilling of 10 sites',
      'Completed each project site on time'
    ]
  },
  {
    id: 'p2',
    title: 'Downhole Camera Logging of Six (6) Deep Wells at the Refinery',
    category: 'maintenance',
    description: 'Performed downhole camera logging of six (6) deep wells to inspect internal well conditions, identify structural defects, and support accurate rehabilitation planning.',
    location: 'Limay, Bataan',
    client: 'Petron Refinery',
    completionDate: '2025-2026',
    image: '/images/pump_supply_thumb_1782701786616.jpg',
     images: [
      '/images/portfolio_images/cam1.png',
      '/images/portfolio_images/cam2.png',
      '/images/portfolio_images/cam3.png',
      '/images/portfolio_images/cam4.png',
      '/images/portfolio_images/cam5.png'
    ],
    highlights: [
      'Comprehensive well inspection',
      'Accurate defect identification',
      'Optimized rehabilitation planning'
    ]
  },
  {
    id: 'p3',
    title: 'Repair and Servicing of Four (4) Booster Pumps',
    category: 'servicing',
    description: 'Disconnection, removal, and repair of Wilo pump, ensuring full restoration to optimal operational condition.',
    location: 'New Clark City, Tarlac',
    client: 'Clark Airport',
    completionDate: 'May 2025',
    image: '/images/water_service_thumb_1782701798458.jpg',
    images: [
      '/images/portfolio_images/mainte1.jpg',
      '/images/portfolio_images/mainte2.jpg',
      '/images/portfolio_images/mainte3.jpg'
    ],
    highlights: [
      'Safe Removal and Installation of Four (4) Booster Pumps',
      'Comprehensive Assessment of Each Booster Pump to Identify Components Requiring Repair or Replacement',
      'Restored the Booster Pump System to Its Original Operating Pressure and Stable Performance'
    ]
  },
  {
    id: 'p4',
    title: 'Deep Well Extraction for Wind Farm Construction Project',
    category: 'supply',
    description: 'Supplied of electro mechanical & control, Construction of Pump house and Performed the safe extraction of deep well equipment to facilitate windmill construction activities while ensuring compliance with project specifications and safety standards.',
    location: 'Pilillia, Laguna',
    client: 'Vena Energy',
    completionDate: '2025',
    image: '/images/pump_supply_thumb_1782701786616.jpg',
    images: [
      '/images/portfolio_images/vena4.png',
      '/images/portfolio_images/vena3.png',
      '/images/portfolio_images/vena2.png',
      '/images/portfolio_images/vena5.png'
    ],
    highlights: [
      'Safe well extraction',
      'Site prepared for construction',
      'Safety and environmental compliance'
    ]
  },
   {
    id: 'p5',
    title: 'Deep Well Drilling, Supply of ALL Materials & Construction of Pump house',
    category: ['supply', 'drilling'],
    description: 'Successfully Completed Deep Well Drilling Projects in New CLark City, Supply of materials and Construction of Pump House.',
    location: 'New Clark City, Tarlac',
    client: 'BCDA - Maynilad',
    completionDate: '2024',
    image: '/images/portfolio_images/ncc.mp4',
    images: [
      '/images/portfolio_images/ncc.mp4'
    ],
    highlights: [
      'Penetrated hard formation with rotary rig',
      'Completion of pump house with high-quality architectural finishes',
      'Supply all materials on time - GenSet, Electro-Mech, Controller, Pipes'
    ]
  },
  {
    id: 'p6',
    title: 'Deep Well Rehabilitation & Yield Recovery',
    category: 'maintenance',
    description: 'Rehabilitation of Six (6) Deep Wells at the Refinery, Resulting in Increased Flow Rate and Extended Well Service Life',
    location: 'Limay, Bataan',
    client: 'Petron Refinery',
    completionDate: '2025-2026',
    image: '/images/water_service_thumb_1782701798458.jpg',
    images: [
      '/images/portfolio_images/rehab1.png',
      '/images/portfolio_images/rehab11.png',
      '/images/portfolio_images/rehab2.png',
      '/images/portfolio_images/rehab22.png',
      '/images/portfolio_images/rehab3.png',
      '/images/portfolio_images/rehab33.png',
      '/images/portfolio_images/rehab4.png',
      '/images/portfolio_images/rehab44.png',
      '/images/portfolio_images/rehab5.png',
      '/images/portfolio_images/rehab55.png'
    ],
    highlights: [
      'Comprehensive Assessment of Each Deep Well Prior to Rehabilitation to Determine Its Condition and Required Corrective Actions',
      'Air-surging well cleaning followed by safe chemical scale dissolving',
      'Restored original well flow and some well result in increased of flow rate'
    ]
  },
   {
    id: 'p7',
    title: 'Supply and Construction of a Deep Well for Farm Water Supply',
    category: ['supply', 'drilling'],
    description: 'Delivered a complete deep well drilling ,supply of electro mechanical & control and construction solution to provide a reliable and sustainable water supply for agricultural operations.',
    location: 'General Tinio, Nueva Ecija',
    client: 'Private',
    completionDate: 'May 2023',
    image: '/images/water_service_thumb_1782701798458.jpg',
    images: [
      '/images/portfolio_images/tinio1.png',
      '/images/portfolio_images/tinio2.png',
       '/images/portfolio_images/tinio3.png',
      '/images/portfolio_images/tinio4.png',
      '/images/portfolio_images/tinio5.png'
    ],
    highlights: [
      'Complete turnkey solution',
      'Reliable farm water supply',
      'Quality drilling and construction'
    ]
  }
];

export const FAQS_DATA = [
  {
    question: "What is NGC's process for drilling a new deep well?",
    answer: "Our process begins with an on-site geological survey and obtaining the necessary municipal drilling permits. Once approved, we mobilize our truck-mounted rigs for drilling, install high-grade carbon steel or heavy PVC casings, develop the well using high-pressure air compressors to clear sediment, perform a formal pumping test to determine yield, and finish with sanitary grouting and pump installation."
  },
  {
    question: "How do I choose the correct pump horsepower and flow rate?",
    answer: "Pump selection depends on three main variables: the static water level of your well, the desired flow rate (Gallons Per Minute or GPM), and the total vertical height (head) the water must be lifted to reach its destination. Our electro-mechanical engineering team uses these values to calculate the precise head-discharge curve and configure the perfect pump and motor size for optimal efficiency."
  },
  {
    question: "What control protections are recommended for industrial pump installations?",
    answer: "We highly recommend smart electronic control panels. At minimum, panels should have digital protections against dry-running (which destroys pump impellers), over/under-voltage, phase-reversal/unbalance, and overloading. Incorporating a Variable Frequency Drive (VFD) is best, as it smoothly ramps motor speeds to maintain constant pressure, eliminating hammer shocks in pipes and greatly reducing electricity costs."
  },
  {
    question: "How often should deep well pumps undergo routine maintenance?",
    answer: "For commercial and agricultural setups, we recommend a semi-annual diagnostic inspection. This includes measuring motor insulation resistance (megger test), inspecting the electrical control panel contacts, checking operating amperage draw, and testing the pressure tank pre-charge. Regular check-ups prevent sudden motor burnouts and keep water flowing uninterrupted."
  },
  {
    question: "Can NGC troubleshoot existing deep well systems built by other contractors?",
    answer: "Absolutely. Our service department frequently gets called to troubleshoot, pull up, and repair pump systems originally installed by other operators. We bring specialized tools and cranes to handle deep installations safely, and we carry high-quality diagnostic gear, including under-water borehole inspection cameras to find structural or electrical faults quickly."
  }
];
